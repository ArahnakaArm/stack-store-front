import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Column } from 'src/app/shared/advanced-table/advanced-table.component';
import { BreadcrumbItem } from 'src/app/shared/page-title/page-title.model';
import { ORDERSLIST } from '../../shared/data';
import { Order } from '../../shared/ecommerce.model';
import { GlobalVariable } from '../../../../shared/variables/global.variable';
import { RouterVariable } from '../../../../shared/variables/router.variable';
import { RequestService } from '../../../../services/request.service';
import { AuthenticationService } from '../../../../services/authentication.service';

@Component({
  selector: 'app-ecommerce-orders',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  pageTitle: BreadcrumbItem[] = [];
  orderList: Order[] = [];
  selectAll: boolean = false;
  OrderStatusGroup: string = "All";
  loading: boolean = false;
  columns: Column[] = [];
  allUsers = [] as any
  isLoaded: boolean = false
  closedAlert = true
  notifyType = 'success'
  totalRecords = 0
  loggedInUser = {} as any
  pageSize = 10
  startIndex = 0
  endIndex = 0
  isInitData = false
  page = 1
  searchText = null
  alert = {
    type: 'success',
    headMessage: 'สำเร็จ !',
    message: 'ระบบได้ทำการบันทึกข้อมูลแล้ว'
  }

  alertSuccess = {
    type: 'success',
    headMessage: 'สำเร็จ !',
    message: 'ระบบได้ทำการบันทึกข้อมูลแล้ว'
  }
  alertFail = {
    type: 'danger',
    headMessage: 'เกิดข้อผิดพลาด !',
    message: 'กรุณาลองใหม่อีกครั้ง'
  }



  @ViewChild('advancedTable') advancedTable: any;

  constructor(   private authentication: AuthenticationService,private router: Router, private route: ActivatedRoute, private sanitizer: DomSanitizer, private request: RequestService) { 
    if(this.router.getCurrentNavigation()?.extras?.state?.notification != null){
      this.notifyType = this.router.getCurrentNavigation()?.extras?.state?.notification
    }else{
     this.notifyType = 'nothing'
    }

  }
  ngOnInit(): void {
    this.loggedInUser = this.authentication.getUser();
    if(this.notifyType == 'success') {
      this.alert = this.alertSuccess
      this.closedAlert = false
    }
    else if(this.notifyType == 'fail'){
      this.alert = this.alertFail
      this.closedAlert = false
    }else{
      this.closedAlert = true
    }

    this.pageTitle = [
      { label: 'จัดการผู้ใช้งานระบบ', path: '/' },
      {
        label: 'ผู้ใช้งานระบบทั้งหมด',
        path: '/',
        active: true,
      },
    ];
    this._fetchDataPaging(0,10);
  }

 
  async _fetchData() {
    this.isLoaded = false
    this.orderList = ORDERSLIST;
    let users = await this.request.get(
      GlobalVariable.BASE_API +
      GlobalVariable.BASE_RESOURCE_ALLUSERS
    );
    this.allUsers = users.resultData as any

    this.totalRecords = users.rowCount

  
    this.isLoaded = true
  }

  async _fetchDataPaging(offset, limit , searchText = null) {
    this.isLoaded = false
    this.orderList = ORDERSLIST;
    let search = searchText ? `&search=${searchText}` : ''
    let users = await this.request.get(
      GlobalVariable.BASE_API +
      GlobalVariable.BASE_RESOURCE_ALLUSERS+`?offset=${offset}&limit=${limit}${search}`
    );
    this.allUsers = users.resultData as any
    this.totalRecords = users.rowCount

    console.log(this.totalRecords)


    if(searchText == '' || searchText){
      if (this.totalRecords === 0) {
        this.startIndex = 0;
      }
      else {
        this.startIndex = ((this.page - 1) * this.pageSize) + 1;
      }
  
      this.endIndex = Number((this.page - 1) * this.pageSize + this.pageSize);
      if (this.endIndex > this.totalRecords) {
        this.endIndex = this.totalRecords;
      }
    }

  
    if(!this.isInitData) this.paginate()
    this.isInitData = true  
    this.isLoaded = true
  }

  async onEnterSearch (text) {
    console.log(text)
    await this._fetchDataPaging(0,10,text)
  }

  async activeUser(userId) {
    const res = await this.request.patch(
      GlobalVariable.BASE_API +
      GlobalVariable.BASE_RESOURCE_USER + `/${userId}`, {
      user_state_id: 'ACTIVED'
    }
    )
    if (res.resultCode == '20000') {
      this.closedAlert = false
      await this._fetchData()
    } else {

      this.alert = this.alertFail
      this.closedAlert = false
    }
  }

  async deactiveUser(userId) {
    const res = await this.request.patch(
      GlobalVariable.BASE_API +
      GlobalVariable.BASE_RESOURCE_USER + `/${userId}`, {
      user_state_id: 'DEACTIVED'
    }
    )
    if (res.resultCode == '20000') {
      this.closedAlert = false
      await this._fetchData()
    } else {
      this.closedAlert = false
      this.alert = this.alertFail
    }
  }


  async closeAlert() {
    this.closedAlert = true
  }


  paginate(): void {
    // paginate
    if (this.totalRecords === 0) {
      this.startIndex = 0;
    }
    else {
      this.startIndex = ((this.page - 1) * this.pageSize) + 1;
    }
    this.endIndex = Number((this.page - 1) * this.pageSize + this.pageSize);
    if (this.endIndex > this.totalRecords) {
      this.endIndex = this.totalRecords;
    }

    if(this.isInitData)  this._fetchDataPaging(((this.page - 1) * this.pageSize), 10)
   

  }

  async goCreateUser() {
    this.router.navigate(['/dashboard/user-accounts/create']);
  }

  async goEditUser(userId) {
    this.router.navigate([`/dashboard/user-accounts/${userId}/edit`]);
  }


  ngAfterViewInit(): void {
  }




}

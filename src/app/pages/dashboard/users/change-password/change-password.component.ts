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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common'

@Component({
  selector: 'app-ecommerce-orders',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  userId = null;
  user = null as any;
  userForm!: FormGroup;
  formSubmitted: boolean = false;
  notifyType = 'success';
  closedAlert = true;
  passNotEq = false
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
    message: 'กรุณาลองใหม่อีกครั้ง',
  };
  alertWrongPass = {
    type: 'danger',
    headMessage: 'เกิดข้อผิดพลาด !',
    message: 'รหัสผ่านไม่ถูกต้อง',
  };


  pageTitle: BreadcrumbItem[] = [];
  @ViewChild('advancedTable') advancedTable: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private request: RequestService,
    private location: Location
  ) {
    this.userId = this.route.snapshot.params.userId || null;
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      password: [null, [Validators.required]],
      newPassword: ['', [Validators.required , Validators.minLength]],
      conNewPassword: ['', [Validators.required]]
    });

   

    this.pageTitle = [
      { label: 'จัดการผู้ใช้งานระบบ', path: '/' },
      {
        label: 'เปลี่ยนรหัสผ่าน',
        path: '/',
        active: true,
      },
    ];
  }

  get formValues() {
    return this.userForm.controls;
  }

 

  async onSubmit() {
    this.formSubmitted = true;
    if(this.formValues.newPassword.value !== this.formValues.conNewPassword.value){
   
      this.passNotEq = true
      console.log('asdasd')
    }
    else{
      this.passNotEq = false
    }
    if (!this.userForm.valid || this.passNotEq) return;

    let res = {} as any;

    res = await this.request.post(
      GlobalVariable.BASE_API + GlobalVariable.BASE_RESOURCE_RESET_PASSWORD,
      {
        password : this.formValues.password.value,
        new_password : this.formValues.newPassword.value
      }
    );

    if(res.resultCode == '20000'){
      this.closedAlert = false
    }
    else if(res.resultCode == '40101'){
      this.alert = this.alertWrongPass
      this.closedAlert = false
    }
    else{
      this.alert = this.alertFail
      this.closedAlert = false
    }
  }

  async onExit() {
    this.location.back()
  }

  async closeAlert() {
    this.closedAlert = true;
  }

  ngAfterViewInit(): void {}
}

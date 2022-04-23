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
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userId = null;
  user = null as any;
  userForm!: FormGroup;
  formSubmitted: boolean = false;
  notifyType = 'success';
  closedAlert = true;
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
      type: [null, [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
    });

    this.initData();

    this.pageTitle = [
      { label: 'จัดการผู้ใช้งานระบบ', path: '/' },
      {
        label: 'ข้อมูลส่วนตัว',
        path: '/',
        active: true,
      },
    ];
  }

  get formValues() {
    return this.userForm.controls;
  }

  async initData() {
    this.userForm.controls['email'].disable();

    const res = await this.request.get(
      GlobalVariable.BASE_API + GlobalVariable.BASE_RESOURCE_ME
    );
    this.user = res.resultData;
    this.userForm.patchValue({
      firstname: this.user!.firstname,
      lastname: this.user!.lastname,
      email: this.user!.email,
      phoneNumber: this.user!.phonenumber,
      type: this.user!.user_type_id,
    });
  }

  async onSubmit() {
    this.formSubmitted = true;

    if (!this.userForm.valid) return;

    let res = {} as any;

    res = await this.request.patch(
      GlobalVariable.BASE_API + GlobalVariable.BASE_RESOURCE_ME,
      {
        firstname: this.formValues.firstname?.value,
        lastname: this.formValues.lastname?.value,
        email: this.formValues.email?.value,
        phone_number: this.formValues.phoneNumber?.value,
      }
    );

    if(res.resultCode == '20000'){
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

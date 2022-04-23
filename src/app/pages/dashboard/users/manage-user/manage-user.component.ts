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

@Component({
  selector: 'app-ecommerce-orders',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss'],
})
export class ManageUserComponent implements OnInit {
  isEditPage = false;
  userId = null;
  user = null as any;
  userForm!: FormGroup;
  formSubmitted: boolean = false;
  notifyType = 'success'
  closedAlert = true
  alert = {
    type: 'success',
    headMessage: 'สำเร็จ !',
    message: 'ระบบได้ทำการ Reset password ของผู้ใช้นี้แล้ว แจ้งให้เข้าใช้งานด้วยรหัสผ่านใหม่คือ : password'
  }

  alertSuccess = {
    type: 'success',
    headMessage: 'สำเร็จ !',
    message: 'ระบบได้ทำการ Reset password ของผู้ใช้นี้แล้ว แจ้งให้เข้าใช้งานด้วยรหัสผ่านใหม่คือ : password'
  }
  alertFail = {
    type: 'danger',
    headMessage: 'เกิดข้อผิดพลาด !',
    message: 'กรุณาลองใหม่อีกครั้ง'
  }

  pageTitle: BreadcrumbItem[] = [];
  @ViewChild('advancedTable') advancedTable: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private request: RequestService
  ) {
    this.userId = this.route.snapshot.params.userId || null;
  }

  ngOnInit(): void {
    if (this.userId) this.isEditPage = true;

    if (this.isEditPage) {
      this.userForm = this.fb.group({
        type: [null, [Validators.required]],
        firstname: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', [Validators.required]],
      });
    } else {
      this.userForm = this.fb.group({
        type: [null, [Validators.required]],
        firstname: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength]],
      });
    }

    if (this.isEditPage) this.initData();

    this.pageTitle = [
      { label: 'จัดการผู้ใช้งานระบบ', path: '/' },
      {
        label: this.isEditPage ? 'แก้ไขผู้ใช้งานระบบ' : 'เพิ่มผู้ใช้งานระบบ',
        path: '/',
        active: true,
      },
    ];
  }

  get formValues() {
    return this.userForm.controls;
  }

  async initData() {
    if (this.isEditPage) this.userForm.controls['email'].disable();

    const res = await this.request.get(
      GlobalVariable.BASE_API +
        GlobalVariable.BASE_RESOURCE_USER +
        `/${this.userId}`
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

    if (!this.userForm.valid) return

    let res = {} as any;
    if (this.isEditPage) {
      res = await this.request.patch(
        GlobalVariable.BASE_API +
          GlobalVariable.BASE_RESOURCE_USER +
          `/${this.userId}`,
        {
          firstname: this.formValues.firstname?.value,
          lastname: this.formValues.lastname?.value,
          email: this.formValues.email?.value,
          password: this.formValues.password?.value,
          user_type_id: this.formValues.type?.value,
          phone_number: this.formValues.phoneNumber?.value,
        }
      );
    } else {
      res = await this.request.post(
        GlobalVariable.BASE_API + GlobalVariable.BASE_RESOURCE_REGISTER,
        {
          firstname: this.formValues.firstname?.value,
          lastname: this.formValues.lastname?.value,
          email: this.formValues.email?.value,
          password: this.formValues.password?.value,
          user_type_id: this.formValues.type?.value,
          phone_number: this.formValues.phoneNumber?.value,
        }
      );
    }

    if (res.resultCode == '20100' || res.resultCode == '20000') {
      this.router.navigate(['/dashboard/user-accounts'], {
        state: { notification: 'success' },
      });
    } else {
      this.router.navigate(['/dashboard/user-accounts'], {
        state: { notification: 'fail' },
      });
    }
  }

  async onExit(){
    this.router.navigate(['/dashboard/user-accounts']);
  }

  async resetPass(){
    const res = await this.request.post(
      GlobalVariable.BASE_API +
      GlobalVariable.BASE_RESOURCE_RESET_PASSWORD +
        `/${this.userId}`,{}
    );

    if(res.resultCode == '20000'){
      this.closedAlert = false
    }
    else{
      this.alert = this.alertFail
      this.closedAlert = false
    }
  }

  async closeAlert() {
    this.closedAlert = true
  }


  ngAfterViewInit(): void {}
}

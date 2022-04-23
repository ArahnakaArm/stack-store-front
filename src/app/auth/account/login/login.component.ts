import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { RequestService } from '../../../services/request.service';
import { AuthenticationService } from '../../../services/authentication.service';
/* import { AuthenticationService } from '../../../core/service/auth.service'; */
import { GlobalVariable } from '../../../shared/variables/global.variable';
import { RouterVariable } from '../../../shared/variables/router.variable';

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  returnUrl: string = '/';
  loginForm!: FormGroup;
  formSubmitted: boolean = false;
  error: string = '';

  showPassword: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private request: RequestService,
    private fb: FormBuilder,
    private authentication: AuthenticationService
  ) /*     private authenticationService : AuthenticationService */
  {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      /*       email: ['ubold@coderthemes.com', [Validators.required, Validators.email]],
      password: ['test', Validators.required], */
      email: [
        '',
        [Validators.required, Validators.email],
      ],
      password: ['', Validators.required],
      rememberMe: [true],
    });

    // reset login status
    /*     this.authenticationService.logout(); */

    // get return url from route parameters or default to '/'
    this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  /**
   * convenience getter for easy access to form fields
   */
  get formValues() {
    return this.loginForm.controls;
  }

  /**
   * On submit form
   */
  async onSubmit() {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      this.loading = true;
      let credential = await this.request.post(
        GlobalVariable.BASE_API + GlobalVariable.BASE_RESOURCE_AUTH_LOCAL,
        {
          email: this.formValues.email?.value,
          password: this.formValues.password?.value,
        }
      );
      console.log(credential);

      if (credential.resultCode === '40101' || credential.resultCode === '40401') {
        this.loading = false;
        this.error = 'เกิดข้อผิดพลาด! อีเมล์หรือรหัสผ่านของท่านผิด';
        return;
      }

      if (credential.resultCode !== '20000') {
        this.loading = false;
        this.error = 'เกิดข้อผิดพลาด! กรุณาลองใหม่อีกครั้ง';
        return;
      }

      /*     console.log(credential) */
      let rememberMe = null as any;
      if (this.formValues.rememberMe.value) {
        rememberMe = {
          email: this.formValues.email?.value,
          password: this.formValues.password?.value,
        };
      }

      await this.authentication.login(credential.resultData, rememberMe);

      let userInfo = await this.request.get(
        GlobalVariable.BASE_API + GlobalVariable.BASE_RESOURCE_ME
      );
      if (userInfo.resultData.user_state_id !== 'ACTIVED') {
        await this.authentication.signOut();
        this.loading = false;
        this.error =
          'เกิดข้อผิดพลาด! บัญชีของท่านถูกระงับ กรุณาติดต่อผู้ดูแลระบบ';
        return;
      }

      this.authentication.setUser(userInfo.resultData).then(() => {
        this.router.navigate([this.returnUrl]);
      });

      /*  this.authenticationService.login(this.formValues.email?.value, this.formValues.password?.value)
        .pipe(first())
        .subscribe(
          (data: any) => {
            this.router.navigate([this.returnUrl]); 
          },
          (error: any) => {
            this.error = error;
            this.loading = false;
          });  */
    }
  }
}

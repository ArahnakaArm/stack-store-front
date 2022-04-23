import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './account/login/login.component';
import { Login2Component } from './account2/login2/login2.component';
import { ConfirmMailComponent } from './account/confirm-mail/confirm-mail.component';
import { ConfirmMail2Component } from './account2/confirm-mail2/confirm-mail2.component';
import { LockScreen2Component } from './account2/lock-screen2/lock-screen2.component';
import { LockScreenComponent } from './account/lock-screen/lock-screen.component';
import { LogoutComponent } from './account/logout/logout.component';
import { Logout2Component } from './account2/logout2/logout2.component';
import { RecoverPasswordComponent } from './account/recover-password/recover-password.component';
import { RecoverPassword2Component } from './account2/recover-password2/recover-password2.component';
import { RegisterComponent } from './account/register/register.component';
import { Register2Component } from './account2/register2/register2.component';
import { SigninSignupComponent } from './account/signin-signup/signin-signup.component';
import { SigninSignup2Component } from './account2/signin-signup2/signin-signup2.component';
import { NgbAlertModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { UiModule } from '../shared/ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { WidgetModule } from '../shared/widget/widget.module';



@NgModule({
  declarations: [
    LoginComponent,
    Login2Component,
    ConfirmMailComponent,
    ConfirmMail2Component,
    LockScreenComponent,
    LockScreen2Component,
    LogoutComponent,
    Logout2Component,
    RecoverPasswordComponent,
    RecoverPassword2Component,
    RegisterComponent,
    Register2Component,
    SigninSignupComponent,
    SigninSignup2Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbAlertModule,
    NgbNavModule,
    UiModule,
    WidgetModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmMailComponent } from './account/confirm-mail/confirm-mail.component';
import { LockScreenComponent } from './account/lock-screen/lock-screen.component';
import { LoginComponent } from './account/login/login.component';
import { LogoutComponent } from './account/logout/logout.component';
import { RecoverPasswordComponent } from './account/recover-password/recover-password.component';
import { RegisterComponent } from './account/register/register.component';
import { SigninSignupComponent } from './account/signin-signup/signin-signup.component';
import { ConfirmMail2Component } from './account2/confirm-mail2/confirm-mail2.component';
import { LockScreen2Component } from './account2/lock-screen2/lock-screen2.component';
import { Login2Component } from './account2/login2/login2.component';
import { Logout2Component } from './account2/logout2/logout2.component';
import { RecoverPassword2Component } from './account2/recover-password2/recover-password2.component';
import { Register2Component } from './account2/register2/register2.component';
import { SigninSignup2Component } from './account2/signin-signup2/signin-signup2.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'confirm',
    component: ConfirmMailComponent,
    pathMatch: 'full'
  },
  {
    path: 'reset-password',
    component: RecoverPasswordComponent,
    pathMatch: 'full'
  },
  {
    path: 'logout',
    component: LogoutComponent,
    pathMatch: 'full'
  },
  {
    path: 'lock-screen',
    component: LockScreenComponent,
    pathMatch: 'full'
  },
  {
    path: 'signin-signup',
    component: SigninSignupComponent,
    pathMatch: 'full'
  },

  {
    path: 'login2',
    component: Login2Component,
    pathMatch: 'full'
  },
  {
    path: 'register2',
    component: Register2Component,
    pathMatch: 'full'
  },
  {
    path: 'confirm2',
    component: ConfirmMail2Component,
    pathMatch: 'full'
  },
  {
    path: 'reset-password2',
    component: RecoverPassword2Component,
    pathMatch: 'full'
  },
  {
    path: 'logout2',
    component: Logout2Component,
    pathMatch: 'full'
  },
  {
    path: 'lock-screen2',
    component: LockScreen2Component,
    pathMatch: 'full'
  },
  {
    path: 'signin-signup2',
    component: SigninSignup2Component,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

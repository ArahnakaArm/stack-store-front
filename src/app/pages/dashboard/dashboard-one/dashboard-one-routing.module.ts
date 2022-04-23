import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardOneComponent } from './dashboard-one.component';

const routes: Routes = [
    { path: '', component: DashboardOneComponent} ,
    {path: 'user-accounts', loadChildren: () => import('../users/users-list/users.module').then(m => m.UsersModule)},
    {path: 'user-accounts/create', loadChildren: () => import('../users/manage-user/manage-user.module').then(m => m.UsersModule)},
    {path: 'user-accounts/:userId/edit', loadChildren: () => import('../users/manage-user/manage-user.module').then(m => m.UsersModule)},
    {path: 'profile', loadChildren: () => import('../users/user-profile/user-profile.module').then(m => m.UserProfileModule)},
    {path: 'user/password', loadChildren: () => import('../users/change-password/change-password.module').then(m => m.ChangePasswordModule)}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardOneRoutingModule { }

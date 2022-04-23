import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  , ReactiveFormsModule } from '@angular/forms';
import { AdvancedTableModule } from 'src/app/shared/advanced-table/advanced-table.module';
import { PageTitleModule } from 'src/app/shared/page-title/page-title.module';
import { WidgetModule } from 'src/app/shared/widget/widget.module';
import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './change-password.component';
import { NgbAlertModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule ,
    FormsModule,
    AdvancedTableModule,
    WidgetModule,
    PageTitleModule,
    ChangePasswordRoutingModule,
    NgbAlertModule,
    NgbToastModule,
    NgbPaginationModule
  ]
})
export class ChangePasswordModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  , ReactiveFormsModule } from '@angular/forms';
import { AdvancedTableModule } from 'src/app/shared/advanced-table/advanced-table.module';
import { PageTitleModule } from 'src/app/shared/page-title/page-title.module';
import { WidgetModule } from 'src/app/shared/widget/widget.module';
import { OrdersRoutingModule } from './manage-user-routing.module';
import { ManageUserComponent } from './manage-user.component';
import { NgbAlertModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ManageUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule ,
    FormsModule,
    AdvancedTableModule,
    WidgetModule,
    PageTitleModule,
    OrdersRoutingModule,
    NgbAlertModule,
    NgbToastModule,
    NgbPaginationModule
  ]
})
export class UsersModule { }

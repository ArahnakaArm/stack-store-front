import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdvancedTableModule } from 'src/app/shared/advanced-table/advanced-table.module';
import { PageTitleModule } from 'src/app/shared/page-title/page-title.module';
import { WidgetModule } from 'src/app/shared/widget/widget.module';
import { OrdersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { NgbAlertModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
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

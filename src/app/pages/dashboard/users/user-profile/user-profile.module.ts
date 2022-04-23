import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  , ReactiveFormsModule } from '@angular/forms';
import { AdvancedTableModule } from 'src/app/shared/advanced-table/advanced-table.module';
import { PageTitleModule } from 'src/app/shared/page-title/page-title.module';
import { WidgetModule } from 'src/app/shared/widget/widget.module';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { NgbAlertModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule ,
    FormsModule,
    AdvancedTableModule,
    WidgetModule,
    PageTitleModule,
    UserProfileRoutingModule,
    NgbAlertModule,
    NgbToastModule,
    NgbPaginationModule
  ]
})
export class UserProfileModule { }

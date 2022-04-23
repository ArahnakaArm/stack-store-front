import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardTwoRoutingModule } from './dashboard-two-routing.module';
import { DashboardTwoComponent } from './dashboard-two.component';
import { WidgetModule } from 'src/app/shared/widget/widget.module';
import { PageTitleModule } from 'src/app/shared/page-title/page-title.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { UiModule } from 'src/app/shared/ui/ui.module';


@NgModule({
  declarations: [
    DashboardTwoComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    WidgetModule,
    PageTitleModule,
    NgApexchartsModule,
    DashboardTwoRoutingModule
  ]
})
export class DashboardTwoModule { }

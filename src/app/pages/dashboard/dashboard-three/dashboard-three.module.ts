import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { PageTitleModule } from 'src/app/shared/page-title/page-title.module';
import { WidgetModule } from 'src/app/shared/widget/widget.module';
import { DashboardThreeRoutingModule } from './dashboard-three-routing.module';
import { DashboardThreeComponent } from './dashboard-three.component';




@NgModule({
  declarations: [
    DashboardThreeComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    PageTitleModule,
    WidgetModule,
    DashboardThreeRoutingModule
  ]
})
export class DashboardThreeModule { }

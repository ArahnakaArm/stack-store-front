import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { WidgetModule } from 'src/app/shared/widget/widget.module';
import { PageTitleModule } from 'src/app/shared/page-title/page-title.module';
import { DashboardFourRoutingModule } from './dashboard-four-routing.module';
import { DashboardFourComponent } from './dashboard-four.component';

@NgModule({
  declarations: [
    DashboardFourComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    NgbTooltipModule,
    PageTitleModule,
    UiModule,
    WidgetModule,
    DashboardFourRoutingModule
  ]
})
export class DashboardFourModule { }

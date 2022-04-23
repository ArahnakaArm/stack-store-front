import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbNavModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PageTitleModule } from 'src/app/shared/page-title/page-title.module';
import { WidgetModule } from 'src/app/shared/widget/widget.module';
import { ContactsRoutingModule } from './contacts-routing.module';
import { MemberListComponent } from './member-list/member-list.component';
import { ProfileComponent } from './profile/profile.component';
import { MemberInfoComponent } from './member-list/member-info/member-info.component';
import { UserboxComponent } from './profile/userbox/userbox.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { TimelineComponent } from './profile/timeline/timeline.component';
import { AboutComponent } from './profile/about/about.component';


@NgModule({
  declarations: [
    MemberListComponent,
    ProfileComponent,
    MemberInfoComponent,
    UserboxComponent,
    SettingsComponent,
    TimelineComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgbNavModule,
    NgbPaginationModule,
    PageTitleModule,
    WidgetModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }

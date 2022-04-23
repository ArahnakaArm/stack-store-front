import { Component, Input, OnInit } from '@angular/core';
import { MemberInfo } from '../../shared/contacts.model';

@Component({
  selector: 'app-contact-member-info',
  templateUrl: './member-info.component.html',
  styleUrls: ['./member-info.component.scss']
})
export class MemberInfoComponent implements OnInit {

  @Input() member: MemberInfo = {};

  constructor () { }

  ngOnInit(): void {
  }

}

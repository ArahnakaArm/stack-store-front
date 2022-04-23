import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbItem } from 'src/app/shared/page-title/page-title.model';
import { MemberInfo } from '../shared/contacts.model';
import { MEMBERLIST } from '../shared/data';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  pageTitle: BreadcrumbItem[] = [];
  memberList: MemberInfo[] = [];
  searchTerm: string = '';
  newCustomer!: FormGroup;
  page = 1;

  @ViewChild('content', { static: true }) content: any;

  constructor (
    public activeModal: NgbModal,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.pageTitle = [{ label: 'Contacts', path: '/' }, { label: 'Contacts List', path: '/', active: true }];
    this._fetchData();
    this.newCustomer = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      position: ['', Validators.required],
      company: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get form1() { return this.newCustomer.controls; }

  /**
   * fetches member list
   */
  _fetchData(): void {
    this.memberList = MEMBERLIST;
  }

  /**
 * opens modal
 * @param title title of modal 
 * @param data data to be used in modal
 */
  openModal(): void {
    this.activeModal.open(this.content, { centered: true });
  }

  /**
  * Search Method
  */
  searchData(searchTerm: string): void {
    if (searchTerm === '') {
      this._fetchData();
    }
    else {
      let updatedData = MEMBERLIST;
      //  filter
      updatedData = updatedData.filter(member => (member.name?.toLowerCase().includes(searchTerm) || member.position?.toLowerCase().includes(searchTerm)));
      this.memberList = updatedData;
    }

  }

}

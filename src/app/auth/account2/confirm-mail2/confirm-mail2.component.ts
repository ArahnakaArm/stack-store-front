import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-confirm-mail2',
  templateUrl: './confirm-mail2.component.html',
  styleUrls: ['./confirm-mail2.component.scss']
})
export class ConfirmMail2Component implements OnInit {

  currentYear!: number;
  constructor () { }

  ngOnInit(): void {
    this.currentYear = Date.now();
  }

}

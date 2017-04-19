import { Component, OnInit, EventEmitter } from '@angular/core';

import { Account } from '../../account'
import { AccountDataService } from "../../services/account.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new.account.component.html',
  styleUrls: ['./new.account.component.scss']
})
export class NewAccountComponent {

  newAccount: Account = new Account();

  // @Output()
  // add: EventEmitter<Account> = new EventEmitter();

  constructor(private accountDataService: AccountDataService) {
  }

  addAccount() {
    this.accountDataService.addAccount(this.newAccount);
    this.newAccount = new Account();
  }

  ngOnInit() {
  }

}

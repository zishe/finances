import { Component, OnInit } from '@angular/core';

import { Account } from '../account'
import { AccountDataService } from "../services/account.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [AccountDataService]
})
export class AccountComponent {
  newAccount: Account = new Account();

  constructor(private accountDataService: AccountDataService) {
  }

  addAccount() {
    this.accountDataService.addAccount(this.newAccount);
    this.newAccount = new Account();
  }

  removeAccount(Account) {
    this.accountDataService.deleteAccountById(Account.id);
  }

  get accounts() {
    // console.log(this.accountDataService.getAllAccounts());

    return this.accountDataService.getAllAccounts();
  }

}
import { Component, OnInit } from '@angular/core';

import { Account } from '../account'
import { AccountDataService } from "../services/account.service";

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [AccountDataService]
})
export class AccountComponent implements OnInit {
  newAccount: Account = new Account();
  accounts: Account[] = [];
  typeToClass: string[] = ['account_balance_wallet', 'credit_card', 'account_balance']

  constructor(private accountDataService: AccountDataService) {
  }

   ngOnInit() {
     this.accountDataService.getAllAccounts().subscribe(accounts => this.accounts = accounts);
   }

  addAccount() {
    this.accountDataService.addAccount(this.newAccount);
    this.newAccount = new Account();
  }

  removeAccount(Account) {
    this.accountDataService.deleteAccountById(Account.id);
  }

  //get accounts() {
    //return [];
  //}

}
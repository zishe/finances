import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

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
  errorMessage: String = null;
  typeToClass: string[] = ['account_balance_wallet', 'credit_card', 'account_balance']

  constructor(private accountDataService: AccountDataService, private router: Router) {
  }

   ngOnInit() {
     this.accountDataService.getAll()
      .subscribe(accounts => this.accounts = accounts,
                    error => this.errorMessage = error);
   }

  addAccount() {
    this.accountDataService.addAccount(this.newAccount)
      .subscribe(account => this.accounts.push(account), error => this.errorMessage = error);
    this.newAccount = new Account();
  }

  removeAccount(Account) {
    this.accountDataService.deleteAccountById(Account.id);
  }

  show(account: Account){
    // console.log(account);
    this.router.navigate(['accounts', account.id]);
  }

  //get accounts() {
    //return [];
  //}

}
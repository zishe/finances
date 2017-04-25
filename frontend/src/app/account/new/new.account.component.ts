import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Angular2TokenService } from "angular2-token";

import { Account } from '../../account'
import { AccountDataService } from "../../services/account.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new.account.component.html',
  styleUrls: ['./new.account.component.scss'],
})
export class NewAccountComponent {

  newAccount: Account = new Account();
  actypes: String[] = [];

  @Output()
  add: EventEmitter<Account> = new EventEmitter();

  constructor(private accountDataService: AccountDataService,
    private angular2TokenService: Angular2TokenService) {

  }

  ngOnInit() {
    this.actypes = ['Cash', 'Card', 'Loan'];
  }

  addAccount() {
    this.add.emit(this.newAccount);
    console.log(this.angular2TokenService.currentAuthData);

    this.accountDataService.addAccount(this.newAccount);
    this.newAccount = new Account();
  }

}

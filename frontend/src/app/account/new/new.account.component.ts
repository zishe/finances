import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
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
  currencies: String[] = ['USD', 'RUB', 'THB']

  @Output()
  add: EventEmitter<Account> = new EventEmitter();

  constructor(private accountDataService: AccountDataService,
    private angular2TokenService: Angular2TokenService, private router: Router) {

  }

  ngOnInit() {
    this.actypes = ['Cash', 'Card', 'Loan'];
  }

  addAccount() {
    this.add.emit(this.newAccount);
    console.log(this.angular2TokenService.currentAuthData);

    this.accountDataService.addAccount(this.newAccount);

    this.newAccount = new Account();
    this.router.navigate(['/accounts']);
  }

}

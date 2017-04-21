import { Injectable } from '@angular/core';
import { Account } from '../account'
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Angular2TokenService } from "angular2-token";
import { environment } from "../../environments/environment";

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AccountDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for account's
  accounts: Account[] = [];

  constructor(private http: Http, private authToken: Angular2TokenService) {
    this.authToken.init(environment.token_auth_config);
  }

  // Simulate POST /accounts
  addAccount(account: Account): AccountDataService {
    if (!account.id) {
      account.id = ++this.lastId;
    }
    this.accounts.push(account);
    return this;
  }

  // Simulate DELETE /accounts/:id
  deleteAccountById(id: number): AccountDataService {
    this.accounts = this.accounts
      .filter(account => account.id !== id);
    return this;
  }

  // Simulate PUT /accounts/:id
  updateAccountById(id: number, values: Object = {}): Account {
    let account = this.getAccountById(id);
    if (!account) {
      return null;
    }
    Object.assign(account, values);
    return account;
  }

  // Simulate GET /accounts
  // getAll(): Account[] {
    // return this.http.get(`${this.apiPath}/accounts.json`).map(response => response.json().data as Account)
    // return this.accounts;
  // }

  // Simulate GET /accounts/:id
  getAccountById(id: number): Account {
    return this.accounts
      .filter(account => account.id === id)
      .pop();
  }

  getAllAccounts(): Observable<Account[]> {
    return this.authToken.get('accounts')
               .map(response => response.json() || {} as Account[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
import { Injectable } from '@angular/core';
import { Account } from '../account'
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Angular2TokenService } from "angular2-token";
import { environment } from "../../environments/environment";

import { Observable } from 'rxjs/Observable';
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
  addAccount(account: Account): Observable<any> {
    let body = JSON.stringify({ account });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log('adding account');
    console.log(body);
    return this.authToken.post('accounts', body, options)
      .map(response => response.json() || {})
      .catch(this.handleError);


    // this.accounts.push(account);
    // return this;
  }

  // Simulate DELETE /accounts/:id
  deleteAccountById(id: number): AccountDataService {
    this.accounts = this.accounts
      .filter(account => account.id !== id);
    return this;
  }

  // Simulate PUT /accounts/:id
  updateAccountById(id: number, values: Object = {}): Observable<Account> {
    // let account = this.getById(id);
    // console.log(id);

    // if (!account) {
    //   return null;
    // }
    // Object.assign(account, values);

    let body = JSON.stringify({ account: values });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.authToken.put('accounts/' + id, body, options)
      .map(response => response.json() as Account)
      .catch(this.handleError);
  }

  // Simulate GET /accounts/:id
  getById(id: number): Observable<Account> {
    if (id < 1) return;
    return this.authToken.get('accounts/' + id)
      .map(response => response.json() as Account)
      .catch(this.handleError);
  }

  getAll(): Observable<Account[]> {
    return this.authToken.get('accounts')
      .map(response => response.json() as Account[])
      .catch(this.handleError);
  }

  // private extractData(res: Response): Observable<any[]> {
  //   let body: any = res.json();
  //   return body || { } as Account[];
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
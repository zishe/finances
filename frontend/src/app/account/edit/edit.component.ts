import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../../account'
import { AccountDataService } from '../../services/account.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Input() public account: Account;
  public actypes: string[];
  private currencies: String[] = ['USD', 'RUB', 'THB']

  constructor(private route: ActivatedRoute, private accountDataService: AccountDataService) {
    const id: number = +route.snapshot.params['id'];
    console.log(id);
    this.account = new Account();
    this.actypes = ['Cash', 'Card', 'Loan'];

    accountDataService.getById(id)
      .subscribe(account => this.account = account, error => console.log(`error ${error}`));
  }

  ngOnInit() {
    // this.account = new Account();
  }

  save() {
    console.log(this.account);
    this.accountDataService.updateAccountById(this.account.id, this.account)
      .subscribe(account => this.account = account, error => console.log(`error ${error}`));

  }

}

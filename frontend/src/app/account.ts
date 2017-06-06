export class Account {
  id: number;
  name: string = '';
  actype: number = 0;
  balance_cents: number = 0;
  balance_currency: string = 'USD';
  bank: string = '';
  default: boolean = false;
  visible: boolean = true;

  // private types: String[] = ['Cash', 'Card', 'Loan'];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  // type(): String {
  //   return this.types[this.actype];
  // }
}

export class Account {
  id: number;
  name: string = '';
  actype: number = 0;
  balance: number = 0;
  bank: string = '';
  default: boolean = false;

  // private types: String[] = ['Cash', 'Card', 'Loan'];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  // type(): String {
  //   return this.types[this.actype];
  // }
}
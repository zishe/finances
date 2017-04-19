export class Account {
  id: number;
  name: string = '';
  actype: number = 0;
  balance: number = 0;
  bank: string = '';
  default: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
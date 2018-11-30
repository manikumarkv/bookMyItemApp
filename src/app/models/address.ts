export default class Address {
    public line1: string;
    public line2: string;
    public city: string;
    public state: string;
    public pin: number;
    constructor(line1: string, line2: string, city: string, state: string, pin: number) {
      this.line1 = line1;
      this.line2 = line2;
      this.city = city;
      this.state = state;
      this.pin = pin;
    }
    public getShortAddress(): string {
      return this.line1 + ' ' + this.line2;
    }
  }
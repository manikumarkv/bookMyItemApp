import { Injectable } from "@angular/core";
import Customer from "../app/models/customer";

@Injectable()
export class CustomersService {
  private customers: Customer[] = []
  // private units: any[] = [
  //   { text: "KG(s)", value: "1000", unit: Units.Weight },
  //   { text: "grams", value: "1", unit: Units.Weight },
  //   { text: "piece", value: "1", unit: Units.Pieces },
  //   { text: "packet", value: "10", unit: Units.Pieces },
  //   { text: "liter(s)", value: "1", unit: Units.Liter }
  // ];

  Add(Customer: Customer): void {
    this.customers.push(Customer);
  }

  Remove(id): void {
    this.customers = this.customers.filter(Customer => Customer.id !== id);
  }

  Update(Customer): void {
    this.customers.map(_Customer => {
      if (_Customer.id === Customer.id) {
        _Customer = Customer;
      }
    });
  }

  Get(id: string): Customer {
    return this.customers.filter(Customer => Customer.id === id)[0];
  }

  GetAll(): Customer[] {
    return this.customers;
  }

}

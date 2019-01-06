import { Injectable } from "@angular/core";
import Customer from "../app/models/customer";
import { CustomersDbService } from "./dbServices/customers.db.service";
import { Guid } from "../app/models/guid";

@Injectable()
export class CustomersService {
  constructor(public customersDbService: CustomersDbService){}

  private searchedCustomer: Customer;
  private customers: Customer[] = []
  // private units: any[] = [
  //   { text: "KG(s)", value: "1000", unit: Units.Weight },
  //   { text: "grams", value: "1", unit: Units.Weight },
  //   { text: "piece", value: "1", unit: Units.Pieces },
  //   { text: "packet", value: "10", unit: Units.Pieces },
  //   { text: "liter(s)", value: "1", unit: Units.Liter }
  // ];

  Add(Customer: Customer): Promise<any> {
   
    Customer._id = Guid.NewGuid();
    var promise = new Promise((resolve, reject) => {
      this.customersDbService.Add(Customer).then(succ=> {
        this.customers.push(Customer);
        resolve(succ)
      }).catch(err=> {
        reject(err)
      })
    });
    return promise;

    
  }

  Remove(id): void {
    this.customersDbService.Remove(id).then(succ=> {
      this.customers = this.customers.filter(Customer => Customer.id !== id);
    })
   
  }

  Update(Customer): Promise<any> {
    var promise = new Promise((resolve, reject) => {
      this.customersDbService.Update(Customer).then(succ=> {
        this.customers.map(_Customer => {
          if (_Customer.id === Customer.id) {
            _Customer = Customer;
          }
        });
        resolve(succ)
      }).catch(err=> {
        reject(err)
      })
    });
    return promise;


    
    
  }

  Get(id: string): Promise<any> {
    var promise = new Promise((resolve, reject) => {
      this.customersDbService.Get(id).then(succ=> {
       // this.customers = succ.rows.map(data => {return data.doc});
       debugger 
       resolve(succ)
       }).catch(err=> {
         reject(err)
       })
     });
     return promise;
   // return this.customers.filter(Customer => Customer.id === id)[0];
  }

  GetAll(): Promise<any> {
    var promise = new Promise((resolve, reject) => {
     this.customersDbService.GetAll().then(succ=> {
       this.customers = succ.rows.map(data => {return data.doc});
        resolve(this.customers)
      }).catch(err=> {
        reject(err)
      })
    });
    return promise;
   // return this.customers;
  }

  GetSearchedCustomer() {
    return this.searchedCustomer;
  }

  setSearchedCustomer(customer) {
    this.searchedCustomer = customer;
  }

  editCustomer(customer) {
    this.customers.push(customer)
  }

}

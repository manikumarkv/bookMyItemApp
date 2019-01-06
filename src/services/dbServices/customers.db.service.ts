//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import {  Customer } from '../../app/models';
import { Guid } from '../../app/models/guid';


@Injectable()
export class CustomersDbService {
    private _DB: any;
    constructor() {
        this.initialiseDB();
    }

    initialiseDB() {
        this._DB = new PouchDB('customers');
    }
    private customers: Customer[] = []


    Add(customer: Customer): Promise<any> {
        const timeStamp = Guid.NewGuid()
        //customer._id = timeStamp
        return this._DB.post(customer)
    }

    Remove(id): Promise<any> {
        return this._DB.remove(id)
        // this.customers = this.customers.filter(Customer => Customer.id !== id);
    }

    Update(customer: Customer): Promise<any> {
        return this._DB.put(customer)
    }

    Get(id: string): Promise<any> {
        return this._DB.get(id)
        // return this.customers.filter(Customer => Customer.id === id)[0];
    }

    GetAll(): Promise<any> {
        return this._DB.allDocs({include_docs: true,})
        // return this.customers;
    }

    GetSearchedCustomer() {
        return []
    }
}

//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import {  Customer } from '../../app/models';
import { Guid } from '../../app/models/guid';
import cordovaSqlitePlugin  from 'pouchdb-adapter-cordova-sqlite'


@Injectable()
export class CustomersDbService {
    private _DB: any;
    constructor() {
        this.initialiseDB();
    }

    initialiseDB() {
        PouchDB.plugin(cordovaSqlitePlugin);
        this._DB = new PouchDB('customers', {adapter: 'cordova-sqlite'});
    }


    Add(customer: Customer): Promise<any> {
        return this._DB.post(customer)
    }

    Remove(id): Promise<any> {
        return this._DB.remove(id)
    }

    Update(customer: Customer): Promise<any> {
        return this._DB.put(customer)
    }

    Get(id: string): Promise<any> {
        return this._DB.get(id)
    }

    GetAll(): Promise<any> {
        return this._DB.allDocs({include_docs: true,})
    }

    GetByName(name: string){
        return this._DB.find({
            selector: {firstName: name},
            sort: ['firstName']
        })
    }
    removeAll(customers){
        customers.map(customer=> {
            customer["_deleted"]= true
        })
        return this._DB.bulkDocs(customers)
    }

    GetSearchedCustomer() {
        return []
    }
}

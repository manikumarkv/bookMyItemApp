import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {
  private _DB: any;
  private success: boolean = true;
  constructor(public http: HttpClient) {
    console.log('Hello ProductProvider Provider');
    this.initialiseDB();
  }

  initialiseDB() {
    this._DB = new PouchDB('product');
  }

  addProduct(name, code, units, unitMrp, discount) {
    alert("inside add product")
    var timeStamp = Math.random(),
      product = {
        _id: timeStamp,
        name: name,
        code: code,
        units: units,
        unitMrp: unitMrp,
        discount: discount
      };
    return new Promise(resolve => {
      this._DB.put(product).then((err) => {
        alert("added product")
      });
      resolve(true);
      this._DB.get("17").then((err) => {
        alert(err.name)
      });
    });

  }
}

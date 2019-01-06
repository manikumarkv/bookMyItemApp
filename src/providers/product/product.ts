import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import { Product } from '../../app/models';

import cordovaSqlitePlugin  from 'pouchdb-adapter-cordova-sqlite'


@Injectable()
export class ProductProvider {
  private _DB: any;
  constructor() {
    this.initialiseDB();
  }

  initialiseDB() {
    PouchDB.plugin(cordovaSqlitePlugin);
    this._DB = new PouchDB('products', {adapter: 'cordova-sqlite'});
  }

  addProduct(product: Product): Promise<any> {
    const timeStamp = Math.floor((Math.random() * 100) + 1).toString()
    product._id = timeStamp
    return this._DB.put(product)
  }
  updateProduct(product: Product): Promise<any> {
    return this._DB.patch(product)
  }
  deleteProduct(id: string): Promise<any> {
    return this._DB.delete(id)
  }
  getAll(): Promise<any> {
    return this._DB.readAll();
  }
  removeAll(products: Product[]): Promise<any>{
    products.map(product=> {
      product["_deleted"] = true
    })
    return this._DB.destroy(products)
  }
}

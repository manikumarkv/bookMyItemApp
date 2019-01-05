import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import { Product } from '../../app/models';


@Injectable()
export class ProductProvider {
  private _DB: any;
  constructor() {
    this.initialiseDB();
  }

  initialiseDB() {
    this._DB = new PouchDB('product');
  }

  addProduct(product: Product) {
    const timeStamp = Math.floor((Math.random() * 100) + 1).toString()
    product._id = timeStamp
    return this._DB.put(product)
  }
}

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
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import PouchDB from 'pouchdb';
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';
import { Product } from '../../app/models';

@Injectable()
export class ProductsDbServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProductsDbServiceProvider Provider');
  }
  public pdb;
  public products;

  createPouchDB() {
    debugger
    PouchDB.plugin(cordovaSqlitePlugin);
    debugger
    this.pdb = new PouchDB('products.db')//,
     // { adapter: 'cordova-sqlite' });
  }

  create(product: Product) {
    return this.pdb.post(product)
  }
  update(product: Product) {
    return this.pdb.put(product)
  }
  delete(product: Product) {
    return this.pdb.delete(product)
  }

  read() {
    function allDocs(): any {
      this.pdb.allDocs({ include_docs: true })
        .then(docs => {
          this.products = docs.rows.map(row => {
            row.doc.Date = new Date(row.doc.Date);
            return row.doc;
          });


          return this.products;
        });
    }

    this.pdb.changes({ live: true, since: 'now', include_docs: true })
      .on('change', () => {
        allDocs().then((products) => {

          this.products = products;
        });
      });
    return allDocs();

  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Product } from '../../app/modals/product';

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  
  productsList:  AngularFireList<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public afDatabase: AngularFireDatabase,) {
    this.productsList = afDatabase.list("/products");
  }

  createProduct(name, price, discount) {
    const newProduct = this.productsList.push({})
    const _newProduct= new Product(newProduct.key, name,'','',price,discount)
    newProduct.set(_newProduct).then(newproduct => {

    })
  }

}

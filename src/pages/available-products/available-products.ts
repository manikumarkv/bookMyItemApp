import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductsService } from "../../services/products.service";
import { EditproductPage } from '../editproduct/editproduct'
import  Product  from '../../app/models/product';
import { ProductsPage } from '../products/products';

@IonicPage()
@Component({
  selector: 'page-available-products',
  templateUrl: 'available-products.html',
})
export class AvailableProductsPage implements OnInit {
public products: Product[] = []
  constructor(public navCtrl: NavController, public navParams: NavParams, public productsService: ProductsService) {
    this.products = productsService.GetAll();
  }
  editProduct(product) {
    this.navCtrl.push(EditproductPage, {
      product: product
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AvailableProductsPage');
  }
  navigateToNew() {
    this.navCtrl.push(ProductsPage, null);
  }
  ngOnInit() {
    this.productsService.GetAll().then(succ=> {
      this.products = succ.map(record => {
        return new Product(record.id, record.firstName, record.lastName, record.phoneNumber, record.address, record._id, record._rev)
      });
    })
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductsService } from "../../services/products.service";
import { EditproductPage } from '../editproduct/editproduct'
import  Product  from '../../app/models/product';
import { ProductsDbServiceProvider } from '../../providers/products-db-service/products-db-service';
/**
 * Generated class for the AvailableProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-available-products',
  templateUrl: 'available-products.html',
})
export class AvailableProductsPage {
public products: Product[] = []
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public productsService: ProductsService,
    public productDbService: ProductsDbServiceProvider) {
    this.products = []//productsService.GetAll();
  }
  editProduct(product) {
    this.navCtrl.push(EditproductPage, {
      product: product
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AvailableProductsPage');
  }

  ionViewDidEnter() {

    this.productDbService.createPouchDB();

    this.productDbService.read()
        .then(products => {
            this.products = products;
        })
        .catch((err)=>{});

}

}

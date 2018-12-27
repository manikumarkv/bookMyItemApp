import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ProductsService } from '../../services/products.service';
import Product from '../../app/models/product';
/** 
 * Generated class for the EditproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-editproduct',
  templateUrl: 'editproduct.html',
})
export class EditproductPage {
  public product: Product[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public productservice : ProductsService,public toastCtrl:ToastController) {
    this.product = navParams.get("product");
  }

editProduct(product)
{
this.productservice.editProduct(product)
const toast = this.toastCtrl.create({
  message: 'product details edited',
  duration: 600,
  position : 'top'
});
toast.present();
this.navCtrl.pop()
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditproductPage');
  }

}

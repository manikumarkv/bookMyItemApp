import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController } from "ionic-angular";
// import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
// import { Product } from '../../app/modals/product';
import { ProductsService } from "../../services/products.service";
import Product from "../../app/models/product";
import { ProductsDbServiceProvider } from "../../providers/products-db-service/products-db-service";

@IonicPage()
@Component({
  selector: "page-products",
  templateUrl: "products.html"
})
export class ProductsPage {
  // productsList:  AngularFireList<any>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public productsService: ProductsService,
    public productDbService: ProductsDbServiceProvider
  ) {
    // this.productsList = afDatabase.list("/products");
  }

  createProduct(name, mrp, units, discount) {
    const pro = new Product(Math.random(), name, "", units, mrp, discount)
    this.productDbService.create(pro).then(succ => {
      this.productsService.Add(pro);
      const toast = this.toastCtrl.create({
        message: 'product is added',
        duration: 1000,
        position: 'top'
      });
      toast.present();
    }), err => {
      alert(err)
    }

  }

  ionViewDidEnter() {

    this.productDbService.createPouchDB();
  }
}

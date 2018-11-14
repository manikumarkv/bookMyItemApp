import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
// import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
// import { Product } from '../../app/modals/product';
import { ProductsService } from "../../services/products.service";
import { Product } from "bill-app-models";

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
    public productsService: ProductsService
  ) {
    // this.productsList = afDatabase.list("/products");
  }

  createProduct(name, mrp, units, discount) {
    this.productsService.Add(
      new Product(Math.random(), name, "", units, mrp, discount)
    );
  }
}

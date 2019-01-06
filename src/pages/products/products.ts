import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController } from "ionic-angular";
import { ProductsService } from "../../services/products.service";
import Product from "../../app/models/product";
import { ProductProvider } from "../../providers/product/product"
import { AppUtilsService } from "../../services/utils/app.utils.service";


@Component({
  selector: "page-products",
  templateUrl: "products.html"
})
export class ProductsPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public productsService: ProductsService,
    public appUtils: AppUtilsService
  ) {
  }

  createProduct(name, mrp, units, discount) {
    const pro = new Product(Math.random(), name, "", units, mrp, discount)
    this.productsService.Add(pro).then(res => {
      this.appUtils.showToaster("product added")
    }).catch(err => {
      alert("product not added")
    });
  }
}

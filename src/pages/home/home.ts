import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular";
import { Item } from "../item"
import  Product  from "../../app/models/product";
import { ProductsService } from "../../services/products.service";
// import { Transaction } from "bill-app-models";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage implements OnInit {
  items: Item[] = [];
  name: string = null;
  quantity: number = 0
  availableProducts: Product[] = []
  constructor(public navCtrl: NavController, public productsService: ProductsService) {

  }

  ngOnInit() {
    let pro = new Product(1, 'a', 'a', 'gms', 100, 10);
    this.productsService.Add(pro)
    this.productsService.Add(new Product(2,'a', 'a', 'gms', 100, 10))
    this.productsService.Add(new Product(3,'a', 'a', 'gms', 100, 10))
    this.productsService.Add(new Product(4,'a', 'a', 'gms', 100, 10))
    this.availableProducts = this.productsService.GetAll();
  }

  addItem(productid, quantity) {
    const pro = this.productsService.Get(Number(productid))
    const _item = new Item(pro, quantity)
    this.items.push(_item)
    this.quantity = null;
    this.name = ''
  }
}

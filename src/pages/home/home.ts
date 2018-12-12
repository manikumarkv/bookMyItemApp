import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular";
import { Item } from "../item"
import  Product  from "../../app/models/product";
import { ProductsService } from "../../services/products.service";
import { GenerateBillPage } from "../generate-bill/generate-bill";
import Customer from '../../app/models/customer';
import { CustomersService } from '../../services/customers.service';
// import { Transaction } from "bill-app-models";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage implements OnInit {
  items: Item[] = [];
  showContent : boolean = false
  name: string = null;
  quantity: number = 0
  availableProducts: Product[] = []
  constructor(public navCtrl: NavController, public productsService: ProductsService,public customerService: CustomersService) {
  }

  ngOnInit() {
    this.productsService.Add(new Product(1, 'abc', 'a', 'gms', 10, 10))
    this.productsService.Add(new Product(2,'def', 'd', 'gms', 20, 10))
    this.productsService.Add(new Product(3,'ghi', 'g', 'gms', 30, 10))
    this.productsService.Add(new Product(4,'jkl', 'j', 'gms', 40, 10))
    this.availableProducts = this.productsService.GetAll();

    this.customerService.Add(
      new Customer(Math.random().toString(), "Akshay", "Goud", 1234567890, "mantri")
    );
    this.customerService.Add(
      new Customer(Math.random().toString(), "Karthik", "Naidu", 1234567890, "mantri")
    );
    this.customerService.Add(
      new Customer(Math.random().toString(), "Naveen", "Manikanta", 1234567890, "mantri")
    );
    this.customerService.Add(
      new Customer(Math.random().toString(), "Saikumar", "kumar", 1234567890, "mantri")
    );
    this.customerService.Add(
      new Customer(Math.random().toString(), "Vikyath", "Reddy", 1234567890, "mantri")
    );
  }

  addItem(productid, quantity) {
    const pro = this.productsService.Get(Number(productid))
    const _item = new Item(pro, quantity)
    this.items.push(_item)
    this.quantity = null;
    this.name = ''
    this.showContent = true
  }
  click(){
    this.navCtrl.push(GenerateBillPage,
      {
      items : this.items
      });
}
}

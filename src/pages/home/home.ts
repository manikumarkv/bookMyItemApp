import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular";
import { Item } from "../item";
import Product from "../../app/models/product";
import { ProductsService } from "../../services/products.service";
import { Transaction } from "../../app/models";
import ProductItem from "../../app/models/productItem";
import { GenerateBillPage } from "../generate-bill/generate-bill";
import Customer from "../../app/models/customer";
import { CustomersService } from "../../services/customers.service";
import { ToastController } from 'ionic-angular';
// import { Transaction } from "bill-app-models";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage implements OnInit {
  items: Item[] = [];
  showContent: boolean = false;
  name: string = null;
  productItem: any;
  newTransaction: Transaction = new Transaction();
  quantity: number = 0;
  availableProducts: Product[] = [];
  constructor(
    public navCtrl: NavController,
    public productsService: ProductsService,
    public toastCtrl: ToastController,
    public customerService: CustomersService
  ) {}

  ngOnInit() {
    this.productsService.Add(new Product(1, "abc", "a", "gms", 10, 0));
    this.productsService.Add(new Product(2, "def", "d", "gms", 20, 0));
    this.productsService.Add(new Product(3, "ghi", "g", "gms", 30, 0));
    this.productsService.Add(new Product(4, "jkl", "j", "gms", 40, 0));
    this.availableProducts = this.productsService.GetAll();

    this.customerService.Add(
      new Customer(
        Math.random().toString(),
        "Akshay",
        "Goud",
        1234567890,
        "mantri"
      )
    );
    this.customerService.Add(
      new Customer(
        Math.random().toString(),
        "Karthik",
        "Naidu",
        1234567890,
        "mantri"
      )
    );
    this.customerService.Add(
      new Customer(
        Math.random().toString(),
        "Naveen",
        "Manikanta",
        1234567890,
        "mantri"
      )
    );
    this.customerService.Add(
      new Customer(
        Math.random().toString(),
        "Saikumar",
        "kumar",
        1234567890,
        "mantri"
      )
    );
    this.customerService.Add(
      new Customer(
        Math.random().toString(),
        "Vikyath",
        "Reddy",
        1234567890,
        "mantri"
      )
    );
  }

  addItem(productid, quantity) {
    const pro = this.productsService.Get(Number(productid));
    this.productItem = new ProductItem(pro, quantity);
    this.newTransaction.addProduct(this.productItem);
    this.quantity = null;
    this.name = "";
    this.showContent = true;
  }
  generateBill() {
    this.navCtrl.push(GenerateBillPage, {
      transaction: this.newTransaction
    });
  }

  removeItem(val)
  {
   this.newTransaction.productItems.pop();
   const toast = this.toastCtrl.create({
    message: 'Item is Removed',
    duration: 1000,
    position : 'top'
  });
  toast.present();
  }

  click() {
    this.navCtrl.push(GenerateBillPage, {
      items: this.items
    });
  }
}

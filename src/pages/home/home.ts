import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular";
import Product from "../../app/models/product";
import { ProductsService } from "../../services/products.service";
import { Transaction } from "../../app/models";
import ProductItem from "../../app/models/productItem";
import { GenerateBillPage } from "../generate-bill/generate-bill";
import { ToastController } from 'ionic-angular';
import { TranasactionsService } from '../../services/transactions.service'
import { Guid } from "../../app/models/guid";
// import { Transaction } from "bill-app-models";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage implements OnInit {
  showContent: boolean = false;
  edit: boolean = false;
  name: string = null;
  productItem: any;
  newTransaction: Transaction = new Transaction();
  quantity: number = 0;
  editquantity: number;
  availableProducts: Product[] = [];
  selectedProduct: Product[] = []
  productSearch: boolean = false;
  constructor(
    public navCtrl: NavController,
    public productsService: ProductsService,
    public toastCtrl: ToastController,
    public transactionService : TranasactionsService
  ) {}

  ngOnInit() {
    // this.productsService.Add(new Product(Guid.NewGuid(), "abc", "a", "gms", 10, 0,));
    // this.productsService.Add(new Product(Guid.NewGuid(), "def", "d", "gms", 20, 0,));
    // this.productsService.Add(new Product(Guid.NewGuid(), "ghi", "g", "gms", 30, 0,));
    // this.productsService.Add(new Product(Guid.NewGuid(), "jkl", "j", "gms", 40, 0,));
    
    // this.availableProducts = this.productsService.GetAll();

    
  }

  addName(val)
  {
   this.name=val
   this.productSearch =true
  }

  getItems(ev) {
    var val = ev.target.value;
    if (val != '') {
      this.selectedProduct = this.availableProducts.filter((item) => {
        return (item.name.indexOf(val) > -1);
      })
    }
   
  }

  addItem(productid,quantity) {
    const pro = this.productsService.Get((productid));
    this.productItem = new ProductItem(pro, quantity);
    this.newTransaction.addProduct(this.productItem);
    this.quantity = null;
    this.name = "";
    this.showContent = true;
    this.productSearch= false
  }

  generateBill() {
    this.navCtrl.push(GenerateBillPage, {
      transaction: this.newTransaction
    });
    this.newTransaction = new Transaction();
    this.showContent = false;
  }

  removeItem(val)
  {
   this.newTransaction.productItems.splice(val,1)
   const toast = this.toastCtrl.create({
    message: 'Item is Removed',
    duration: 1000,
    position : 'top'
  });
  toast.present();
  } 

  editItem(item)
  {
    item.editable=true
    this.editquantity = item.quantity;
  }

saveItem(item, quantity)
{
  item.editable=false
  item.quantity = quantity;

}


  
}

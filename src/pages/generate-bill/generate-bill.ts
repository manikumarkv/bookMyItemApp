import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { CustomersService } from '../../services/customers.service';
import { TranasactionsService } from '../../services/transactions.service';
import Customer from '../../app/models/customer';
import { ModalController } from 'ionic-angular';
import { SearchcustomerPage } from '../searchcustomer/searchcustomer';
import { Transaction } from "../../app/models";
import { ToastController } from 'ionic-angular';
import ProductItem from '../../app/models/productItem';

/**
 * Generated class for the GenerateBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-generate-bill",
  templateUrl: "generate-bill.html"
})
export class GenerateBillPage {


  public customerlist: Customer[] = [];
  selectedCustomerBool: boolean = true;
  values1: string = "";
  searchcustomer: Customer = null;
  customer: Customer;
  selectedItems: ProductItem[] = [];
  selectedCustomer: Customer = null;
  transaction: Transaction;
  constructor(public toastCtrl: ToastController, public events: Events, public navCtrl: NavController, public navParams: NavParams, public customerService: CustomersService, public modalCtrl: ModalController, public tranasactionsService: TranasactionsService) {
    this.transaction = navParams.get("transaction");
    events.subscribe('customer: selected', (selectedcustomer) => {
      this.searchcustomer = this.customerService.GetSearchedCustomer();
    })

    if (navParams.get('items') != null)
      this.selectedItems = navParams.get('items');

    this.customerlist = customerService.GetAll()
  }

  presentModal() {
    const modal = this.modalCtrl.create(SearchcustomerPage);
    modal.present();
    this.selectedCustomerBool = false;
  }

  changeCustomer() {
    this.selectedCustomerBool = true;
    this.customer = null
  }


  confirmBill() {
    this.transaction.updateCustomer(this.searchcustomer)
    this.tranasactionsService.Add(this.transaction)
    const toast = this.toastCtrl.create({
      message: 'Bill is Confirmed',
      duration: 1000,
      position: 'top'
    });
    toast.present();
    this.navCtrl.pop()
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad GenerateBillPage");
  }
}

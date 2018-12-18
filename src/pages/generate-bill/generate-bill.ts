import { Component, ViewChild} from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { Item } from "../item";
import { CustomersService } from '../../services/customers.service';
import Customer from '../../app/models/customer';
import { ModalController } from 'ionic-angular';
import { SearchcustomerPage } from '../searchcustomer/searchcustomer';
/**
 * Generated class for the GenerateBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-generate-bill',
  templateUrl: 'generate-bill.html',
})
export class GenerateBillPage {


  public customerlist: Customer[] = [];
  selectedCustomerBool: boolean = true;
  values1: string = "";
  searchcustomer:Customer = null;
  customer: Customer;
  selectedItems: Item[] = [];
  totalBill: number = 0;
  selectedCustomer: Customer = null;
  constructor(public events: Events, public navCtrl: NavController, public navParams: NavParams, public customerService: CustomersService, public modalCtrl: ModalController) {
    
    events.subscribe('customer: selected', (selectedcustomer) => {
      this.searchcustomer = this.customerService.GetSearchedCustomer();
    } ) 
    if(navParams.get('items') != null)
    this.selectedItems = navParams.get('items');
    for (let i = 0; i < this.selectedItems.length; i++) {
      this.totalBill = this.totalBill + this.selectedItems[i].quantity * this.selectedItems[i].product.unitMrp
    }
    this.customerlist = customerService.GetAll()
  }

  presentModal() {
    const modal = this.modalCtrl.create(SearchcustomerPage);
    modal.present();
    this.selectedCustomerBool=false;
  }

  changeCustomer() {
    this.selectedCustomerBool = true;
    this.customer = null
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenerateBillPage');
  }

}

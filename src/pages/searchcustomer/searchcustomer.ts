import { Component } from '@angular/core';
import { NavController, NavParams, Modal } from 'ionic-angular';
import { CustomersService } from '../../services/customers.service';
import  Customer  from '../../app/models/customer';
import { ModalController, ViewController, Events  } from 'ionic-angular';
import { GenerateBillPage } from '../generate-bill/generate-bill';
/**
 * Generated class for the SearchcustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-searchcustomer',
  templateUrl: 'searchcustomer.html',
})
export class SearchcustomerPage {
  customerlist : Customer[];
  userinput: number;
  searchedcustomer: Customer;
  selectedCustomer : Customer[];

  constructor(public events: Events, public navCtrl: NavController, public navParams: NavParams, public customerService: CustomersService, public modalCtrl: ModalController,public viewCtrl: ViewController) {
    this.customerlist= customerService.GetAll()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchcustomerPage');
  }
 

  onKey(event) { // without type info
    this.userinput = event.target.value;
    this.selectCustomer(this.userinput);
  }

  selectCustomer(val)
  {
  this.selectedCustomer = this.customerlist.filter(x=> x.phoneNumber == val  );
  }

 dismissView(data)
 {
  this.customerService.setSearchedCustomer(data);
  this.events.publish('customer: selected', this.selectedCustomer);
   this.viewCtrl.dismiss(); 
 }

 closeView()
 {
  this.viewCtrl.dismiss();
 }
}

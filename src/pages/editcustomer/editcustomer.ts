import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import Customer from '../../app/models/customer';
import { CustomersService } from '../../services/customers.service';

/**
 * Generated class for the EditcustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-editcustomer',
  templateUrl: 'editcustomer.html',
})
export class EditcustomerPage {
  public customer: Customer[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public customerService: CustomersService,public toastCtrl: ToastController) {
    this.customer = navParams.get("customer");
  }

editCustomer(customer)
{
this.customerService.editCustomer(customer)
const toast = this.toastCtrl.create({
  message: 'details edited',
  duration: 600,
  position : 'top'
});
toast.present();
this.navCtrl.pop()
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditcustomerPage');
  }

}

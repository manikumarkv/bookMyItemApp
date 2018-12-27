import { Component } from '@angular/core';
import { NavController, NavParams,Events, ViewController } from 'ionic-angular';

/**
 * Generated class for the TransactionfiltersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-transactionfilters',
  templateUrl: 'transactionfilters.html',
})
export class TransactionfiltersPage {
  viewTransactionBy: string
  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams, public event: Events) {
  }

  filterTransactions()
  {
    this.event.publish('customer: selected', this.viewTransactionBy);
    if(this.viewTransactionBy != null)
    {
      this.viewCtrl.dismiss();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionfiltersPage');
  }

}

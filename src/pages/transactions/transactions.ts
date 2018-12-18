import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranasactionsService } from '../../services/transactions.service';
import { Transaction } from '../../app/models';

/**
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {
  availableTransactions: Transaction[] =[]

  constructor(public navCtrl: NavController, public navParams: NavParams, public tranasactionsService : TranasactionsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionsPage');
    debugger
    this.availableTransactions = this.tranasactionsService.GetAll()
  }

}

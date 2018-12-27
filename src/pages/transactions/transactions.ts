import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController,Events} from 'ionic-angular';
import { TranasactionsService } from '../../services/transactions.service';
import { Transaction } from '../../app/models';

import { TransactionfiltersPage } from '../transactionfilters/transactionfilters';


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
filteredTransactions: Transaction[] =[]
transactionView : string;
public currentDate: string = new Date().toISOString().substring(0,10);
public today : number = Number(this.currentDate.substring(8,10));
public lastWeek: number= this.today-7;
public lastMonth: number = Number(this.currentDate.substring(5,7))-1;
public lastYear:number =  Number(this.currentDate.substring(0,4))-1;

  constructor(public events:Events,public popoverCtrl: PopoverController,public navCtrl: NavController, public navParams: NavParams, public transactionsService : TranasactionsService) {
    events.subscribe('customer: selected', (selectedView) => {
      if(selectedView  == "all")
      {
       this.transactionView = null
      }
      else if(selectedView  == "today")
      {
       this.transactionView = selectedView
      this.filteredTransactions = this.availableTransactions.filter(x => x.transactionDate == this.currentDate)
      }
      else if(selectedView  == "date")
      {
       this.transactionView = selectedView
       for(let i=this.lastWeek;i<this.today;i++)
       {
        this.filteredTransactions =  this.filteredTransactions.concat(this.availableTransactions.filter(x => x.transactionDate.substring(8,10) == i.toString()));
        // this.filteredTransactions.concat(demo)
       }
      
      }
      else if(selectedView  == "month")
      {
       this.transactionView = selectedView
      this.filteredTransactions = this.availableTransactions.filter(x => x.transactionDate.substring(5,7) == this.lastMonth.toString())
      }
      else if(selectedView  == "year")
      {
       this.transactionView = selectedView
      this.filteredTransactions = this.availableTransactions.filter(x => x.transactionDate.substring(0,4) == this.lastYear.toString())
      }
    } ) 
    
  }

  transactionFilters(myEvent) {
    let popover = this.popoverCtrl.create(TransactionfiltersPage);
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionsPage');
    this.availableTransactions = this.transactionsService.GetAll()
  }

}

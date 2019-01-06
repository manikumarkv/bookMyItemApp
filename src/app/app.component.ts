import { Component, ViewChild } from '@angular/core';
import {App, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateService } from '@ngx-translate/core';
import { AddCustomerPage }  from '../pages/customers/add-customer/add-customer';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import {TransactionsPage} from '../pages/transactions/transactions';
import {CustomersPage} from '../pages/customers/customers';
import {ProductsPage} from '../pages/products/products';
import { AvailableProductsPage } from "../pages/available-products/available-products";

import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = HomePage;
  //pages;
	rootPage;
  pages: Array<{title: string, component: any, icon : string}>;	
  constructor(app: App,     
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public auth: AuthService,
    private translateService: TranslateService) {
    
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Transactions', component: TransactionsPage, icon: 'stats' },
      { title: 'Customers', component: CustomersPage, icon: 'people' },
      {title:'Products', component: AvailableProductsPage, icon:'cart'},
      {title:'Settings', component: HomePage, icon:'settings'},
      {title:'Help', component: HomePage, icon:'help-circle'},
      {title:'About us', component: HomePage, icon:'contact'},
      
    ];

  }

  initializeApp() {
   
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.translateService.setDefaultLang('en');
      this.translateService.use('en');
    });
    this.rootPage = HomePage;
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.auth.signOut();
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {SearchcustomerPage} from '../pages/searchcustomer/searchcustomer';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import {SignupPage} from '../pages/signup/signup';
import {TicketPage } from '../pages/ticket/ticket';
import {TransactionsPage} from '../pages/transactions/transactions';
import {CustomersPage} from '../pages/customers/customers';
import {ProductsPage} from '../pages/products/products';
import { AvailableProductsPage } from "../pages/available-products/available-products";
import {AddCustomerPage } from "../pages/add-customer/add-customer";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GenerateBillPage } from '../pages/generate-bill/generate-bill';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AuthService } from '../services/auth.service';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { ProductsService } from '../services/products.service';
import { CustomersService } from '../services/customers.service';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    TicketPage,
    TransactionsPage,
    CustomersPage,
    ProductsPage,
    AvailableProductsPage,
    GenerateBillPage,
    AddCustomerPage,
    SearchcustomerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDAT_PmwWEw8ltk5DPGQ1UGiv5EQlNbE8s",
      authDomain: "billingapp-ccfaf.firebaseapp.com",
      databaseURL: "https://billingapp-ccfaf.firebaseio.com/",
      projectId: "billingapp-ccfaf",
      storageBucket: "billingapp-ccfaf.appspot.com",
      messagingSenderId: "417451885087"
    }),
    AngularFireDatabaseModule,
    NgxErrorsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    TicketPage,
    TransactionsPage,
    CustomersPage,
    ProductsPage,
    AvailableProductsPage,
    GenerateBillPage,
    AddCustomerPage,
    SearchcustomerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    AngularFireAuth,
    ProductsService,
    CustomersService
  ]
})
export class AppModule {}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http , './assets/i18n/', '.json');
}
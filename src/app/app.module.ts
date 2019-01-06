import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {SearchcustomerPage} from '../pages/searchcustomer/searchcustomer';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import {SignupPage} from '../pages/signup/signup';
import {TransactionsPage} from '../pages/transactions/transactions';
import {CustomersPage} from '../pages/customers/customers';
import {ProductsPage} from '../pages/products/products';
import { AvailableProductsPage } from "../pages/available-products/available-products";
import {AddCustomerPage } from "../pages/add-customer/add-customer";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GenerateBillPage } from '../pages/generate-bill/generate-bill';
import { AngularFireAuth } from "angularfire2/auth";
import { AuthService } from '../services/auth.service';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { ProductsService } from '../services/products.service';
import { CustomersService } from '../services/customers.service';
import { TranasactionsService } from '../services/transactions.service';
import { EditproductPage } from '../pages/editproduct/editproduct';
import {TransactionfiltersPage} from '../pages/transactionfilters/transactionfilters'
import { ProductProvider } from '../providers/product/product';
import {AppUtilsService} from '../services/utils/app.utils.service'
@NgModule({ 
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    TransactionsPage,
    CustomersPage,
    ProductsPage,
    AvailableProductsPage,
    GenerateBillPage,
    AddCustomerPage,
    SearchcustomerPage,
    EditproductPage,
    TransactionfiltersPage
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
    NgxErrorsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    TransactionsPage,
    CustomersPage,
    ProductsPage,
    AvailableProductsPage,
    GenerateBillPage,
    AddCustomerPage,
    SearchcustomerPage,
    EditproductPage,
    TransactionfiltersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    AngularFireAuth,
    ProductsService,
    CustomersService,
    TranasactionsService,
    ProductProvider,
    AppUtilsService
  ]
})
export class AppModule {}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http , './assets/i18n/', '.json');
}
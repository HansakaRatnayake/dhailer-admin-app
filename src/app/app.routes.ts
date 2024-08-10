import { Routes } from '@angular/router';
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {CustomerComponent} from "./components/customer/customer.component";
import {ProductComponent} from "./components/product/product.component";
import {OrderComponent} from "./components/order/order.component";

export const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:"full"},
  {path:'login', component:LoginPageComponent},
  {path:'dashboard', component:DashboardComponent },
  {path:'customers', component:CustomerComponent },
  {path:'products', component:ProductComponent },
  {path:'orders', component:OrderComponent }
];

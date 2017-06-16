import { Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { GetOrderComponent } from './Order/GetOrder';

export const routes: Routes = [
    { path: '**', redirectTo: '/Order', pathMatch: 'full' },
    { path: "Order", component: GetOrderComponent }
];
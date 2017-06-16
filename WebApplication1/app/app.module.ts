import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.route';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { OrderService } from "./Services/OrderService";
import { GetOrderComponent } from "./Order/GetOrder";


@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpModule],
    declarations: [AppComponent, GetOrderComponent],
    bootstrap: [AppComponent],
    providers: [OrderService]
})

export class AppModule { } 
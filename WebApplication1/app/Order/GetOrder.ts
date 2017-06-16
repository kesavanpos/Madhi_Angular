
import { Component, OnInit } from '@angular/core';
//import { Deal } from '../model/deal';
import { OrderService } from '../Services/OrderService';


@Component({
    selector: "Orders",
    templateUrl: "app/Order/GetOrder.html",
    styleUrls: ['app/Order/GetOrder.css']
})


export class GetOrderComponent {    

    private Orders;

    constructor(private orderService: OrderService) {

    }

    ngOnInit(): void {
        debugger;
        var OrderId = '1234';
        this.orderService.getOrder(OrderId).then(response => {
            debugger;
            this.Orders = response
        });
    }
}

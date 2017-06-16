
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class OrderService {

    private publicdealsurl = "http://localhost:3001/api/deals/public";

    constructor(private http: Http) {

    }

    getOrder(Orderid) {        
        var queryParams = "/OrderNo=" + Orderid;
        return this.http.get(this.publicdealsurl + queryParams).toPromise().then(response => response.json()).catch(this.handleerror);
    }

    private handleerror(error: any): Promise<any> {        
        console.error(error.message);
        alert(error);
        return Promise.reject(error.message);
    }

}


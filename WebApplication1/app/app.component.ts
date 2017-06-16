import { Component } from '@angular/core';
@Component({
    selector: 'my-App',
    templateUrl: 'app/app.html',
    // We'll add an inline style to properly display the navbar
    styles: ['.navbar-right { margin-right: 0px !important}']
})
export class AppComponent {
    title = "OrderInformation";
    constructor() { }
} 
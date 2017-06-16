"use strict";
var GetOrder_1 = require("./Order/GetOrder");
exports.routes = [
    { path: '**', redirectTo: '/Order', pathMatch: 'full' },
    { path: "Order", component: GetOrder_1.GetOrderComponent }
];
//# sourceMappingURL=app.route.js.map
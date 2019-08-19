import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConvidadosPage } from './convidados.page';
var routes = [
    {
        path: '',
        component: ConvidadosPage
    }
];
var ConvidadosPageModule = /** @class */ (function () {
    function ConvidadosPageModule() {
    }
    ConvidadosPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ConvidadosPage]
        })
    ], ConvidadosPageModule);
    return ConvidadosPageModule;
}());
export { ConvidadosPageModule };
//# sourceMappingURL=convidados.module.js.map
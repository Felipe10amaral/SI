import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ConvidadosService } from '../convidados.service';
import { ToastController, NavController, NavParams } from '@ionic/angular';
var ConvidadosPage = /** @class */ (function () {
    function ConvidadosPage(navCtrl, navParams, convidadosService, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.convidadosService = convidadosService;
        this.toast = toast;
        this.getConvidados();
    }
    ConvidadosPage.prototype.getConvidados = function () {
        var _this = this;
        this.convidadosService.findAll()
            .then(function (data) {
            _this.convidados = data;
            console.log(_this.convidados);
        });
    };
    ConvidadosPage.prototype.removeConvidado = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ConvidadosPage.prototype.editConvidado = function (id) {
        //   this.navCtrl.push(ConvidadosEditPage, {id: id});
    };
    ConvidadosPage.prototype.addConvidado = function () {
        //   this.navCtrl.push(ConvidadosEditPage);
    };
    ConvidadosPage.prototype.ngOnInit = function () {
    };
    ConvidadosPage = tslib_1.__decorate([
        Component({
            selector: 'app-convidados',
            templateUrl: './convidados.page.html',
            styleUrls: ['./convidados.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, NavParams,
            ConvidadosService,
            ToastController])
    ], ConvidadosPage);
    return ConvidadosPage;
}());
export { ConvidadosPage };
//# sourceMappingURL=convidados.page.js.map
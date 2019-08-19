import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ConvidadosService = /** @class */ (function () {
    function ConvidadosService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:8080/api/convidados/';
        console.log('Hello ConvidadosProvider Provider');
    }
    ConvidadosService.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + "")
                .subscribe(function (data) {
                resolve(data);
                console.log('The result is:');
                console.log(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ConvidadosService.prototype.findById = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + id)
                .subscribe(function (data) {
                resolve(data);
                console.log('The result is:');
                console.log(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ConvidadosService.prototype.deleteById = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.delete(_this.apiUrl + id)
                .subscribe(function (data) {
                resolve(data);
                console.log('The result is:');
                console.log(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ConvidadosService.prototype.save = function (convidado) {
        var _this = this;
        var data = JSON.stringify(convidado);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl, data, { headers: { 'Content-Type': 'application/json' } })
                .subscribe(function (res) {
                resolve(res);
                console.log('The result is:' + res);
                console.log(convidado);
            }, function (err) {
                reject(err);
                console.log(err);
            });
        });
    };
    ConvidadosService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ConvidadosService);
    return ConvidadosService;
}());
export { ConvidadosService };
var Convidado = /** @class */ (function () {
    function Convidado() {
    }
    return Convidado;
}());
export { Convidado };
//# sourceMappingURL=convidados.service.js.map
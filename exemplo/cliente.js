"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var empresa;
(function (empresa) {
    var cliente = /** @class */ (function (_super) {
        __extends(cliente, _super);
        function cliente() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        cliente.prototype.getSaldo = function () {
            return this.saldo;
        };
        cliente.prototype.setSaldo = function (saldo) {
            this.saldo = saldo;
        };
        cliente.prototype.getLimite = function () {
            return this.limite;
        };
        cliente.prototype.setLimite = function (saldo) {
            this.limite = this.limite;
        };
        cliente.prototype.getCodCliente = function () {
            return this.codCliente;
        };
        cliente.prototype.setCodCliente = function (CodCliente) {
            this.codCliente = CodCliente;
        };
        return cliente;
    }(empresa.pessoa));
})(empresa || (empresa = {}));

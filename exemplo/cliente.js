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
    var Cliente = /** @class */ (function (_super) {
        __extends(Cliente, _super);
        // private idade: number|undefined;
        function Cliente(nome, cpf, cod) {
            var _this = _super.call(this, nome, cpf) || this;
            _this.codCliente = cod;
            return _this;
        }
        Cliente.prototype.getSaldo = function () {
            return this.saldo;
        };
        Cliente.prototype.setSaldo = function (saldo) {
            this.saldo = saldo;
        };
        Cliente.prototype.getLimite = function () {
            return this.limite;
        };
        Cliente.prototype.setLimite = function (saldo) {
            this.limite = this.limite;
        };
        Cliente.prototype.getCodCliente = function () {
            return this.codCliente;
        };
        Cliente.prototype.setCodCliente = function (CodCliente) {
            this.codCliente = CodCliente;
        };
        return Cliente;
    }(empresa.pessoa));
    empresa.Cliente = Cliente;
})(empresa || (empresa = {}));

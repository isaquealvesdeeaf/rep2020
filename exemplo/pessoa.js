"use strict";
var empresa;
(function (empresa) {
    var pessoa = /** @class */ (function () {
        function pessoa(nome, cpf) {
            this.cpf = cpf;
            this.nome = nome;
        }
        pessoa.prototype.getCpf = function () {
            return this.cpf;
        };
        //pega o valor
        pessoa.prototype.getNome = function () {
            return this.nome;
        };
        //altera o valor
        pessoa.prototype.setNome = function (nome) {
            this.nome = nome;
        };
        pessoa.prototype.getidade = function () {
            return this.idade;
        };
        //altera o valor
        pessoa.prototype.setidade = function (idade) {
            this.idade = idade;
        };
        return pessoa;
    }());
    empresa.pessoa = pessoa;
})(empresa || (empresa = {}));

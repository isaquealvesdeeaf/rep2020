"use strict";
var empresa;
(function (empresa) {
    var p = new empresa.pessoa("Isaque", "000.000.001-01");
    p.setidade(15);
    document.getElementById("nome").textContent = p.getNome();
    document.getElementById("cpf").textContent = p.getCpf();
    document.getElementById("idade").textContent = p.getIdade().Tostring();
})(empresa || (empresa = {}));

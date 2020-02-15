namespace empresa{
        let p = new pessoa("Isaque","000.000.001-01");
        p.setidade(15);

        document.getElementById("nome").textContent = p.getNome();
        document.getElementById("cpf").textContent = p.getCpf();
        document.getElementById("idade").textContent = p.getIdade().toString();

        let c = new Cliente("joão","123.132.456.00",123);
        c.setidade(45);
        c.setLimite(90000000);
        c.setSaldo(850000);

        document.getElementById("nomeC").textContent = c.getNome();
        document.getElementById("cpfC").textContent = c.getCpf();
        document.getElementById("codc").textContent = c.getCodCliente().toString();
        document.getElementById("idadeC").textContent = c.getIdade().toString();
        document.getElementById("limiteC").textContent = "R$ "+c.getLimite().toString();
        document.getElementById("saldoC").textContent = "R$ "+c.getSaldo().toString();

}
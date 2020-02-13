namespace empresa{
        let p = new pessoa("Isaque","000.000.001-01");
        p.setidade(15);

        document.getElementById("nome").textContent = p.getNome();
        document.getElementById("cpf").textContent = p.getCpf();
        document.getElementById("idade").textContent = p.getIdade().Tostring();
}
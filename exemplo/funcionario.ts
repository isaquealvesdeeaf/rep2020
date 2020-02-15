namespace empresa{
    class funcionario extends pessoa{
        private codFuncionario: number;
        private valorDia: number;

        getCodFuncionario(): number{
            return this.codFuncionario;
        }
        setCodFuncionario(cod:number): void{
            this.codFuncionario = cod;
        }

        getCodValorDia(): number{
            return this.codFuncionario;
        }
        
    }
}
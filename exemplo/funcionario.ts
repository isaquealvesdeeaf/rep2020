namespace empresa{
    export class funcionario extends pessoa{
        private codFuncionario: number;
        private valorDia: number;

        getCodFuncionario(): number{
            return this.codFuncionario;
        }
        setCodFuncionario(cod:number): void{
            this.codFuncionario = cod;
        }

        getValorDia(): number{
            return this.codFuncionario;
        }
        setValorDia(valor:number): void{
            this.valorDia = valor;
        }

        calcularSalario(): number{
            return (this.valorDia * 30) + (this.getValorDia()*0.3);

        }
    }
}
namespace empresa{
    export class Cliente extends pessoa{
        private saldo: number|undefined;
        private limite: number|undefined;
        private codCliente: number|undefined;
       // private idade: number|undefined;

        constructor(nome:string, cpf:string, cod:number){
                super(nome,cpf);
                this.codCliente = cod;
        }

        getSaldo():number|undefined{
            return this.saldo;
        }

        setSaldo(saldo:number):void{
            this.saldo = saldo;
        }

        getLimite():number|undefined{
            return this.limite;
        }

        setLimite(saldo:number):void{
            this.limite = this.limite;
        }       
         
        getCodCliente():number|undefined{
            return this.codCliente;
        }

        setCodCliente(CodCliente:number):void{
            this.codCliente = CodCliente;

        }
    
    }
}
namespace empresa{
    class cliente extends pessoa{
        private saldo: number|undefined;
        private limite: number|undefined;
        private codCliente: number|undefined;

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
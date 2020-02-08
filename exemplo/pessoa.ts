namespace empresa{
    class pessoa{

        //informações da classe

        private nome:String|undefined;
        private cpf:String;
        private idade:number|undefined;

        constructor(nome:string, cpf:string){
            this.cpf = cpf;
            this.nome = nome;
        }

        getCpf():string{
            return this.cpf;
        }

        //pega o valor
        
         getNome():String|undefined{
            return this.nome;
        }
        //altera o valor
        setNome(nome:String):void{
            this.nome = nome;
        }
        getidade():number|undefined{
            return this.idade;
        }
        //altera o valor
        setidade(idade:number):void{
            this.idade = idade;
        }

    }
}
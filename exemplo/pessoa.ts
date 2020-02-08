namespace empresa{
    export  class pessoa{

        //informações da classe

        private nome:string|undefined;
        private cpf:string;
        private idade:number|undefined;

        constructor(nome:string, cpf:string){
            this.cpf = cpf;
            this.nome = nome;
        }

        getCpf(): string{
            return this.cpf;
        }

        //pega o valor
        
         getNome():string|undefined{
            return this.nome;
        }
        //altera o valor
        setNome(nome:string):void{
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
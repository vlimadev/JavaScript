class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;    //THIS serve para referenciar a classe em que ele está dentro.
        this.numero = numero;            
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo (valor){
        this._saldo = valor;
    }

    sacar (valor){
        if (valor > this._saldo){
            return 'operação negada';
        }

        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;

    }
}

class ContaCorrente extends ContaBancaria{  // EXTENDS é usado para determinar de qual classe PAI vamos puxar.
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
   
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
       
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitária';
       
    }

    sacar(valor){
        if(valor > 500 ){
            return "Não é possivel realizar saques maior que R$500!"
        }

        this._saldo = this._saldo - valor;
    }



}
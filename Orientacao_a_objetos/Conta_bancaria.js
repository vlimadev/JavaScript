class ContaBancaria {
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
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

class ContaCorrente {
    constructor(agencia, numero, saldo, cartaoCredito){
        super(agencia, numero, saldo);
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

class ContaPoupanca {
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = 'poupança';
       
    }
}

class ContaUniversitaria {
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = 'universitária';
       
    }

    sacar(valor){
        if(valor > 500 ){
            return "Não é possivel realizar saques maior que R$500!"
        }

        this._saldo = this._saldo - valor;
    }



}
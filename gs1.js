function ValidarNegocioGS1(){

    var valor = Xrm.Page.getAttribute("smart_negociogs1").getValue();
    
    if(valor){
    alert("Verifique se realmente o Négocio GS1 é GTIN 13 Anuidade!" );
    }
    }

    console.log(ValidarNegocioGS1);
function cuatro(numero){
    valores = [];
    var numeroaleatorio;

    for(var i=0; i<20;i++){
        numeroaleatorio=(Math.floor(Math.random()*100)+1);
        valores.push(numeroaleatorio);
    }
    for(var j=0; j<20;j++){
        if(numero===valores[j]){
            console.log("ganaste");
        }
        else{
            console.log("perdiste");
        }
    }
    return valores;
}
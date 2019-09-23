
function ejer(datos){

for (let i = 0;i < datos.length; i++){
    for (let j = 0; j< datos.length-1; j++){
        if (datos[j] < datos[j+1]){ // Ordena el array de mayor a menor, cambiar el "<" a ">" para ordenar de menor a mayor
        temporal = datos[j]; 
        datos[j] = datos[j+1]; 
        datos[j+1] = temporal;
        }
    }
}
for(let x=0; x<datos.length;x++){
console.log(datos[x]);}
}
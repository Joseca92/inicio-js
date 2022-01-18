// declaro variables
let numero1 = prompt("Ingrese un valor")
let numero2 = 60;

/* Estructura if 
if(codicion logica){
    todas las lineas de codigo q quiero q haga mi programa

}else{
    todas las lineas de codigo para falso 
}
*/
if (numero1 > numero2){
    document.write("el mayor numero es: " + numero1)
}else{
    if(numero1 == numero2){
        document.write("Los numeros son iguales")
    }else{
    document.write("el mayor numero es: " + numero2)
}}
function ejercicio1() {
    let numero = document.getElementById("men").value
    let respuesta = ""
    let men=document.getElementById("respuesta")
    if (numero % 2 == 0) {
        respuesta = "El numero " + numero + " es par"
    } else {
        respuesta = "El numero " + numero + " es impar"
    }
    men.value=respuesta //Ya solo le colocarias el return o el id de donde esta la respuesta, yo lo hacia con div pero alla como le hagas tu
}

function ejercicio2() {
    let edad = document.getElementById("num").value
    let resultado2 = ""
    let men=document.getElementById("respuesta")
    if (edad >= 18) {
        resultado2 = "El usuario es mayor de edad"
        console.log(resultado2)
    } else {
        resultado2 = "El usuario es menor de edad"
        console.log(resultado2)
    }
    men.value=resultado2
}

function ejercicio3(){
    let num=0, res=""
    num=parseInt(document.getElementById("num1").value)
    res=document.getElementById("respuesta")
    if(num>0){
        res.value=`El numero es positivo`
    }
    else{
        if(num==0){
             res.value=`El numero es igual a 0`
        }
        else{
             res.value=`El numero es negativo`
        }
    }
    
}

function ejercicio4(){
    let num=0, res=""
    num=parseInt(document.getElementById("num").value)
    res= document.getElementById("respuesta")
    if((num % 4==0 && num %100 !==0) || (num % 400 ==0)){
        res.value="El año ingresado"+" "+ num+" "+ "es un año bisiesto"
    }
    else{
        res.value="El año ingresado"+ " "+num+" "+ "no es un año bisiesto"
    }
}
function ejercicio5(){
    let num=0, num1=0, res=""
    num= parseInt(document.getElementById("num1").value)
    num1=parseInt(document.getElementById("num2").value)
    res= document.getElementById("respuesta")
    if(num > num1){
        res.value="El primer número ingresado"+" "+ num+" "+ "es mayor que "+" "+num1
    }
    else{
        res.value="El segundo número ingresado"+" "+num1+" "+"es mayor que "+" "+num
    }
}
function ejercicio6(){
    let num=0, res=""
    num= parseInt(document.getElementById("num").value)
    res=document.getElementById("respuesta")
    for(let i = 2; i <= num; i=i+2){
        if (res.value !== "") {
            res.value += ", "
        }
        res.value += i
    }

}

function ejercicio7(){
    let num=0, i=0, res=""
    num=parseInt(document.getElementById("num").value)
    res=document.getElementById("respuesta")
    while(i<num ){
        if (num % i === 0) {
            if (res.value !== "") {
                res.value += ", "; // Agregamos una coma y espacio entre los divisores
            }
            res.value += i; // Agregamos el divisor al resultado
        }
        i++
    }
    
}

function ejercicio8(){
    let num=0, i=0, suma=0, res=""
    num=parseInt(document.getElementById("num").value)
    res= document.getElementById("respuesta")
    while(i<num ){
        if(num%i==0){
            suma+=i
        }
        i++
    }
        if(suma==num){
            res.value=`el numero es perfecto`
        }
        else{
            res.value=`el numero no es perfecto`
        }
}

function ejercicio9(){
    let num=0, primo= true, res=""
    num=parseInt(document.getElementById("num1").value)
    res=document.getElementById("respuesta")
    for(let i=2; i < num; i++){
        if(num % i==0){
            primo= false
            break
        }
    }
    if(primo){
        res.value="El número ingresado es un número primo"
    }
    else{
        res.value="El número ingresado no es un número primo"
    }
}

function invertirNumero(numero) {
    // Convertir el número a una cadena para manipular los dígitos
    let numeroStr = numero.toString();
    let longitud = numeroStr.length;
    let numeroInvertido = '';

    // Iterar sobre la cadena desde el último dígito hasta el primero
    for (let i = longitud - 1; i >= 0; i--) {
        numeroInvertido += numeroStr[i];
    }

    return numeroInvertido;
}

function ejercicio10() {
    let numero = document.getElementById('num1').value;
    let numeroInvertido = invertirNumero(numero);
    document.getElementById('respuesta').value = numeroInvertido;
}
 

function ejercicio11() {
    let factor1 = parseInt(document.getElementById("num1").value);
    let factor2 = parseInt(document.getElementById("num2").value);
    let resultado = 0;

    for (let a = 1; a <= factor2; a++) {
        resultado += factor1;
    }

    let mensaje = "El resultado de la multiplicación es: " + resultado;
    document.getElementById("respuesta").value = mensaje;
}

function ejercicio12() {
    let dividendo = parseInt(document.getElementById("num1").value);
    let divisor = parseInt(document.getElementById("num2").value);
    let resultado = 0;

    while (dividendo >= divisor) {
        dividendo -= divisor;
        resultado++;
    }

    let mensaje = "El cociente de la división es: " + resultado;
    document.getElementById("respuesta").value = mensaje;
}

function ejercicio13() {
    let num = parseInt(document.getElementById("num1").value);
    let a = 0;
    let b = 1;
    let numeroser = 0;
    let mensaje = "";

    for (let i = 1; i <= num; i++) {
        mensaje += a;
        if (i < num) {
            mensaje += ", ";
        }
        numeroser = a + b;
        a = b;
        b = numeroser;
    }

    document.getElementById("respuesta").value = "La serie es: " + mensaje;
}

function ejercicio14() {
    let arreglo = [];
    let ele = parseInt(document.getElementById("num1").value);
    let nums = document.getElementById("num2").value.split(',').map(Number)
    
    for (let i = 0; i < ele; i++) {
        if (!isNaN(nums[i])) {
            arreglo.push(nums[i])
        }
    }

    let result = arreglo.filter(num => num % 5 === 0).join(', ');
    document.getElementById("respuesta").value = result;
}

function ejercicio15() {
    let arreglo = [];
    let ele = parseInt(document.getElementById("num1").value)
    let nums = document.getElementById("num2").value.split(',').map(Number)
    let suma = 0;

    for (let i = 0; i < ele; i++) {
        if (!isNaN(nums[i])) {
            arreglo.push(nums[i])
        }
    }

    for (let c = 0; c < arreglo.length; c++) {
        suma += arreglo[c]
    }
   
    let total = suma / arreglo.length
    document.getElementById("respuesta").value = total.toFixed(2)
}

function ejercicio16() {
    let cadena = document.getElementById("num").value;
    let numeros = cadena.split(",").map(Number);
    let mayor = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }

    document.getElementById("respuesta").value = "El número mayor del arreglo es: " + mayor;
}


function ejercicio17() {
    let arreglo = []
    let ele = parseInt(document.getElementById("num1").value)
    let names = document.getElementById("num2").value.split(',')

    for (let i = 0; i < ele; i++) {
        if (names[i].trim().toLowerCase() !== "ana") {
            arreglo.push(names[i].trim())
        }
    }

    document.getElementById("respuesta").value = arreglo.join(', ')
}

function ejercicio18() {
    let ele = parseInt(document.getElementById("num1").value);
    let numeros = document.getElementById("num2").value.split(",").map(Number);
    let arreglo = [];

    for (let i = 0; i < ele; i++) {
        if (numeros[i] % 2 === 0) {
            arreglo.push(numeros[i]);
        }
    }

    let resultado = arreglo.reverse().join(", ");
    document.getElementById("respuesta").value = "Se presentan los números pares en orden inverso: " + resultado;
}


function ejercicio19() {
    let cadena = document.getElementById("num1").value
    let mensaje = ""
    for (let i = 0; i < cadena.length; i++) {
        mensaje += cadena[i] + "\n" // la n es para salto de linea, en js, para HTML usa br, o solo haz que le agregue una coma
    }
    let men=document.getElementById("respuesta")
    men.value=mensaje
}

function ejercicio20() {
    let cadena = document.getElementById("num1").value
    let vocales = 0
    let mensaje = ""
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == "a" || cadena[i] == "e" || cadena[i] == "i" || cadena[i] == "o" || cadena[i] == "u") {
            vocales++
        }
    }
    mensaje = "La cantidad de vocales en la cadena es: " + vocales
    
    let men=document.getElementById("respuesta")
    men.value=mensaje
}

function ejercicio21() {
    let cadena = document.getElementById("men").value
    let cadenainvertida = ""
    cadenainvertida = cadena.split('').reverse().join('')
    let men=document.getElementById("respuesta")
    men.value=cadenainvertida
}

function contarPalabras(cadena) {
    let palabras = cadena.trim().split(/\s+/).filter(Boolean)
    return palabras.length
}
function ejercicio22() {
    let texto = document.getElementById("men").value
    let totalPalabras = contarPalabras(texto)
    document.getElementById("respuesta").value = `La cadena tiene un total de ${totalPalabras} palabras.`
}

function reemplazarEspaciosConGuiones(cadena) {
    let resultado = '';
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === ' ') {
            resultado += '-';
        } else {
            resultado += cadena[i];
        }
    }
    return resultado;
}

function ejercicio23() {
    let cadena = document.getElementById("men").value;
    let resultado = reemplazarEspaciosConGuiones(cadena);
    document.getElementById("respuesta").value = resultado;
}

function contarCaracteresEspecificos(cadena, caracter) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter) {
            contador++;
        }
    }
    return contador;
}

function ejercicio24() {
    let cadena = document.getElementById("men").value;
    let caracter = document.getElementById("num2").value;
    let resultado = contarCaracteresEspecificos(cadena, caracter);
    document.getElementById("respuesta").value = resultado;
}

function ejercicio25() {
    let cadena = document.getElementById('men').value;
    let caracterEliminar = document.getElementById('num2').value;
    let resultado = eliminarCaracteresEspecificosConCiclo(cadena, caracterEliminar);
    document.getElementById('respuesta').value = resultado;
}

function eliminarCaracteresEspecificosConCiclo(cadena, caracteresEliminar) {
    let resultado = '';
    for (let i = 0; i < cadena.length; i++) {
        let caracterActual = cadena[i];
        if (caracteresEliminar.indexOf(caracterActual) === -1) {
            resultado += caracterActual;
        }
    }
    return resultado;
}

function ejercicio26(){
    let i = 0, cad="", res="", men=""
    cad=document.getElementById("men").value
    men=document.getElementById("respuesta")
    while(i<cad.length){
        if(cad[i]==cad[i].toUpperCase()){
            res+=cad[i].toLowerCase()
        }
        else {
            if(cad[i]==cad[i].toLowerCase()){
                res+=cad[i].toUpperCase()
            }
        }
        i++
    }
    men.value=res
}

function ejercicio27() {
    let cadena = document.getElementById('men').value;
    let resultado = eliminarEspaciosConCiclo(cadena);
    document.getElementById('respuesta').value = resultado;
}

function eliminarEspaciosConCiclo(cadena) {
    let resultado = '';
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] !== ' ') {
            resultado += cadena[i];
        }
    }
    return resultado;
}

function longitudPalabraMasLarga(cadena) {
    // Dividir la cadena en palabras usando espacios como separador
    let palabras = cadena.split(" ");
    let longitudMaxima = 0;

    // Recorrer cada palabra para encontrar la longitud máxima
    for (let i = 0; i < palabras.length; i++) {
        let longitudActual = palabras[i].length;
        if (longitudActual > longitudMaxima) {
            longitudMaxima = longitudActual;
        }
    }

    return longitudMaxima;
}

// Función para ejecutar el ejercicio desde el botón en la página HTML
function ejercicio28() {
    let cadena = document.getElementById('men').value;
    let longitud = longitudPalabraMasLarga(cadena);
    document.getElementById('respuesta').value = longitud;
}
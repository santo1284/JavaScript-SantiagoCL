
/*
// ejercicio 1
let nombre = "Santiago calderon";
let edad = 20;
let ciudad = "Garzon";

console.log("Hola, mi nombre es " + nombre + ", tengo " + edad + " años y vivo en " + ciudad + ".");

// ejercicio 2
/*crea una variable llamada precio y asignale un valor deciamal. luego crea otra variable llmada cantidad y asignale un 
valor entero. Muestra el tipo de variable en la consola 


let precio = 2.25;
let cantidad = 3;
//escribir en una consola
console.log(typeof precio);
console.log(typeof cantidad);
//escrbir en una alerta
alert(typeof precio);
//escribir en un documento
document.write(typeof cantidad);

// ACTIVIDAD EN CLASE 

/* ejercicio 1: Una tienda ofrece un 25% de descuento por cada compra. Un cliente desea
saber cuánto deberá pagar por su compra. 

let vcompra= 2000;
let descuento = 0.25;
let total = vcompra - (vcompra * descuento);
console.log("El total a pagar es: " + total);

document.write("<br/>SOLUCION EJERCICIO 1");
document.write("<br/>El total a pagar es: " + total);
document.write("<br/>");

/*ejercicio 2: Suponga que un individuo desea invertir su capital en un banco y desea saber
cuánto dinero ganara después de un mes si el banco paga a razón de 2%
mensual.

let capital = 1000;
let interes = 0.02;
let ganancia = capital * interes;

console.log("La ganancia es: " + ganancia);
document.write("<br/>SOLUCION EJERCICIO 2");
document.write("<br/>La ganancia es: " + ganancia);
document.write("<br/>");

/*ejercicio 3: Un alumno desea saber cuál será su calificación final en la materia de
Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
a. 55% del promedio de sus tres calificaciones parciales.
b. 30% de la calificación del examen final.
c. 15% de la calificación de un trabajo final. 

let parcial1 = 4.5;
let parcial2 = 3.5;
let parcial3 = 5;
let examen = 4.2;
let trabajo = 3.8;

let promedio = (parcial1 + parcial2 + parcial3) / 3;
let calificacion = (promedio * 0.55) + (examen * 0.30) + (trabajo * 0.15);

console.log("La calificacion final es: " + calificacion);
document.write("<br/>SOLUCION EJERCICIO 3");
document.write("<br/>La calificacion final es: " + calificacion);
document.write("<br/>");

/*ejerccio 4: El dueño de una tienda compra un artículo a un precio determinado. Obtener el
precio en que lo debe vender para obtener una ganancia del 30%. 

let precioCompra = 1000;
let ganancia4 = 0.30;
let precioVenta = precioCompra + (precioCompra * ganancia4);

console.log("El precio de venta es: " + precioVenta);
document.write("<br/>SOLUCION EJERCICIO 4");
document.write("<br/>El precio de venta es: " + precioVenta);
document.write("<br/>");

/*ejercicio 5: Un taxi cobra por una carrera 15 mil pesos por kilómetro recorrido y 2 mil por
minuto. Determine el monto a pagar por una carrera. 

let km = 5;
let min = 10;
let precioKm = 15000;
let precioMin = 2000;
let total5 = (km * precioKm) + (min * precioMin);

console.log("El total a pagar es: " + total5);
document.write("<br/>SOLUCION EJERCICIO 5");
document.write("<br/>El total a pagar es: " + total5);
document.write("<br/>");

/*ejercicio 6: Realizara un programa en el cual se van a leer tres números y determinar el
cuadrado de cada uno de ellos. 

let num1 = 2;
let num2 = 3;
let num3 = 4;

let cuadrado1 = num1 **2;
let cuadrado2 = num2 **2;
let cuadrado3 = num3 **2;

console.log("El cuadrado de " + num1 + " es: " + cuadrado1);
console.log("El cuadrado de " + num2 + " es: " + cuadrado2);
console.log("El cuadrado de " + num3 + " es: " + cuadrado3);
document.write("<br/>SOLUCION EJERCICIO 6");
document.write("<br/>El cuadrado de " + num1 + " es: " + cuadrado1);
document.write("<br/>El cuadrado de " + num2 + " es: " + cuadrado2);
document.write("<br/>El cuadrado de " + num3 + " es: " + cuadrado3);
document.write("<br/>");

/*ejercicio 7: En un hospital existen tres áreas: Ginecología, Pediatría, Traumatología. El
presupuesto anual del hospital se reparte conforme a la sig. tabla:
Área Porcentaje del presupuesto
        Ginecología 40%
        Traumatología 30%
        Pediatría 30%
Obtener la cantidad de dinero que recibirá cada área, para cualquier monto
presupuestal. 

let presupuesto = 1000000;
let ginecologia = presupuesto * 0.40;
let traumatologia = presupuesto * 0.30;
let pediatria = presupuesto * 0.30;

console.log("El presupuesto para Ginecologia es: " + ginecologia);
console.log("El presupuesto para Traumatologia es: " + traumatologia);
console.log("El presupuesto para Pediatra es: " + pediatria);
document.write("<br/>SOLUCION EJERCICIO 7");
document.write("<br/>El presupuesto para Ginecologia es: " + ginecologia);
document.write("<br/>El presupuesto para Traumatologia es: " + traumatologia);
document.write("<br/>El presupuesto para Pediatra es: " + pediatria);

document.write("<br/>");
document.write("<br/>el punto 8 esta repetido es el mismo 3");
document.write("<br/>");

/*ejercicio 9: Tres personas deciden invertir su dinero para fundar una empresa. Cada una de
ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte
con respecto a la cantidad total invertida. 

let inversion1 = 1000;
let inversion2 = 2000;
let inversion3 = 3000;
let total9 = inversion1 + inversion2 + inversion3;

let porcentaje1 = (inversion1 / total9) * 100;
let porcentaje2 = (inversion2 / total9) * 100;
let porcentaje3 = (inversion3 / total9) * 100;

console.log("El porcentaje de la inversion 1 es: " + porcentaje1 + "%");
console.log("El porcentaje de la inversion 2 es: " + porcentaje2 + "%");
console.log("El porcentaje de la inversion 3 es: " + porcentaje3 + "%");
document.write("<br/>SOLUCION EJERCICIO 9");
document.write("<br/>El porcentaje de la inversion 1 es: " + porcentaje1 + "%");
document.write("<br/>El porcentaje de la inversion 2 es: " + porcentaje2 + "%");
document.write("<br/>El porcentaje de la inversion 3 es: " + porcentaje3 + "%");
document.write("<br/>");

/*ejercicio 10: Realizar una calculadora con las operaciones básicas suma, división,
multiplicación y división. 

let calculadora_num1= 10;
let calculadora_num2= 5;

let suma = calculadora_num1 + calculadora_num2;
let resta = calculadora_num1 - calculadora_num2;
let multiplicacion = calculadora_num1 * calculadora_num2;
let division = calculadora_num1 / calculadora_num2;

console.log("La suma es: " + suma);
console.log("La resta es: " + resta);
console.log("La multiplicacion es: " + multiplicacion);
console.log("La division es: " + division);

document.write("<br/>SOLUCION EJERCICIO 10");
document.write("<br/>La suma de: " + calculadora_num1 + " y " + calculadora_num2 + " es " + suma);
document.write("<br/>La resta de: " + calculadora_num1 + " y " + calculadora_num2 + " es "+ resta);
document.write("<br/>La multiplicacion de: "+ calculadora_num1 + " y " + calculadora_num2 + " es " + multiplicacion);
document.write("<br/>La division de: "+ calculadora_num1 + " y " + calculadora_num2 + " es " + division);
*/

/*ejemplo 1. declare dos variables una que sea el nombre y otra que sea la edad */

/*let nombre = prompt("Ingrese su nombre");
let edad= parseInt(prompt("ingrese su edad"));

if(edad>=18){
        alert("mi perrito "+ nombre + " ya eres legal");
}else{
        alert("ve a tomar tetero "+ nombre + " porque eres menor de edad");
}


/*el usuario diigite nombre y edad con la siguiente estructura de verificacio 
1-18= joven
19-40= adulto
41-60= adulto mayor
61-adelante= anciano 


let nombre = prompt("Ingrese su nombre");
let edad= parseInt(prompt("ingrese su edad"));

if(edad<=18){
        alert("mi perrito "+ nombre + " eres un joven");

}else if(edad>=19 && edad<=40){
        alert("mi perrito "+ nombre + " eres un adulto");

}else if(edad>=41 && edad<=60){
        alert("mi perrito "+ nombre + " eres un adulto mayor");

}else{
        alert("mi perrito "+ nombre + " eres un anciano");
}
 */

//ciclo while 

/*declarar una variable numerica que muestre la cuenta regresiva a llegar a cero 


let numero=prompt("ingrese su numero para hacer la cuenta regresiva");

while(numero>=0){
        document.write(numero + "<br>");
        numero--;
}
*/

//do while

//imprimir 5 edades diferentes y determinar si son mayores de edad o no

        /*let persona=0

        do{
                let nombre=prompt("ingrese su nombre");
                let edad=parseInt(prompt("ingrese su edad"));
                if(edad>=18){
                        alert(nombre +" eres mayor de edad");
                }else{
                        alert(nombre +" eres menor de edad");
                }
                persona++;
        }while(persona<5)

                alert ("se registraron " + persona + " personas");
                alert("fin del programa");

                */

                //ciclo for
                
                
                /*let numMultiplicar=parseInt(prompt("ingrese el numero a multiplicar"));

                for(let i=0; i<=10; i++){
                        let resultado= numMultiplicar * i;

                       document.write(numMultiplicar + " x " + i + " = " + resultado + "<br>" );
                }
                       */


                // Switch case

                //ejemplo 1. realiza un programa que determine que dia de la semana corresponde hoy, utilizando la funcion prompt

               /* let dia=parseInt(prompt("ingrese el numero del dia"));

                switch(dia){
                        case 1: alert("hoy es lunes");
                        break;
                        case 2: alert("hoy es martes");
                        break;
                        case 3: alert("hoy es miercoles");
                        break;
                        case 4: alert("hoy es jueves");
                        break;
                        case 5: alert("hoy es viernes");
                        break;
                        case 6: alert("hoy es sabado");
                        break;
                        case 7: alert("hoy es domingo");
                        break;
                        default: alert("el numero digitado no crorresponde a ningun dia de la semana");

                }

                */

                //ejemplo 2
                /*

                const dia = new Date().getDay()

                        switch (dia) {
                        case 0:
                        case 6:
                        console.log("¡Hoy es fin de semana! 🥳")
                        break
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        console.log("¡Nooo, a trabajar! 😢")
                        break
                        case 5:
                        console.log("¡Hoy es viernes! 🤓")
                        break
                        }

                        */

                        // ejemplo 3. rangos
                        /*

                        let edad = parseInt(prompt("ingrese su edad"));
                        switch(true) {
                                case (edad >= 18 && edad < 25):
                                console.log("Eres mayor de edad y eres joven");
                                break;
                                case (edad >= 25 && edad < 40):
                                console.log("Eres mayor de edad y estás en plena madurez");
                                break;
                                case (edad >= 40):
                                console.log("Eres mayor de edad y estás en la mejor edad");
                                break;
                                default:
                                console.log("Eres menor de edad");
                        }
                */


                
                //actividad en clase

                //1. Imprimir por consola un mensaje siel usuario y contraseña coinciden con unos establecidos 

                let gmail="santiago@gmail.com";
                let passwor="1234";

                let usuario=prompt("ingrese su correo electronico");
                let contraseña=prompt("ingrese su contraseña");

                if(usuario===gmail && passwor===contraseña){
                        document.write("bienvenido a su cuenta <br/>");
                }else{
                        document.write("usuario o contraseña incorrecta <br>");
                }

                //2. verificar si un numero es positivo, negativo o cero e imprimir un mensaje 


                let numero=parseInt(prompt("ingrese un numero para saber si es negativo, positivo o cero"));

                if(numero>0){
                        document.write("el numero es positivo <br>");
                }else if(numero<0){
                        document.write("el numero es negativo <br>");
                }else if(numero===0){
                        document.write("el numero es cero <br>" );
                }

                //3. verificar si una persona puede votar o no (mayor o igial a 18) e indica cuantos años le falta

                let edad=parseInt(prompt("ingrese su edad para saber si puedes votar"));

                if(edad>=18){
                        document.write("puedes votar <br>");
                }else{
                        let falta=18-edad;
                        document.write("te faltan " + falta +" años <br>")
                }

                //4. use el operador ternario para asignar el valor "adulto" o "menor " a una variable dependiendo la edad

                let edad2=parseInt(prompt("ingrese su edad para saber si eres mayor de edad o menor de edad"));

                document.write(edad2>=18 ? "eres mayor de edad" : "eres menor de edad");

                document.write("<br>")


                document.write(" <br >comienzo ejercicios pares actividad en clase <br>");

                /*2.Dada las 3 calificaciones que el estudiante obtuvo en un curso
                        a) Determinar su promedio
                        b) Indicar si el estudiante aprobó o no aprobó el curso.
                        Las notas deben ser de 1 a 10 y aprueba con un promedio mayor de 6*/

                let nota1 = parseInt(prompt("ingrese su primer nota"));
                let nota2 = parseInt(prompt("ingrese su segunda nota"));
                let nota3 = parseInt(prompt("ingrese su tercer nota"));

                let promedio = (nota1+nota2+nota3)/3

                document.write(promedio>=6 ? "Felicidades aprobo el curso" : "Reprobaste el curso <br>");

                /*4. Leer dos números y los imprima en forma ascendente. */

                let num1 = parseInt(prompt("ingrese el primer digito para organizar"));
                let num2 = parseInt(prompt("ingrese el segundo numero a organizar"));

                document.write(num1>num2 ? num1+ "<br>" + num2 : num2 + "<br>" + num1 + "<br>")

                /*6. Dado un numero entre 1 y 7 escriba su correspondiente día de la semana
                        así:
                        DIA1 = LUNES
                        DIA2 = MARTES
                        DIA3 = MIECOLES
                        DIA4 = JUEVES
                        DIA5 = VIERNES
                        DIA6 = SABADO
                        DIA7 = DOMINGO
                        SI se escribe otro número diferentes debe salir el mensaje: ESCRIBIO UN
                        NUMERO FUERA DEL RANGO. ESCRIBA UN NÚMERO ENTRE 1 Y 7 */

                        let dia_semana= parseInt(prompt("ingrese un numero para saber el dia de la semana"));

                        switch(dia_semana){
                                case 1:
                                document.write("lunes <br>")

                                break;
                                case 2:
                                document.write("marte  <br>")
        
                                break;
                                case 3:
                                document.write("miercoles  <br>")

                                break;
                                case 4:
                                document.write("jueves  <br>")

                                break;
                                case 5:
                                document.write("viernes  <br>")

                                break;
                                case 6:
                                document.write("sabado  <br>")
        
                                break;
                                case 7:
                                document.write("domingo  <br>")
                
                                break;
                                
                                default: document.write("ESCRIBIO UN NUMERO FUERA DEL RANGO. ESCRIBA UN NÚMERO ENTRE 1 Y 7  <br>")

                        }


                        /*8. Un obrero necesita calcular su salario semanal, el cual se obtiene de la sig.
                                manera:
                                a) Si trabaja 40 horas o menos se le paga $16000 por hora
                                b) Si trabaja más de 40 horas se le paga $20000 por hora */

                                let horas= parseInt(prompt("cuantas horas trabajo en la semana"));

                                if(horas<40){
                                        document.write("40 horas o menos se le paga $16000 por hora <br>");
                                        let trabajo = 16000* horas;
                                        document.write("usted gano esta semana " + trabajo + " trabajando un total de " + horas + "<br>");
                                }else{
                                        document.write("más de 40 horas se le paga $20000 por hora <br>");
                                        let trabajo = 16000* horas;
                                        document.write("usted gano esta semana " + trabajo + " trabajando un total de " + horas + "<br>");
                                }

                        /*10.Hacer un programa que calcule el total a pagar por la compra de camisas. Si
                                se compran tres camisas o mas se aplica un descuento del 20% sobre el total
                                de la compra y si son menos de tres camisas un descuento del 10%. */

                                let num_camisas=parseInt(prompt("cuantas camisas compro"))

                                switch(num_camisas){
                                        case 1:
                                        case 2:
                                                let precio1= parseInt(prompt("cual es el precio de la primer camisa"));
                                                let precio2= parseInt(prompt("cual es el precio de la segunda camisa de no haber comprado poner 0"));
                                               
                                                let valor = precio1+precio2
                                                let descuento= (valor*10/100)
                                                let pagar = valor-descuento

                                                document.write("su compra fue de "+ valor +
                                                         " tiene un descuento de " + descuento +
                                                          " su total a pagar es de "+ pagar + "<br>")
                                        break;
                                        case 3: 
                                                let precio3= parseInt(prompt("cual es el precio de la primer camisa"));
                                                let precio4= parseInt(prompt("cual es el precio de la segunda camisa"));
                                                let precio5= parseInt(prompt("cual es el precio de la tercer camisa"));

                                                let valor2 = precio3+precio4+precio5
                                                let descuento2= (valor2*20/100)
                                                let pagar2 = valor2-descuento2

                                                document.write("su compra fue de "+ valor2 +
                                                         " tiene un descuento de " + descuento2 +
                                                          " su total a pagar es de "+ pagar2 + "<br>")
                                }

                                /*12.Realizar una calculadora con las operaciones básicas suma, división,
                                        multiplicación y división. */

                                        let operacion= prompt("que operacion quiere realizar \n suma \n resta \n multuplicacion \n division")

                                        switch(operacion){
                                                case "suma":

                                                        break;
                                                case "resta":

                                                break;
                                                case "multiplicacion":

                                                break;
                                                case "division":
                                                        
                                                break;

                                        }









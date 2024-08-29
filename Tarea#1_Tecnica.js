// EJERCICIO #1 
let Nombre = "Luisa Yolanda Crespo Vera ";
// EJERCICIO #2
let Edad = 18;
// EJERCICIO #3
let esEstudiante= true;

// EJERCICIO # 4
let nume = 7;
if (nume > 0 ){
    console.log(" es positivo " );
} else if  (nume < 0){
console.log("es negativo ");
} else  {
    console.log("es cero ");
}
// EJERCICIO #5

let hobbies = ["leer", "cocinar"];
console.log(hobbies);

// EJERCICIO #6
let objet ={
    nombre : "Valeria",
    edad:22,
    estudiante: true
    };
    console.log(objet.nombre);
    console.log(objet.edad);
    console.log(objet.estudiante);

// EJERCICIO #7
    let nullVar = null
    console.log(nullVar);

// EJERCICIO #8
    let edad = 19
    for (let i = 1 ; i<= edad;i++){
        console.log("Has cumplido " + i + "años")
    } 

    // EJERCICIO #9
    let numeroHex= 0xAF;
        console.log(numeroHex);

 // EJERCICIO # 10
    let nombre= "Luisa Yolanda ";
    let apellido= "Crespo Vera ";
    let nombreCompleto= nombre + apellido ;
    console.log(nombreCompleto);

// EJERCICIO # 11
    let nume1= 10;
    let nume2= 20 ;
    let suma = nume1 + nume2;
    console.log(suma);
    
    // EJERCICIO # 12
    let nume3= 50;
    let nume4= 30;
    let resta = nume3 - nume4;
    console.log(resta);

    // EJERCICIO # 13
    let nume5= 5;
    let nume6=  4;
    let multiplicación = nume5 * nume6;
    console.log(multiplicación);

// EJERCICIO # 14
 let nume7= 10;
 let nume8= 2;
 let división = nume7 / nume8;
console.log(división );

 // EJERCICIO # 15

let modulo = 10 % 3;
console.log (modulo);

 // EJERCICIO # 16
 let contador = 3;
 contador ++;
 console.log(contador);

// EJERCICIO  17
let contadorDec= 10;
contadorDec--;
console.log(contadorDec);
//EJERCICIO # 18
let lista=["mesa", "silla","lampara","libros","hojas","lapiz"];
console.log(lista);

//EJERCICIO # 19
let lista2=["mesa","silla","lampara","libros","hojas","lapiz"];
let BuscarLista= "libros";
let siEsta = false;
for(let i = 0; i < lista2.length; i++){
    if(lista2[i]=== BuscarLista){
        siEsta = true;
        break;
    }
    
    
}
if(siEsta){
    console.log("si se encuentra en la lista");
} else {
    console.log("no se se encuentra en la lista ");
}

// EJERCICIO # 20 
let lista3= ["carro","moto","bisicleta","camioneta"];
lista3.push("camión");
console.log(lista3);
lista3.splice(1,0,"Yate");
console.log(lista3);

//EJERCICIO # 21
// Eliminamos el elemento por su valor
let lista4=["rojo","azul","amarillo","blanco","verde"];
let indice= lista4.indexOf("blanco")
if(indice!== -1){
    lista4.splice(indice,1);// eliminamos el valor que es "blanco"
}
console.log(lista4);

// Eliminamos el elemento por su indice 
let lista5=["rojo","azul","amarillo","blanco","verde"];
lista5.splice(3,1);
console.log(lista5)

//EJERCICIO # 22
let nume9= 10;
let nume10=10;

if (nume9==nume10){
    let sonIguales= "son iguales ";
    console.log(sonIguales );
}else{
    let sonIguales= "no son igaules ";
    console.log(sonIguales);
}
//EJERCICIO # 23
let nume11= 20;
let nume12=30;
if(nume11> nume12){
    let esMayor= ("el numero 11 es mayor que el numero 12");
    console.log (esMayor);
}else{
    let esMayor= ("el número 12 es mayor que número 11");
    console.log (esMayor);

}//EJERCICIO # 24 
let contraGuardada= ("mariposa");
let contraIngresada= ("Mariposa");
if(contraGuardada === contraIngresada){
    let acceso= ("INGRESAR");
    console.log(acceso);

}else {
    let acceso= (" NO INGRESAR");
    console.log(acceso);
}

// EJERCICIO # 25
let  edadd= 16
let ingresos = 1200
if (edadd>= 16 && ingresos>= 1000){
    let siTributa= ("usted si tributa ");
    console.log (siTributa)
}

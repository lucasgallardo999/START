console.log ("Iniciando javascript ...");
var myName= "Lucas";
var edad= 20;
var ignasiAge= 32;
var ageDiff= edad - ignasiAge;
var start= ["Gian","Lucas","Branko", "Rocio","Rodri", "Roman"]
var ages= [23, 23, 32, 18, 26, 23]
var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
start.sort();
console.log (myName);
console.log (edad);
console.log (ageDiff);

if(edad>21){
    console.log("You are older than 21") 
}
else {
    console.log("You are not older than 21") 
}
if(edad<ignasiAge){
    console.log ("Ignasi is older than you")
}
else if(edad>ignasiAge){
    console.log ("Ignasi is younger than you")
}
else{
    console.log ("You have the same age as Ignasi")
}
//---------------------------------------------------Array Functions--------------------------------------------------------------


for(var i= 0; i<start.length; i++){
    console.log(start[i])
}

console.log (start[0])
console.log (start[start.length-1])

var o= 0;
var agesp= ages.filter(function(numero){
                       return numero % 2 == 0;
                       });
console.log("while con filtro")
while(agesp[o] % 2 == 0){
    
    console.log(agesp[o]);
    o++;
      }

console.log("while con condicional")
var a= 0;
while(a < ages.length){    
    if(ages[a]%2==0){        
        console.log(ages[a]);       
      }
     a++;
}

console.log("for con filtro")
for(var i = 0; agesp[i] % 2 == 0; i++ ){
    console.log(agesp[i]);
}

console.log("for con condicional")
for(var i = 0; i<ages.length; i++){
    if(ages[i]%2==0){
    console.log(ages[i])
}
}
console.log ("Mostrar minimo")
var arr = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 1;
var min = Math.min(...arr) 
console.log(min);
console.log ("Mostrar mayor")
var max = Math.max(...arr);
console.log (max)
console.log("Ejercicio 5")
function mostrarindice (array,indice){
    console.log(array[indice])
}
mostrarindice (arr,index)

console.log("ejercicio 6")
function repetidos(array){
    let rep= []
    for(i=0; i<array.length;i++){
        
         for(r=i+1; r<array.length;r++){
             
             if (array[i]==array[r] && rep.indexOf(array[i])== -1){
                 
                 rep.push(array[i])
             }
        }
    }
    console.log(rep)
}
repetidos(arr)
function repetidos2(array){
    let rep= []
    for(i=0; i<array.length;i++){
             
             if (array.indexOf(array[i],i+1)!= -1 && rep.indexOf(array[i])== -1){
                 
                 rep.push(array[i])
             
        }
    }
    console.log(rep)
}
repetidos2(arr)

console.log("ejercicio 7")
myColor = ["Red", "Green", "White", "Black"];
function arraytostring (array){
    var as= array.toString()
    console.log(as)
}
arraytostring(myColor)

//-----------------------------------------------------String Functions------------------------------------------------------
console.log("String Ejercicio 1")

function invertirDigitos(numero)
{ 
  var invertido = 0
  var resto = numero
  do {
    invertido = invertido * 10 + (resto % 10)
    resto = Math.floor(resto / 10)
  } while ( resto > 0 )
  return invertido
}

console.log(invertirDigitos(32443))

var ej1= 32443
var ej2= "lucas"
var ej3= "prince of persia"
var ej4= "atr perro cumbia cajetiala piola gato"
function invertir2(int){
    var string= int.toString()
    var invertida= "";
    
    for(var i=string.length-1; i>=0; i--){
        invertida+= string[i]}
    console.log(invertida)
}
invertir2(ej1)


console.log("String Ejercicio 2")

function alfabetico(string){
    
    console.log(string.split(" ").sort().toString().replace(/,/g,""))
    
}
alfabetico(ej2)

console.log("String ejercicio 3")

function mayus(string){
    console.log(string.toString().replace(/\b\w/g, l => l.toUpperCase()))
}
mayus(ej3)


console.log("String ejercicio 4")

function palabralarga(string){
    var grande=""
    var vec=string.split (" ")
    vec.forEach(
        function(palabra){
            if (palabra.length>grande.length){
                grande=palabra
            }
        }
    )
    console.log(grande)
}
palabralarga(ej4)

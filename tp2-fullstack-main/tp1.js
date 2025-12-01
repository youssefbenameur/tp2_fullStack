let age = 25;
let name = "Alice";
let isStudent = true;

console.log("Âge :", age);
console.log("Nom :", name);
console.log("Est étudiant :", isStudent);


let x = 5;
let y = 10;

console.log("Addition :", x + y);
console.log("Soustraction :", y - x);
if (x==0) {console.log ("division par 0 impossible ! ")}
else{console.log("Division :", y / x);}
console.log("Multiplication :", x * y);

console.log("x == y ?", x == y);
console.log("x === y ?", x === y);
console.log("x > y ?", x > y);
console.log("x < y ?", x < y);
console.log("x >= y ?", x >= y);


let ageUser = 17;

if (ageUser >= 18) {
  console.log("Majeur");
} else {
  console.log("Mineur");
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let fruits = ["pomme", "banane", "orange"];
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}


function addition (a,b){return a+b;}

let m=2;
let n=4;

console.log ("la somme est "+addition(m,n));

const multiply = (a, b) => a * b ;

console.log ("le produit est "+multiply(m,n));

//let div = document.querySelector("#maDiv");
//let button = document.querySelector("#monBouton");

//div.innerText = "Nouveau texte";


//let div = document.querySelector("#maDiv");

//let p = document.createElement("p");
//p.textContent = "Ceci est un paragraphe ajouté par JavaScript.";
//div.appendChild(p);

//let btn = document.createElement("button");
//btn.textContent = "Clique ici";
//document.body.appendChild(btn);

//btn.addEventListener("click", () => {
 // console.log("Bouton cliqué !");
//});

let button = document.querySelector("#btn");
button.addEventListener("click", function() {
 document.querySelector("#maDiv").innerText = "Le texte a changé !";
 });
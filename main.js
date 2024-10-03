// somme de trois nombress
let a =20;
let b =10;
let c =2;
let somme = a+b+c;
console.log("la somme est :" +somme);

// le produit de trois nombres
let produit = a*b*c;
alert("le produit est :" +produit);

// la division 
let somme2 =a+b;
let div = somme2/c;
console.log("la division est :" +div);

//  Afficher la date actuelle en français
let date = new Date();
let options = {
    weekday: 'long',   
    year: 'numeric',   
    month: 'long',     
    day: 'numeric'     
};
let dateEnFrancais = date.toLocaleDateString('fr-FR', options);
alert("La date d'aujourd'hui est : " + dateEnFrancais);


// Table de multiplication
for (let number = 1; number <= 9; number++) {
    console.log("Table de multiplication de " + number);
    
    for (let i = 1; i <= 9; i++) {
        let result = number * i;
        console.log(number + " * " + i + " = " + result);
    }
    console.log(""); 
}
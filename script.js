/**
 * Code JavaScript
 */
/*Consoles
* */
console.log("Bonjour toi !", 42, "Hello");
console.warn("oula");
console.error("outch");
console.info("information");

/**
 * Variable var, let et const
 */
/**
 * var on utilise le  lowerCamelCase, pas d'accent, de caractère spéciaux et ne comence pas par de chiffre
 */ 
/**
 * le égal "=" est un opérateur d'affection
 */
var xavier = "Coucou moi c'est xavier";
console.log(xavier);

/**
 * Concaténation
 */
var phrase = "Bonjour";
var prenom = "Xavier";

var phraseComplete = phrase + " " + prenom;
phraseComplete = phrase + ", comment allez-vous " + prenom + " ?";

//Littéraux des gabarits
//Backtit
//Windows : AltGR + 7 pour les backtits
phraseComplete = `${phrase} ${prenom}`;



var nombre = 36; // type Iteger/Number (int)
var negatif = -120;
var decimal = 12.56; // type "float"
var text = "Ceci est une chaine de caractère"; //Type "string"
var boolean = true; // Type "bool" ou "boolean"

var brouette;
brouette = "Jardin"; // Déclaration en attente d' affection

/**
 * let et var
 */
//Hoisting
variable = 12;

var variable;{
    let variable2 = 34;
    console.log(variable, variable2);
}

 /*console.log (variable, variable2);

/**
 * const     // une constante ne peux pas être modifiée une fois sa valeur affectée
 */
const maVariable = "Hello";
console.log(maVariable);

// maVariable = "Bonjour";
// console.log(maVariable); // Erreur

/**
 * Opérateurs de calcul
 */

let nombre1 = 10;
let nombre2 = 3;

console.log(nombre1 + nombre2); // addition
console.log(nombre1 - nombre2); // Soustraction
console.log(nombre1 * nombre2); // Multiplication
console.log(nombre1 / nombre2); // Division
console.log(nombre1 % nombre2); // Modulo est le reste d'une division

let total = 10;
total += 2;  // total = total + 2;
total -= 2;  // total = total - 2;  
total *= 2;  // total = total * 2;
total /= 2;  // total = total / 2;
total %= 2;  // total = total % 2;

/**
 *  Incrémentation & décrémentation pour utilisation boucle
 */
// total = total + 1;     // permet d'ajouter 1 à une variable de type "integer"
// total += 1;
total++;

// Décrémentation, permet de retirer 1 à une variable de type "int"
total--;

/**
 * Opérateurs de comparaison 
 */

let compare1 = 45;
let compare2 = 12;

/**
 * Egalité       //  Egal à... "==", vérifie que les valeurs sont bien identiques
 */ 
console.log(compare1 == compare2);

// Strictement égal à...  "===", vérifie que les valeurs et les types
// sont identiques
// "64" === 64 // La condition est fausse
console.log(compare1 === compare2);

//Différent
// Différent de..., vérifie ses valeurs sont bien différentes
console.log(compare1 != compare2);

//Strictement différent de..., vérifi les valeur et les types
//Sont bien différents
// "64" !== 64 // La condition est vraie
console.log(compare1 !== compare2);

//Strictement à...
console.log(compare1 > compare2);

//Strictement supérieur ou égal à...
console.log(compare1 >= compare2);

//Strictement inférieur à...
console.log(compare1 < compare2);

//Strictement iférieur ou égal à...
console.log(compare1 <= compare2);

/**
 * && veut dire "et"
 * Les deux conditions doivent être VRAIES
 */
//les 2 conditions étant fausse fait que la totalité des conditions est fausse 
console.log(compare1 > compare2 && compare1 === compare2);

//les 2 conditions étant vraies fait que la totalité des conditions est vraies
console.log(compare1 > compare2 && compare2 < compare1);

/**
 * || veut dire "ou"
 * une des deux conditions doivent être VRAIES
 */
console.log(compare1 > compare2 || compare1 === compare2);


/**
 *  Les conditions
 */
if (compare1 > compare2) {
    console.log("c'est exact");
}
/**
 *  si condition faire
 *     ...
 *  SINON SI condition FAIRE
 *     ...
 *  SINON
 *     ...
 *  FINSI
 */

if (compare1 === compare2) {
    console.log("c'est exact");
}
else {
    console.log("Erreur...");
}

if (compare1 === compare2) {
    console.log("c'est exact");
}
else if (compare1 < compare2) {
    console.log("C'est exactement");
}
else {
    console.log("Erreur...");
}

/**
 * Intéragir avec l'utilisateur
 */
// Boite de dialogue
// Demande une valeur à l' utilisateur
// let age = prompt("Donne moi ton âge ?");
// console.log(age);

// Demande une confirmation par 2 boutons "Annuler" et "ok"
// let response = confirm("Es-tu sûr de ton âge ?");
// console.log(response);

// Affiche une Alerte
// alert("Attention ! Vous êtes observé !");

/**
 * Les Boucles
 */
// Boucle while ()
let compteur = 1;
while (compteur != 10) {
    console.log(compteur);      //Cherche un endroit en boucle
    // Se place en dernier    sa s'appel une accrémentation
    compteur++;            // NE PAS OUBLIER ? SINON BOUCLE INFINIE
}
// do.... while()
// Effectue au minimum une itération avant la vérification
let counter = 1 ;
do {
    console.log(counter);
    counter++;             // NE PAS OUBLIER? SINON BOUCLE INFINIE
} while (counter < 11);

// for()
    //for ([déclaration]; [condition]; [incrémentation])       
for (let compteur = 1 ; compteur < 11; compteur++) {
    console.log(compteur);
}
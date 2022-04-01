//let text = "xavier"; //Q1

//let nombre = 20;  // Q2
//let assemblage = ${text} ${nombre};


let firstName = "xavier",
    lastName = "Doe";

if (lastName === "Doe") {
    console.log(`bienvenue ${lastName} !`);
}

if (lastName === "Jane") {
    console.log(`Bienvenue ${firstName} !`);
}
else {
    console.warn("T ki ?");
}
/**
 * Point #3
 */
if (lastName === "Smith" && firstName === "John") {
    console.log("Tous va bien");
}
else {
    console.warn("Oups!");
}
// entrainement # 1 
let compteur = 1;
while (compteur < 11) {
    console.log(compteur);
    compteur++;
}
// 2
for (let compteur = 1 ; compteur < 11; compteur++) {
    console.log(compteur);
}
//for ([déclaration]; [condition]; [incrémentation]) //
// 3  
for (let compteur = 2 ; compteur > 20 ; compteur+=2) {
    console.log(compteur);
}
//solution 2 
for (let compteur =2; compteur < 20; compteur++) {
    if ((compteur%2) === 0) {
        console.log(compteur);
    }
}
/**
 * Point #4
 */
for (let i = 1; i < 11; i++) {
    let total = i*i;
    console.log(`${i} -> ${total}`);
}
/** Point #5
 * boucle while 5 numéro
 */
let i = 1 
while (i <= 5) {
    //Math.random() génère un nombre aléatoire entre
    //0.0000 ... et 0.99999 ...

    //Solution #1
    //let ramdom = Math.floor(Math.random () * 10);
    //console.log(ramdom);

    //solution #2
    let ramdom = Math.random() * 10;
    // .toFixed() est un prototype permettant de limité le nombre
    // de chiffres après la virgule    
    console.log(ramdom.toFixed(0));

    i++;
}
/**
 * point #6
 */
/*for (let i = 4; i <= 50; i++) {
/*   console.log(i);
/*}     fait verif puis taper la suite
*/
for (let i = 4; i <= 50; i++) {

    //si la variable "i" est différente de 13 ET 27, alors on affiche
    //le nombre en cours
    if (i !== 13 && i !== 27){
        console.log(i);
    }
}





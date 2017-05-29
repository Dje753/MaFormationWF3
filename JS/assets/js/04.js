/*----------------------------------
    LES OPERATEURS ARITHMETIQUES
------------------------------------*/

// ####### L'Addition ####### //

// -- Déclaration de plusieurs variable à la suite
var nb1, nb2, resultat;

nb1 = 10;
nb2 = 5;

// -- Addition de nb1 + nb2 avec l'operateur "+"
resultat = nb1 + nb2;

// -- Affichage du résultat dans la console.
console.log("L'addition de nb1 et nb2 est égale à "+ resultat);


// ############# LA SOUSTRACTION ############### //

// -- Soustraction de nb1 - nb2 avec l'operateur " -"
resultat = nb1 - nb2;

// -- Affichage du résultat dans la console.
console.log("La Soustraction de nb1 et nb2 est égale à "+ resultat);


// ############# La MULTIPLICATION ############### //

// -- La Multiplication de nb1 x nb2 avec l'operateur "*"
resultat = nb1 * nb2;

// -- Affichage du résultat dans la console.
console.log("La Multiplication de nb1 et nb2 est égale à "+ resultat);


// ############# LA DIVISION ############### //

// -- La Division de nb1 x nb2 avec l'operateur "/"
resultat = nb1 / nb2;

// -- Affichage du résultat dans la console.
console.log("La division de nb1 et nb2 est égale à "+ resultat);


// ############# MODULO ############### //

// -- NB : Le resultat du Modulo est le reste de la division

// -- La Division de nb1 x nb2 avec l'operateur "%"
nb1 = 11;
resultat = nb1 % nb2;

// -- Affichage du résultat dans la console.
console.log("Le reste de La division de " + nb1 +" et " + nb2 +" est égale à :" + resultat);



/*----------------------------------
    LES ECRITURES SIMPLIFIEES
------------------------------------*/

nb1 = 15;
nb1 = nb1 + 5;
console.log(nb1);

nb1 += 5; // -- Ce qui équivaut à écrire nb1 = nb1 + 5;
// 66 Ici, j'ai incrémenté et réaffecté.

console.log(nb1);
// -- Je peux procéder de la meme maniere pour tous les autres opérateurs arithmétiques :
// : "+", "-", "/", "*", "%"



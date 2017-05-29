/*---------------------------------------------------------------
                        LES FONCTIONS
---------------------------------------------------------------*/

// -- Déclarer une fonction
// -- Cette fonction en retourne aucune valeur
function DitBonjour(){
    // lors de l'appel de la fonction, les instructions ci-dessous seront exécutées. 
    alert("bonjour !");
}

// -- Je vais appeler ma fonction "DitBonjour" et déclencher ses instructions.
DitBonjour();

// -- Déclarer une fonction qui prend une variable en paramétre
function Bonjour(Prenom, Nom){
    document.write("<p>Hello <strong> " + Prenom + " " + Nom + "</strong> !</p>");
}

// -- Appeler / Utiliser une fonction avec un paramètre
Bonjour("Jérémie", "RIDAO");

// -- ou 

var Prenom = "Yimin";
var Nom    ="JI";

Bonjour(Prenom,Nom)



function Addi(nb1, nb2){
   //  let resultat = nb1 + nb2;
    return nb1 + nb2; // resultat;
}

document.write("<p>" + Addi(10,10) + "</p>");


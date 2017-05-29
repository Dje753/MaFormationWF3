// -- Déclarer un Tableau Numérique
var monTableau = [];
var myArray    = new Array;

// -- Affecter des valeurs à un Tableau Numérique
monTableau[0] = "Hugo";
monTableau[1] = "Tanguy";
monTableau[2] = "Géraldine";

//-- Afficher le contenu de mon Tableau Numérique dans la console.
console.log(monTableau[0]); // -- Hugo
console.log(monTableau[2]); // -- Géraldine
console.log(monTableau); // -- Affiche tout les donées.

// -- Déclarer et affecter des valeurs à un Tableau Numérique
var NosPrenoms = ["Yimin", "Alex", "Cristian", "Tristan"];
console.log(NosPrenoms);
console.log(typeof NosPrenoms);

// -- Déclarer et Affecter des valeurs à un Objet. (Pas de Tableau Associatif en JS)
var Coordonnee = {
    "prenom"    :   "Hugo",
    "nom"       :   "LIEGARD",
    "age"       :   27
}

console.log(Coordonnee);
console.log(typeof Coordonnee);

// -- Comment créer et affecter des valeurs à un Tableau 2 Dimensions.

// -- Je vais creer 2 tableaux numériques
var ListeDePrenoms = ["Hugo", "Rodrigue", "Kristie"];
var ListeDeNoms    = ["LIEGEARD", "NOUEL", "SOUKAI"];

// -- Je vais créer un Tableau à 2 diension à partir de mes 2 tableaux précédents
var Annuaire = [ListeDePrenoms, ListeDeNoms];
console.log(Annuaire);

// -- Afficher un Nom et un Prénom sur ma Page HTML !
/*document.write(Annuaire[0][1]);
document.write(" ")
document.write(Annuaire[1][1]);*/

/* EXERCICE*/

var ListeDePrenom = ["Benoit","Teuch","Sandrine","Bambi","Aladin"];
var ListeDeNom    = ["SEIZE","FAT","PIQUE","WALT","CLODO"];
var ListeDeTel    = ["01245864572","12652356654","7895247801","01325446214","05244683524"];
var AnnuaireDesStagiaires = [ListeDePrenom, ListeDeNom, ListeDeTel];
console.log(AnnuaireDesStagiaires);
document.write(AnnuaireDesStagiaires[0][0]);
document.write(" ")
document.write(AnnuaireDesStagiaires[1][0]);
document.write(" ")
document.write(AnnuaireDesStagiaires[2][0]);

document.write(AnnuaireDesStagiaires[0][1]);
document.write(" ")
document.write(AnnuaireDesStagiaires[1][1]);
document.write(" ")
document.write(AnnuaireDesStagiaires[2][1]);

document.write(AnnuaireDesStagiaires[0][2]);
document.write(" ")
document.write(AnnuaireDesStagiaires[1][2]);
document.write(" ")
document.write(AnnuaireDesStagiaires[2][2]);

document.write(AnnuaireDesStagiaires[0][3]);
document.write(" ")
document.write(AnnuaireDesStagiaires[1][3]);
document.write(" ")
document.write(AnnuaireDesStagiaires[2][3]);

document.write(AnnuaireDesStagiaires[0][4]);
document.write(" ")
document.write(AnnuaireDesStagiaires[1][4]);
document.write(" ")
document.write(AnnuaireDesStagiaires[2][4]);


/* CORRECTION */

var AnnuaireDesStagiaires=[
    {"prenom" : "Hugo", "nom": "LIEGARD", "tel" : "0101010101"},
    {"prenom" : "Tanguy", "nom": "MANAS", "tel" : "0101010101"},
    {"prenom" : "Yimin", "nom": "JI", "tel" : "0101010101"}
];

console.log(AnnuaireDesStagiaires);
console.log(AnnuaireDesStagiaires[0].nom); // -- LIEGARD
console.log(AnnuaireDesStagiaires[1].nom); // -- MANAS


/*             AJOUTER UN ELEMENT              */

var Couleurs = ["Rouge", "Jaune",  "vert"];

// -- si je souhaite ajouter un élement dans mon tableau
// -- Je fait apple à la fontion push() qui me renvoi le nombres d'éléments de mon tableau.

console.log(Couleurs);
var nombreElementsDeMonTableau = Couleurs.push("Orange");
console.log(Couleurs);
console.log(nombreElementsDeMonTableau);

// -- NB : La fontion unshift() permet d'ajouter un ou plusieurs éléments en début de tableau.


/*          RECUPERER ET SORTIR LE DERNIER ELEMENT        */

// -- La fonction pop() me permet de supprimer le dernier élément de mon tableau et d'en récupérer la valeur.
// -- Je epux accessoirement récuperer cette valeur dans une variable.

var monDernierElement = Couleurs.pop();
console.log(monDernierElement);
console.log(Couleurs);

// -- La même chose est possible avec le premier élément en utilisant la fonction shift();

// -- NB : La fonction splice() vous permet de faire sortir un ou plusieur éléments de votre tableau.

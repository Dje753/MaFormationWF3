/*
     I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

    II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 


*/
/* je créer un tableau 1er trimestre


var trimestre1 = [

    prenoms = ["Hugo", "Karim", "Rudy", "Jérémie", "Clara"],

    nom = ["LIEGARD", "IHADADENE", "HERICOURT", "RIDAO", "MORGANE"],

    matieres = ["francais", "math", "physique", "anglais"]


];

document.write()


// int premiersNombres[][] = { {0,2,4,6,8},{1,3,5,7,9} };


int trimestre1[][][] = { {Hugo, Karim, Rudy, Jérémie, Clara},{LIEGARD, IHADADENE, HERICOURT, RIDAO, MORGANE},{francais, math, physique, anglais}}
*/


        // -- CORRECTION



// -- Petite fonction de raccourci (lesflemards.js)

function w(t) {
    document.write(t);
}

function l(e) {
    console.log(e);
}

// -- 1. Création de notre tableau 3D en Js !

var PremierTrimestre = [
    {
        "nom"       :   "MANAS",
        "prenom"    :   "Tanguy",
        "moyenne"   :   {
                            "francais"  : 6,
                            "math"      : 15,
                            "physique"  : 9,
                            "anglais"   : 15.5
                        }
    },
      {
        "nom"       :   "LIEGARD",
        "prenom"    :   "Hugo",
        "moyenne"   :   {
                            "francais"  : 4,
                            "math"      : 8,
                            "physique"  : 18
                        }
    },
      {
        "nom"       :   "IHADADENE",
        "prenom"    :   "Karim",
        "moyenne"   :   {
                            "francais"  : 8,
                            "math"      : 18.5,
                            "physique"  : 18
                        }
    },
      {
        "nom"       :   "FAT",
        "prenom"    :   "Teuch",
        "moyenne"   :   {
                            "francais"  : 12,
                            "math"      : 8,
                            "physique"  : 18
                        }
    },
  
];

l(PremierTrimestre);
w('<ol>');
// -- Je souhaite afficher la liste de mes étudiants.
for(i = 0 ; i < PremierTrimestre.length ; i++){

    // -- on récupére l'objet Etudiant de l'itération
    let Etudiant = PremierTrimestre[i];
    let matieres = PremierTrimestre[2]
    // -- Aperçu dans la console
    l(Etudiant);

    // -- Je defini NombreDeMatiere et la SommeDesNotes à 0;
    var NombreDeMatiere = 0, SommeDesNotes = 0;

    // -- Afficher le Prénom et le Nom de l'atudiant
    w('<li>');
        w(Etudiant.prenom + " " + PremierTrimestre[i].nom);
        // -- Afficher la moyenne de l'etudiant aux différente matiéres.      
        w('<ul>');
            for(let matiere in Etudiant.moyenne){

                // l(matiere)
                // l(Etudiant.moyenne[matiere])
                NombreDeMatiere++;
                SommeDesNotes += Etudiant.moyenne[matiere];

            w('<li>');
                 w(matiere + " : " + Etudiant.moyenne[matiere]);
            w('</li>'); 
             } // -- Fin de la boucle Matiére

              w('<li>');
                 w("<strong>Moyenne Générale :</strong> " + (Math.round(SommeDesNotes / NombreDeMatiere)));
            w('</li>'); 

         w('</ul>');
    w('</li>');
}
w('</ol>');
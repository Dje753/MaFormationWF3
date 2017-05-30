/* -----------------------------------------------------------------------
                            LES EVENEMENTS
--------------------------------------------------------------------------

Les événements, vont me permettre de déclencher 
une fonction, c'est à dire : une série d'instruction,
suite à une action de mon utilisateur. 

Objectif: Etre en mesure de capturer ces événements, 
afin d'executer une fonction. 

Les evenements : MOUSE (souris) 

    click       : au clic sur un élément,
    mouseenter  : la souris passe au dessu de la zone qu'occupe un élément
    mouseleave  : la souris sort de cette zone

Les événement : KEYBORD (clavier)

    keydown     : une touche du clavier est enfoncée
    keyup       : une touche à été relaché

Les événement : WINDOW (fenêtre)

    scroll : defilement de la fenêtre
    resize : redimensionement de la fenêtre

Les événement : FORM (formulaire)

    change : pour les éléments <input>, <select> et <textarea>
    submit : à l'envoie (soumission) d'un formulaire 

Les événementss : DOCUMENT

    DOMContentLoaded : Executé lorsque le document HTML est complétement chargé,
    sans attendre le CSS et les images. 


-------------------------------------------------------------------------
                     LES ECOUTEURS D'EVENEMENTS
-------------------------------------------------------------------------

Pour attacher un évenement à un élément , ou autrement dit,
pour declarer un écouteur d'événement qui se chargera de lancer
une action, c'est à dire une fonction pour un événement donné, 
je vais utiliser la syntaxe suivante.

-----------------------------------------------------------------------------*/

var p = document.getElementById("MonParagraphe");
console.log(p);

// -- Je souhaite que mon paragraphe soit rouge au clic de la souris

    // -- 1 : Je défini une fonction chargée d'éxecuter cette action.
    function changeColorToRed(){
        p.style.color = "red";
    }

    // -- 2 : Je déclare un écouteur qui se chargera d'appeler la fonction
    // au déclenchemant de l'événement.
    p.addEventListener("click", changeColorToRed);


/*
    EXERCICE PRATIQUE

A l'aide de javascript, crer un champ "input" type text avec un ID unique. 
Affichez ensuite dans une alert, la saisie de l'utilisateur.

*/
 // -- creation input 
var input = document.createElement("input");


// -- on lui donne un attribut
input.setAttribute("type", "text");
input.setAttribute('placeholder', 'Saisissez un contenu ...');

// -- on lui donne in ID
input.id = "magie";

// -- afficher l'élément à la page
document.body.appendChild(input);


// -- création d'un ecouteur
input.addEventListener("change", voirLaSaisieDeMonInput);

function voirLaSaisieDeMonInput(){
    alert(input.value);
}

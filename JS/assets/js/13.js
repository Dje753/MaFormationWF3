/*
 LA MANIPULATION DES CONTENUS
*/


function l(e) {
    console.log(e);
}

// -- Je souhaite récupérer le lien, comment faire ? 
var google = document.getElementById("google");
l(google);

// Maintenant, je souhaite acceder aux informations de ce liens, par exemple: 
    // -- A : lien vers lequel ponite la balise
    l("Le lien vers lequel pointe la balise :")
    l(google.href);

    // -- B : L'ID de la balise
    l("L'ID de la balise :")
    l(google.id);

    // -- C : La classe de la balise
    l("La classe de la balise :")
    l(google.className);

    // -- Maintenant , je souhaite modifier le contenu de mon lien
    // -- comme une variable classique, je vais simplement venir affecter une nouvelle valeur. 
    google.textContent = "Mon Lien vers Google !";

    /*----------------------------------  
        AJOUTER UN ELEMENT DANS MA PAGE
    ------------------------------------*/

    // -- Nous allons utiliser

    // -- 1 : La fonction document.createElement() va permettre de generer un nouvel élément dans le DOM que je pourrais par la suite modifier avec les méthodes que nous venons de voir

    // PS : Ce nouvel élément est placé en mémoire.

    // -- Définition de mon élément
    var span = document.createElement("span");

    // -- Si je souhaite lui donner un ID
    span.id = "MonSpan";

    // -- Si je souhaiote lui attribuer du contenu...
    span.textContent = "Mon Beau text en JS";

    // -- 2 : La fonction appenchild() va me permettre de rajouter un enfant à un élément du DOM.
    google.appendChild(span);

/*-------------------------------------------

    EXERCICE

En partant du traavail déja realisé sur la page. 
Créer directment dans la page une balise <h1></h1> ayant comme contenu : "Titre de mon Article".

Dasn cette balise, vous créerez un lien vers une url de votre choix. 

Bonus: ce lien sera de couleur rouge et non souligné.
--------------------------------------------------*/

// -- Création de la balise h1
var h1 = document.createElement("h1");

// -- Création de la balise a 
var a = document.createElement("a");

//  -- Je vais donner mon titre à mon lien
a.textContent = "Titre de mon Article !";

// -- Je veux donner un lien à mon lien: 
a.href = "#";

// -- appendChild()

    // - Je met mon lien (a) dans mon h1
    h1.appendChild(a);

    // -- Je met mon h1 dasn ma page, dans mon body
    document.body.appendChild(h1);

// -- Correction du bonus

    // -- Je veux que mon lien soit de couleur rouge

    a.style.color = "red";

    // -- Je veux que mon lien ne soit pas souligné

    a.style.textDecoration = "none";
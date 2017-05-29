/*----------------------------------
            LE DOM

Le DOM, est une interface de developpement
en JS pout HTML. Grâce au DOM, je vais être 
en mesure d'acceder / modifier mon HTML.

L'objet "document" : c'est le point d'entrée vers mon contenu HTML !

Chaque page chargée dans mon navigateur a un objet "document"


------------------------------------*/

// -- Comment puis-je faire pour récuperer les différentes informations de ma page HTML ? 


/*
        document.getElementById

  document.getElementById() : C'est  une 
  fonction qui va permettre de récuperer un
  élément HTML à partir de son identifiant
  unique : ID.
*/

var bonojour = document.getElementById("bonjour");
console.log(bonjour);

/*
        document.getElementsByClasseName

  document.getElementsByClasseName() : C'est  une 
  fonction qui va permettre de récuperer un ou plusieur
  élément (une liste) HTML à partir de leur classe.
*/

var contenu = document.getElementsByClassName("contenu");
console.log(contenu)

// -- Me renvoi : Un tableau JS avec mes élements HTML , ou encore autrement dit, une Collection d'élements HTML.

/*
        document.getElementsByTagName

  document.getElementsByTagName() : C'est  une 
  fonction qui va permettre de récuperer un ou plusieur
  élément (une liste) HTML à partir de leur * nom de balise*.
*/

var span = document.getElementsByTagName("span");
console.log(span);

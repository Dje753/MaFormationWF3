/*------------------------------------

    DISPONIBILITE DU DOM

-------------------------------------*/

/* 
    A partir du moment ou mon DOM, c'est a dire l'ensemvble de l'arborescence de ma page 
    est completement chargé, je peux commencer à utliser jQuery. 

    Je vais mettre l'ensemble de mon code dans une fonction, cette fontion sera appelé
    AUTOMATIQUMENT par jQuery lorsque le DOM sera entiérement défini.

    3 façons de faire :
*/

    // -- 1er possibilité

jQuery(document).ready(function(){
    // -- Ici, le DOM est entiérment chargé, je peux proceder à mon code en JS.
});

    // -- 2éme possibilité

$(document).ready(function(){
     // -- Ici, le DOM est entiérment chargé, je peux proceder à mon code en JS.
});

    // -- 3éme possibilité, sans le (document).ready()
$(function(){
    // -- Ici, le DOM est entiérment chargé, je peux proceder à mon code en JS.
    alert('Jai 20 ans!');
});


    // -- en JS :
    document.getElementById('TexteEnJQuery').textContent = "Mon texte en JS";

    // -- En JQuery ;
   $('#TexteEnJQuery').html("Mon texte en JQ !");

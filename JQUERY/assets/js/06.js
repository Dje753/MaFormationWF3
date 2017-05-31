/* è---------------------------------------------------

        LES SELECTEURS D'ENFANTS

è-----------------------------------------------------*/

//  -- Initialisation de jQuery
$(function(){
    // -- Ici commence mon code JQuery
    // -- Les Flemards.js
    function l(e) {
        console.log(e);
    }
    // -- Je souhaite selectionner toutes mes divs
    l($('div'))

    // -- Je souhaite selectionner mon header
    l($('header'))

    // -- Je souhaite tous les éléments direct(enfants) qui sont dans "header"
    l($('header').children())

    // -- Je souhaite parmi mes descendant directs, uniquements les éléments "ul"
    l($('header').children('ul'))

    // -- Je souhaite recuperer tous les éléments "li" de mon "ul"
    l($('header').children('ul').find('li'))

    // --Je souhaite récyuperer uniquement le 2éme éléments de mes "li"
    l($('header').find('li').eq(1))

    // -- Je souhaite connaitre le voison immediat de mon "header" ?
    l($('header').next())
    l($('header').next().next()) // -- Le voisin du voisin ...
     l($('header').prev()) // -- Le voisin d'avant

     // -- Les parents
     l($('header').parent())

});



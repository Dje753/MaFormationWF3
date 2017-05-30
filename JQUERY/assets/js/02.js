/*------------------------------

    LES SELECTEURS JQUERY
    --------------------------*/


// -- Format : $('selecteur')
// -- En JQuery, tous les selecteurs CSS sont disponibles...

// -- DOM READY !
$(function(){

    // LesFlemards.js
    function l(e){
        console.log(e);
    }


    // --  Sélectionner les balises SPAN :

        // Version en Javascript :
        l('SPAN en JS :')
        l(document.getElementsByTagName('span'))
    
        // Version JQuery
        l('SPAN en JQ :')
        l($("span"))

    // -- Sélectionner Mon Menu

        // -- Version JS :
        l("ID via JS :");
        l(document.getElementById("menu"));

        // -- Version JQuery
        l('ID via JQuery');
        l($("#menu"));

        // -- Sélectionner un Attribut
        l('Par attribuit :')
        l($("[href='http://www.google.fr']"))

});
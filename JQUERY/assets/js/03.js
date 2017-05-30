/*------------------------------------
    Le Chainage de methodes Jquery
------------------------------------*/

$(function(){

    // -- Je souhaite cacher toutes les div de ma page html

    $('div').hide('slow', function(){

    // -- Une fois que la methode hide( est terminée, mon alerte peux s'éxecuter
    alert('Fin du Hide');

    // -- NOTA BENE : La fonction s'éxecitera pour l'ensemble des éléments du selecteurs.

    // -- CSS
    $('div').css("background", "yellow");
    $('div').css("color", "red");

    // -- Je fais réapparaitre mes DIVs
    $('div').show();

    });// -- Fin Fonction Anonyme

    // -- En utilisant le chainage de méthode, vous pouvez faire s'enchainer plusieur
    // fonction les unes aprés les autres...

    $('p').hide(1000).css('color','blue').css('font-size','20px').delay(2000).show(500);

    // -- Mais , c'est ENCORE trop long !!!!!!!!!!!!!!!!!!!!!!!!!!!!
    $('p').hide().css({'color':'blue','font-size':'20px'}).delay(2000).show(500);

});

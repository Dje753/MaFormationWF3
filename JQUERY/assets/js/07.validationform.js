// -- DECLARATION DE FONCTION
// -- https://paulund.co.uk/regular-expression-to-validate-email-address
function validateEmail(email){
	var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	var valid = emailReg.test(email);

	if(!valid) {
        return false;
    } else {
    	return true;
    }
}

// -- Initailsation de jQuery
$(function() {

    // -- Ecouter à quel moment est soumis notre formulaire
    // -- A la soumission de mon formulaire, je vais executer une fonction anonyme.

    $('#contact').on('submit', function(event) {
        // -- event : correspond ici à notre événement "submit"

        // -- Arreter la redirection html 5
        event.preventDefault();

        // -- Suppression des différentes erreurs
        // -- Je cibles tous les éléments qui contiennet la classe "has-error", puis je supprime ".has-error" pour cees éléments.

        // -- Je supprime la classe has-error en ciblant les éléments qui ont la classe "has-error", je supprime la classe sur les éléement que je cible
        $('#contact .has-error').removeClass('has-error');
        $('#contact .text-danger').remove();

        // -- Déclaration des variables (champs à vérifier)

        var nom     = $('#nom');
        var prenom  = $('#prenom');
        var email   = $('#email');
        var tel     = $('#tel');

        // -- Je pass à la vérification de chaque champs...

            // -- 1. vérification du nom
            if(nom.val().length == 0) { 
                // -- Si le champs 'nom' est vide, alors j'ajoute à son parents, la classe has-error
                nom.parent().addClass('has-error');

                // -- Je rajoute une indication texte
                $("<p class='text-danger'>N'oubliez pas de saisir votre nom</p>").appendTo(nom.parent());

            }
              // -- 2. vérification du prenom
            if(prenom.val().length == 0) { 
                // -- Si le champs 'prenom' est vide, alors j'ajoute à son parents, la classe has-error
                prenom.parent().addClass('has-error');
                $("<p class='text-danger'>Teubé ta oubliez de saisir ton Prénom</p>").appendTo(prenom.parent());

            }
                  // -- 3. vérification du email
            if(!validateEmail(email.val())){
                email.parent().addClass('has-error');
                  $("<p class='text-danger'>Teubé ta oubliez de saisir ton Email BATARD!!!</p>").appendTo(email.parent());
            }
                  // -- 4. vérification du tel
            if(tel.val().length == 0 || $.isNumeric(tel.val())  == false) { 
                // -- Si le champs 'tel' est vide, alors j'ajoute à son parents, la classe has-error
                tel.parent().addClass('has-error');
                $("<p class='text-danger'>Teubé ta oubliez de saisir ton téléphone</p>").appendTo(tel.parent());
            }

            if($(this).find('.has-error').length == 0) {

                $(this).replaceWith('<div class="alert alert-success">Votre demande à bien été envoyée ! Nous vous répondrons dans les meilleurs délais.</div>');

            } else {
                $(this).prepend('<div class="alert alert-danger">Nous n\'avons pas été en mesure de valider votre demande. Vérifiez vos informations.</div>')

            }


    });
});
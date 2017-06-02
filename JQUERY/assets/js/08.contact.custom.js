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

 

// -- Initialisation de jquery (DOM READY)
$(function(){

    // -- Pour ecouter lorsque l'on valide le formulaire
     $('#contact').on('submit', function(event){

     // -- Arreter la redirection html 5
        event.preventDefault();

  

    // -- Declaration de variables
    var contact      = $('#contact');
    var nom          = $('#nom');
    var prenom       = $('#prenom');
    var email        = $('#email');
    var tel          = $('#tel');
    var LesContacts  = $('#LesContacts');


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
            if(validateEmail(email.val())){
                email.parent().addClass('has-error');
                  $("<p class='text-danger'>Teubé ta oubliez de saisir ton Email BATARD!!!!!!!!!!!!!!!!!!</p>").appendTo(email.parent());
            }
                  // -- 4. vérification du tel
            if(tel.val().length == 0 || $.isNumeric(tel.val())  == false) { 
                // -- Si le champs 'tel' est vide, alors j'ajoute à son parents, la classe has-error
                tel.parent().addClass('has-error');
                $("<p class='text-danger'>Teubé ta oubliez de saisir ton téléphone</p>").appendTo(tel.parent());
            }

            if($(this).find('.has-error').length == 0) {
                ajouterContact();
                 $('.alert alert-success alert-contact').text(); // renvoie le texte contenu à l'intérieur du paragraphe
                reinitialisationDuFormulaire();
                $('.aucuncontact').remove();
               

               // $(this).replaceWith('<div class="alert alert-success">Votre demande à bien été envoyée ! Nous vous répondrons dans les meilleurs délais.</div>');

            } else {
                $(this).prepend('<div class="alert alert-danger">Nous n\'avons pas été en mesure de valider votre demande. Vérifiez vos informations.</div>')

            } 



/*------------------DECLARATION DES FONCTIONS -----------------*/

    // -- Fonction ajouterContact(contact): Ajouter un contact dans le tableau de Contacts, 
    // -- mettre à jour le tableau HTML, réinitialiser le formulaire et afficher une notification.
    function ajouterContact(Contact) {
        
        $('tbody').append('<tr><td>' + nom.val() + '</td><td>' + prenom.val() + '</td><td>' + email.val() + '</td><td>' + tel.val() +'</td></tr>');

    };

    // -- Fonction RéinitialisationDuFormulaire(): Aprés l'ajout d'un contact, on remet le formulaire à 0
    function reinitialisationDuFormulaire() {
        $("#reset").click(function() {
                $("#form")[0].reset();
    });
    };
    // Affichage d'une notification
    function afficheUneNotification() {
          $('.alert alert-success alert-contact').text(); // renvoie le texte contenu à l'intérieur du paragraphe
    }


    // -- Vérification de la présence d'un contact dans contacts
    function estCeQunContactEstPresent(contact) {}

    // -- Vérification de la validité d'un Email
    // -- https://paulund.co.uk/regular-expression-to-validate-email-address
    function validateEmail(email) {}

    /*-------------- Traitement de mon Formulaire ------------------*/

    // -- Detection de la soumission de mon formulaire
    
     });
}); // FIN DE JQUERY READY !
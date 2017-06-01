
// -- Initialisation de jQuery (DOM READY)
$(function() {

    // -- Déclaration de Variables
    var CollectionDeContacts = [];

    /* --------------------------------------------------------------
                        DECLARATION DES FONCTIONS
    -------------------------------------------------------------- */

    // -- Fonction ajouterContact(Contact) : Ajouter un Contact dans le tableau de Contacts, mettre à jour le tableau HTML, réinitialiser le formulaire et afficher une notification.
    function ajouterContact(UnContact) {

            // -- Ajout de "UnContact" dans le tableau "CollectionDeContacts"
            CollectionDeContacts.push(UnContact);
            console.log

            // --on cache la phrase aucun contact
            $('.aucuncontact').hide();

            // -- Mide à jour du HTML
            $('#LesContacts').find('tbody').append('<tr><td>' + UnContact.nom + '</td><td>' + UnContact.prenom + '</td><td>' + UnContact.email + '</td><td>' + UnContact.tel +'</td></tr>');

            // -- Rénitialisation du formulaire
            reinitialisationDuFormulaire();

            // -- affiche une notif succes
            afficheUneNotification();
    }

    // -- Fonction RéinitialisationDuFormulaire() : Après l'ajout d'un contact, on remet le formulaire à 0 !
    function reinitialisationDuFormulaire() {

            // -- En JAVASCRIPT:
           // document.getElementById('contact').reset();

            // -- En JQuery
            $("#contact").get(0).reset();

            // -- Autre méthode (alexandre)
           // 
            $('#contact .form-control').val("");


    }
    // -- Affichage d'une Notification
    function afficheUneNotification() {
        $('.alert-contact').fadeIn().delay(3000).fadeOut();

    }

    // -- Vérification de la présence d'un Contact dans Contacts
    function estCeQunContactEstPresent(UnContact) {

        // -- Booleen qui indique la présence ou pas d'un contact
        var estPresent = false;

        // -- On parcourt le tableau à la recherche d'une correspondance
        for(var i = 0 ; i < CollectionDeContacts.length ; i++ ) {

            // -- Vérification pour chaque contact du tableau, s'il y a une correspondance avec mon objet Contact.
            if(UnContact.email === CollectionDeContacts[i].email) {
                
                // -- Si une correcpondance est trouvé 'estPresent'passe a vrai (true)
                estPresent = true;

                // -- On arrete la boucle, plus besoin de poursuivre
                break;
            }
        }
        // on retouren estPresent
        return estPresent;
    }

    // -- Vérification de la validité d'un Email
   // : https://paulund.co.uk/regular-expression-to-validate-email-address
  
        function validateEmail(email){
            var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            var valid = emailReg.test(email);

            if(!valid) {
                return false;
            } else {
                return true;
            }
         }
    

    /* --------------------------------------------------------------
                    TRAITEMENT DE MON FORMULAIRE
    -------------------------------------------------------------- */

   // -- Détection de la soumission de mon Formulaire
   $('#contact').on('submit', function(e) {
       // -- Voir le contenu de l'événement
        console.log(e);

        // -- Stopper la redirection de la page
        e.preventDefault();

        // -- Récupération des champs à vérifier
        var nom, prenom, email, tel;
        nom     =$('#nom');
        prenom  =$('#prenom');
        email   =$('#email');
        tel     =$('#tel');

        // -- Vérification des info
        var mesInformationsSontValides = true;

        // -- Vérification du nom
        if(nom.val().length == 0) {
            mesInformationsSontValides = false;
        }

         // -- Vérification du Prenom
        if(prenom.val().length == 0) {
            mesInformationsSontValides = false;
        }

         // -- Vérification du tel
        if(tel.val().length == 0) {
            mesInformationsSontValides = false;
        }

         // -- Vérification du mail
        if(!validateEmail(email.val())) {
            mesInformationsSontValides = false;
        }

        if(mesInformationsSontValides) {
            // -- Tous est correct, Préparation du Contact
            var Contact ={
                'nom'   : nom.val(),
                'prenom': prenom.val(),
                'email' : email.val(),
                'tel'   : tel.val()
            };
            // -- Vérification avec EstCeQunContactEstPresent
            if(!estCeQunContactEstPresent(Contact)){

                // ajout du contact
                ajouterContact(Contact);
            } else {
                alert('ATTENTION\nce contact est deja present');
                reinitialisationDuFormulaire();

            }

        } else {
            // -- Les Informations ne sont pas valides
            alert('ATTENTION\nVeuillez bien remplir tous les champs.');
        }

   });

}); // -- Fin de jQuery READY !


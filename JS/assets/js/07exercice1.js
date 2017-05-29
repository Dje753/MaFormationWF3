/* -- realiser une fonction pour permettre a l'interbnaute de saisir son prenom et de lui renvoyer "Bonjour XXXX, quel age a tu ? "
ensuite lui permettre de saisir son age et de lui renvoyer son année de naissance et afficher le recapitulatif dans la page html "Bonjour XXXX, tu as XX ! "
--*/


// 1 -- Initialisation des variables
var AnneeActuelle = new Date();

// 2 -- Création de ma fonction
function hello(){

    // 2a. -- Je demande à l'utilisateur son prénom
    let prenom = prompt("Hell ! What is your name ?","<Saisir votre prénom");

    // 2b. -- Je lui demande son age
    let age = parseInt(prompt("Hello " + prenom + " ! How old are you ?","<Saisir votre age>"));

    // 2c. -- J'affiche une alert avec son année de naissance !
    alert("AMAZING ! So you were born in " + (AnneeActuelle.getFullYear() -age) + " !");

    // 2d. -- Affichage dans ma page HTML
    document.write("Hello " + prenom + " it's AMAZING ! You're " + age + " years old !");

}

// 3 -- Execution de ma fonction 
hello();
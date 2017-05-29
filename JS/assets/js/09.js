/* ----------------------------------
        LES BOUCLES

------------------------------------*/

// -- La Boucle FOR

// -- Pour i = 1 ; tant que i <= (strictement inférieur ou égale) 10 ; alors, j'incrémente
for(var i = 1 ; i <= 10 ; i++) {
    document.write("<p>Instruction executée : <strong>" + i + "</strong></p>");
}

document.write("<hr>");

// -- La Boucle WHILE : Tant que

var j = 1;
while(j <= 10) {
    document.write("<p>Instruction executée : <strong>" + j + "</strong></p>");
    j++;
}


/* excercie */
var prenoms = ['Hugo', 'Jean', 'Mathieu', 'Luc', 'Pierre', 'Marc'];

for (var i = 0 ; i < 6 ; i++){
    document.write("<p>Quelques Apôtres : <strong>" + [i] + "</strong></p>");

}



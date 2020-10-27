 

//  Déclaration variable.

var choixutilisateur; // Choix utilisateur variable après que l'utilisateur est choisi son signe

var led_1_joueur = false;
var led_2_joueur = false;  // variable led (joueur)
var led_3_joueur = false;

var led_1_ordinateur = false;
var led_2_ordinateur = false; // variable led (ordinateur)
var led_3_ordinateur = false;

var start = false;  //variable "start" démarrage du jeu 


var compteur = 0; // variable type nombre pour définir mon compteur.

var compteurMatch = 0; // variable type nombre pour définir le nombre de partie que l'utilisateur gagne

/* Fonction jouer " après avoir appuyer sur "Start"  */

function jouer() {

    var nom_utilisateur = prompt("Quel est ton nom?");
    document.getElementById("utilisateur").innerText = nom_utilisateur;
    start = true; /* la fonction start devient vrai, quand l'uilisateur clik sur le BOUTON  */
}

/* Fonction choix de l'utilisateur */

function signeutilisateur1() {

    if (start == true) { /* Quand la fonction start est true, le joueur peut choisir ce signe  */
        document.getElementById("choixjoueur").style.backgroundImage = "url(media/rock.png)";
        document.getElementById("choixjoueur").style.backgroundSize = "cover";
        signeordinateur();
        choixutilisateur = 1;

        setTimeout(lancementjeu, 1000);
    }
}
function signeutilisateur2() {
    if (start == true) {/* Quand la fonction start est true, le joueur peut choisir ce signe  */
        document.getElementById("choixjoueur").style.backgroundImage = "url(media/paper.png)";
        document.getElementById("choixjoueur").style.backgroundSize = "cover";
        signeordinateur();
        choixutilisateur = 2;

        setTimeout(lancementjeu, 1000);
    }
}
function signeutilisateur3() {

    if (start == true) { /* Quand la fonction start est true, le joueur peut choisir ce signe  */
        document.getElementById("choixjoueur").style.backgroundImage = "url(media/scissors.png)";
        document.getElementById("choixjoueur").style.backgroundSize = "cover";
        signeordinateur();
        choixutilisateur = 3;

        setTimeout(lancementjeu, 1000);
    }
}

//  Choix ordinateur (Aléatoire)

//  Fonction Aléatoire. 

function mathRandomInt(a, b) {
    if (a > b) {
        var c = a;
        a = b;
        b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
}

function signeordinateur() {
    random = mathRandomInt(1, 3);

    if (random == 1) {
        document.getElementById("choixordinateur").style.backgroundImage = "url(media/rock.png)";
        document.getElementById("choixordinateur").style.backgroundSize = "cover";

    } else if (random == 2) {
        document.getElementById("choixordinateur").style.backgroundImage = "url(media/paper.png)";
        document.getElementById("choixordinateur").style.backgroundSize = "cover";

    } else {
        document.getElementById("choixordinateur").style.backgroundImage = "url(media/scissors.png)";
        document.getElementById("choixordinateur").style.backgroundSize = "cover";
    }
}
// Lancement jeu... 

function lancementjeu() {

    //Coté joueur

    if (choixutilisateur == 1 && random == 3 || choixutilisateur == 2 && random === 1 || (choixutilisateur == 3) && (random == 2)) {

        if (led_1_joueur == false) { /* j'ai crée des variable led = false(faux), ensuite j'ai crée une condition dans la fonction "lancementjeu"
                                  si la led du joueur 1 est (fausse), alors la led joueur 1 s'allumera */
            led_1_joueur = true;
            document.getElementById("led-green-j").style.backgroundColor = "blue";  /*** la fonction document.elementbyID transformera la premiere Led en Bleu */

            //Je souhaite incrémenter la variable "compteur" a chaque fois qu'une Led s'allume
            //J'appel la variable "compteur" dans la condition "si Led s'allume", en faisant ce calcul.
            //Pour afficher le resultat j'appel l'ID grace a la fonction "documentgetElementById(NomDelId). innerText=string(compteur), string car c'est un nombre        
            compteur = compteur + 1;
            document.getElementById("compteur").innerText = String(compteur);
        }
        else if (led_2_joueur == false) { /* si la led du joueur 2 est éteint alors la led j 2 s'allumera... */
            led_2_joueur = true;
            
            document.getElementById("led-yellow-j").style.backgroundColor = "blue";
            compteur = compteur + 1;
            document.getElementById("compteur").innerText = String(compteur);
 
        }
        else {
            /* Si la led joueur 3 est eteint elle s'allumera aussi */
            led_3_joueur = true;
            document.getElementById("led-red-j").style.backgroundColor = "blue";


            //Affichage de " You Win " quand l'utilisateur gagne la partie. 
            document.getElementById("victoire").innerText = "You Win";


            // compteur = compteur + 1;
           // document.getElementById("compteur").innerText = String(compteur);



            //Compteur de match gagnant coté joueur 
            compteurMatch = compteurMatch + 1;
            document.getElementById("compteurmatch").innerText = String(compteurMatch);

            setTimeout(() => {
                FinDuGame();
            }, 2000);
        }
    }

    //Egalité 
     else if (choixutilisateur == random) { }

    //Coté Ordinateur
    else {

        if (led_1_ordinateur == false) {
            led_1_ordinateur = true;
            document.getElementById("led-green-ia").style.backgroundColor = "blue";
        }
        else if (led_2_ordinateur == false) {
            led_2_ordinateur = true;

            document.getElementById("led-yellow-ia").style.backgroundColor = "blue";
        }
        else {
            led_3_ordinateur = true;
            document.getElementById("led-red-ia").style.backgroundColor = "blue";

            //Affichage de " You LOOSE " quand l'ordinateur gagne la partie. 
            document.getElementById("victoire").innerText = "You Loose";

            // FinDuGame();

            setTimeout(() => {
                FinDuGame();
            }, 2000);
        }
    }
}
//Fin du Game (reset les éléments après 3 secondes )

function FinDuGame() {
    if ((led_3_joueur == true) || (led_3_ordinateur == true)) {

         start = true;

         compteur=compteur=0;

        /* reset color led*/

        // document.getElementById("led-green-j").style.backgroundColor = "#ABFF00";
        // document.getElementById("led-green-ia").style.backgroundColor = "#ABFF00";

        // document.getElementById("led-yellow-j").style.backgroundColor = "#FF0";
        // document.getElementById("led-yellow-ia").style.backgroundColor = "#FF0";
        // document.getElementById("led-red-j").style.backgroundColor = "#F00";
        // document.getElementById("led-red-ia").style.backgroundColor = "#F00";

        //reset led

        //ia
        document.getElementById("led-green-ia").style.backgroundColor = "";
        document.getElementById("led-yellow-ia").style.backgroundColor = "";
        document.getElementById("led-red-ia").style.backgroundColor = "";

        //J
        document.getElementById("led-green-j").style.backgroundColor = "";
        document.getElementById("led-yellow-j").style.backgroundColor = "";
        document.getElementById("led-red-j").style.backgroundColor = "";

        //compteur revient a zéro
        compteur = compteur=0;       

        /** reset image  **/

        document.getElementById("choixjoueur").style.backgroundImage = "";
        document.getElementById("choixordinateur").style.backgroundImage = "";
        //document.getElementById("utilisateur").innerText = "Joueur";

        //Supprime l'affichage "you win/loose quand l'utilisateur ou l'ordinateur gagne". 
        document.getElementById("victoire").innerText = "";

        // Remet le compteur a "0" quand l'utilisateur ou l'ordinateur gagne". 
        document.getElementById("compteur").innerText=String (compteur = 0);     
    }
}




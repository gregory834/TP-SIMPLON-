
//Création d'objet litteral contenant des propriétés

let gregory = {

    //nom, age et mail sont des propriétés de l'objet "Grégory"

    nom : ['Grégory', 'ALAVIN'],    /* La partie « nom » de chaque membre suit les mêmes règles que le nommage d’une variable. 
                                       La partie valeur d’un membre peut être n’importe quel type de valeur : une chaine de caractère,
                                       un nombre, une fonction, un tableau ou même un autre objet littéral.*/ 
    age : 30,
    mail : 'alavingregory552@gmail.com',


//Bonjour est une méthode de l'objet Grégory

bonjour: function () {
    alert("Bonjour, je suis" + this.nom[0] +", j'ai " + this.age + " ans");
    
}
};

/*Pour accéder aux propriétés et aux méthodes d’un objet, on utilise le caractère point .
 qu’on appelle également un accesseur. On va ici commencer par préciser le nom de l’objet 
 puis l’accesseur puis enfin le membre auquel on souhaite accéder.*/

 /* On accède aux propriétés "nom" et "age" de "grégory" et on affiche leur valeur
 
 * dans nos deux paragraphes p id='p1' et p id='p2'.
 *A noter: "document" est en fait aussi un objet, getElementById() une méthode
 *et innerHTML une propriété de l' API "DOM" */

 document.getElementById('p1').innerHTML = 'Nom : ' + gregory.nom;
 document.getElementById('p2').innerHTML = 'Age : ' + gregory.age;


 gregory.taille = 172;
 gregory.prez = function() {
     alert("Bonjour, je suis " + this.nom[0] + ",  j'ai " +this.age + " ans et je mesure " + this.taille + "cm !");};

     gregory.prez();
     
 
     /* Pour accéder à la valeur complète de la propriété nom de l’objet pierre,
        on pourra ainsi écrire pierre['nom']. Pour accéder à la valeur de mail, on écrira pierre['m
        Si on souhaite accéder à la valeur du premier élément de notre tableau nom, on pourra encore écrire pierre['nom'][0].*/

        document.getElementById("p1").innerHTML = "Nom complet : " + gregory["nom"];
        document.getElementById("p2").innerHTML = "Prénom : " + gregory["nom"][0];

        document.getElementById("p3").innerHTML = "age : " + gregory["age"];

        /*Quel intérêt d’utiliser this plutôt que directement pierre ? 
          Dans le cas de la création d’un objet littéral,
          il n’y en a strictement aucun.Cependant, vous allez voir qu’il va vite
          devenir indispensable d’utiliser this dès qu’on va commencer à créer des
          objets à la chaine de façon dynamique en utilisant par exemple un constructeur.
          Nous allons illustrer tout cela dès la prochaine leçon !*/

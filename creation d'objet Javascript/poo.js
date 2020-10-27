

/* Il n'existe pas, en JavaScript d'élément class pour créer des classes 
alors que c'est le cas dans plusieurs langages orientés objet. JavaScript quant à lui,
 utilise des fonctions spéciales appelées constructeurs pour définir les objets et leurs propriétés*/

/*function creerNouvellePersonne(nom) {
    var obj = {};
    obj.nom = nom;
    obj.salutation = function() {
      alert('Salut ! Je m\'appelle ' + this.nom + '.');
    };
    return obj;
  }*/

//------------------------------------------------------------------------------

/*Vous pouvez désormais créer une personne en appelant cette fonction,
 essayez en copiant les lignes suivantes dans la console JavaScript de votre navigateur :*/


  /*var salva = creerNouvellePersonne('Salva');
salva.nom;
salva.salutation();*/


//-----------------------------------------------------------------------------

/*function Personne(nom) {    
                              
    this.nom = nom;
    this.salutation = function() {
      alert('Bonjour ! Je m\'appelle ' + this.nom + '.');
    };
  }

    var personne1 = new Personne('Bob');
    var personne2 = new Personne('Sarah');

  
 

  /*Le constructeur est l'équivalent JavaScript d'une classe.
    Il possède l'ensemble des fonctionnalités d'une fonction, 
    cependant il ne renvoie rien et ne crée pas d'objet explicitement. 
    Il se contente de définir les propriétés et les méthodes associées.
    Il y a aussi l'utilisation du mot-clé this, ce mot-clé sert au sein d'une instance qui sera créée à y faire référence, 
    ainsi l'attribut nom sera, pour l'instance, égal au nom passé en argument de la fonction constructrice,
    la méthode salutation() retournera elle aussi le nom passé en argument de la fonction constructrice.*/


    function Personne(prenom, nom, age, genre, interets) {
      this.nom = {   prenom, nom};
      this.age = age;
      this.genre = genre;
      this.interets = interets;

      this.bio = function() {
        alert(this.nom.prenom + ' ' + this.nom.nom + ' a ' + this.age + ' ans. Il aime ' + this.interets[0] + ' et ' + this.interets[1] + '.');
      };

      this.salutation = function() {
        alert('Bonjour ! Je m\'appelle ' + this.nom.prenom + '.');
      };
    };

    var personne1 = new Personne('Bob', 'Smith', 32, 'homme', ['musique', 'ski']);

    var personne2 = new Personne 
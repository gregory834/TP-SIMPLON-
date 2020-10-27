// Créer une fonction recup(): 
// Récupérer la tache dans le input 
// La mettre dans une liste (liste_tache)

/*variable list_tache*/

var list_tache = []

/*********************** Foncion Récupe ******************/

function recup(){
    
    task="";
    
    if(document.getElementById("important").checked == true){  //Si l'élément ID "important" CheckBox est coché, il devient Vrai ! 

        task= "<li style=\"color:red\">"+document.getElementById("in").value+"</li>" //La valeur tâche sera dans le style  (liste de couleur rouge). 
        list_tache.push(task)                                                        //List_tache.push permet de RAJOUTER la valeur récupérer dans l'ID "in"         
    }
    else{           
        task= "<li>"+document.getElementById("in").value+"</li>" 
        list_tache.push(task)                                                      //List_tache.push permet de RAJOUTER la valeur récupérer dans l'ID "in"     
    }

    
    afficher()                                           //la fonction afficher est appelé dans la fonction récup        
    document.getElementById("important").checked = false  

}


// Créer une fonction afficher(liste) :
// La fonction va parcourir liste et va afficher chaque élément de la liste dans le bloc div prévu pour 

function afficher() {
    
var afficherlist = "" 
var listDéroulant = ""                                             

    for (i=0;i<=list_tache.length-1;i++) {
        
    afficherlist=afficherlist+list_tache[i]                            // Les balises permettent l'affichage sous forme de liste dans la balise prévu (list-group)

    listDéroulant=listDéroulant+"<option>"+list_tache[i]+"</option>"     
}
    document.getElementById("list-group").innerHTML=afficherlist 
    document.getElementById("listdéroulant").innerHTML=listDéroulant
    console.log(i)

}




function modifiertache() {                //Fonction modifier Tâche 


    // if(document.getElementById("important").checked == true){       //Si l'élément ID "important" CheckBox est coché, il devient Vrai ! 

    //     task= "<li style=\"color:red\">"+document.getElementById("in").value+"</li>"   //La valeur tâche sera dans le style  (liste de couleur rouge). 
    //     list_tache.push(task)                                                          //List_tache.push permet de RAJOUTER la valeur récupérer dans l'ID "in"         
    // }

    if(document.getElementById('normal').checked == true) {         // Si La checkBox ID est coché il devient vrai 
        task="<li>"+document.getElementById("in").value+"</li>"    // la valeur tâche sera afficher normalement. 
        list_tache.push(task)                
    }

    else if(document.getElementById('terminer').checked == true){         //Sinon si la checkBox terminer est coché  elle devient vrai 

        task= "<li>"+document.getElementById.strike("in").value+"</li>"   // la valeur tâche sera affiché sera barré. 
    }        
}


/************************ Bouton Ajouter ***********************************/

var bouton=document.getElementById("ajouter");                        // Variable bouton dans laquelle nous donnons la valeur de l'ID "ajouter"

bouton.addEventListener("click",recup);                               //Est un "évement lorsque le bouton "ajouter" cliké.





/************************ Bouton Modifier ***********************************/

var bouton=document.getElementById("modifier");                        // Variable bouton dans laquelle nous donnons la valeur de l'ID "modifier"

bouton.addEventListener("click",modifiertache);                        // Est un "évement lorsque le bouton "modifier" cliké.


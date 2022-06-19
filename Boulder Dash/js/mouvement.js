let nbrDeplacement=0;                                                                                           //Variable du nombre de déplacement initialisé à 0
let nbrDiamantCollecte =0;                                                                                      //Variable du nombre de diamant collecté initialisé à 0
let compteurDiamant=0;                                                                                          //Variable du compteur de diamant initialisé à 0
let Niveau=1;                                                                                                   //Variable du niveau initialisé à 0
const Grille=document.querySelector("#grille");                                                                 //Variable Grille créer pour simplifier le code



function playermort(){
            /* Si un rocher est au dessus du joueur et que le joueur descend il meurt */
    if (Grille.children[PositionX-1].children[PositionY].classList.contains('rocher')===true){                  //Verification d'un rocher placé au dessus du joueur
        if(Grille.children[PositionX+1].children[PositionY].classList.contains('rocher')===false){              //Verification d'un rocher placé en dessous du joueur
            if(Grille.children[PositionX+1].children[PositionY].classList.contains('mur')===false){             //Verification d'un mur placé en dessous du joueur
                Grille.children[PositionX+1].children[PositionY].className='rocher';                            //Remplace la terre ou le diamant par le rocher
                Grille.children[PositionX-1].children[PositionY].className='vide';                              //Remplace le rocher par du vide
                Grille.children[PositionX].children[PositionY].className='vide';                                //Remplace le personnage par du vide
                mort=true;                                                                                      //Passe la variable mort en true
                document.getElementById('music').pause();                                                       // Arrête la musique de fond
                document.getElementById('music').currentTime = 0;                                               // Remet la musique de fond à 0
                document.getElementById('death').play();                                                        // Joue la musique de mort
                document.getElementById('recommencer').addEventListener('click', function() {
                    if (mort === true) {
                        document.getElementById('death').pause();                                               // Arrête la musique de mort
                        document.getElementById('music').play();                                                // Relance la musique de fond
                    }
                }, false);
                document.getElementById('acceuil').addEventListener('click', function() {
                    if (mort === true) {
                        document.getElementById('death').pause();                                               // Arrête la musique de mort
                        document.getElementById('music').play();                                                // Relance la musique de fond
                    }
                }, false);
                                                                                                      
            }
        }
    }
}

function haut(){
                                /* Déplacement du joueur vers le haut */
    if (Grille.children[0].children[PositionY].classList.contains('player')===false){                           //Verification du personnage placé a la limite supérieur
        if (Grille.children[PositionX-1].children[PositionY].classList.contains('rocher')===false){             //Verification d'un rocher placé au dessus du joueur
            if (Grille.children[PositionX-1].children[PositionY].classList.contains('mur')===false){            //Verification d'un mur placé au dessus du joueur
                Grille.children[PositionX-1].children[PositionY].className="player";                            //Remplace la terre ou le diamant par le joueur
                Grille.children[PositionX].children[PositionY].className="vide";                                //Remplace le joueur par du vide
                PositionX-=1;                                                                                   
                nbrDeplacement+=1;
            }
        }
    }
}

function bas(){
                            /* Déplacement du joueur vers le bas */
    if (Grille.children[PositionX+1].children[PositionY].classList.contains('rocher')===false){                 //Verification d'un rocher placé en dessous du joueur 
        if (Grille.children[PositionX+1].children[PositionY].classList.contains('mur')===false){                //Verification d'un mur placé en dessous du joueur
            Grille.children[PositionX+1].children[PositionY].className="player";                                //Remplace la terre ou le diamant par le joueur
            Grille.children[PositionX].children[PositionY].className="vide";                                    //Remplace le joueur par du vide
            PositionX+=1;
            nbrDeplacement+=1;
        }
    }
    
}

function droite(){
                            /* Déplacement du joueur sur la droite */
    if (Grille.children[PositionX].children[PositionY+1].classList.contains('rocher')===false){                 //Verification d'un rocher placé à droite du joueur
        if (Grille.children[PositionX].children[PositionY+1].classList.contains('mur')===false){                //Verification d'un mur placé à droite du joueur
            Grille.children[PositionX].children[PositionY+1].className="player";                                //Remplace la terre ou le diamant à droite par le joueur
            Grille.children[PositionX].children[PositionY].className="vide";                                    //Remplace le joueur par du vide
            PositionY+=1;
            nbrDeplacement+=1;
        }
    }
                        /* Permettre de pousser un rocher sur la droite */
    else if (Grille.children[PositionX].children[PositionY+1].classList.contains('rocher')===true){             //Verification qu'un rocher ce trouvant à la droite du joueur
        if(Grille.children[PositionX].children[PositionY+2].classList.contains('vide')===true){                 //Verification qu'à droite du rocher ce trouve du vide
            Grille.children[PositionX].children[PositionY+2].className="rocher";                                //Remplace le vide par un rocher
            Grille.children[PositionX].children[PositionY+1].className="player";                                //Remplace le rocher par le joueur
            Grille.children[PositionX].children[PositionY].className="vide";                                    //Remplace le joueur par du vide
            PositionY+=1;
            nbrDeplacement+=1;
        }
    }

}

function gauche(){
                            /* Déplacement du joueur sur la gauche */
    if (Grille.children[PositionX].children[PositionY-1].classList.contains('rocher')===false){                 //Verification d'un rocher placé a la gauche du joueur            
        if (Grille.children[PositionX].children[PositionY-1].classList.contains('mur')===false){                //Verification d'un mur placé a la gauche du joueur  
            Grille.children[PositionX].children[PositionY-1].className="player";                                //Remplace la terre ou le diamant à gauche par le joueur
            Grille.children[PositionX].children[PositionY].className="vide";                                    //Remplace le joueur par du vide
            PositionY-=1;
            nbrDeplacement+=1;
        }
    }
                            /* Permettre de pousser un rocher sur la droite */
    else if (Grille.children[PositionX].children[PositionY-1].classList.contains('rocher')===true){             //Verification d'un rocher ce trouvant à la gauche du joueur
        if(Grille.children[PositionX].children[PositionY-2].classList.contains('vide')===true){                 //Verification du vide ce trouvant à la gauche du rocher
            Grille.children[PositionX].children[PositionY-2].className="rocher";                                //Remplace le vide par un rocher
            Grille.children[PositionX].children[PositionY-1].className="player";                                //Remplace le rocher par le joueur
            Grille.children[PositionX].children[PositionY].className="vide";                                    //Remplace le joueur par du vide
            PositionY-=1;
            nbrDeplacement+=1;
        }
    }    
}




document.addEventListener("keyup", function(event){
    if (nbrDiamant!=nbrDiamantCollecte){                                                                        //Impossible de bouger si la partie est gagnée
        if(mort!=true){                                                                                         //Impossible de bouger si player est mort
            switch (event.code){
                case 'ArrowUp':
                case 'KeyW' :
                    if (Grille.children[0].children[PositionY].classList.contains('player')===true){            //Impossible de bouger vers le haut si le personnage est placé a l'extremité haute
                        break;
                    }
                    haut();                                                                                     //Appel de la fonction haut()
                    break;

                case 'ArrowLeft':
                case 'KeyA' :
                    if (Grille.children[PositionX].children[0].classList.contains('player')===true){            //Impossible de bouger vers la gauche si le personnage est placé a l'extremité gauche
                        break;
                    }
                    gauche();                                                                                   //Appel de la fonction gauche()
                    break;

                case 'ArrowDown':
                case 'KeyS' : 
                if (Grille.children[15].children[PositionY].classList.contains('player')===true){               //Impossible de bouger vers le bas si le personnage est placé a l'extremité basse
                    break;
                }
                if (Grille.children[0].children[PositionY].classList.contains('player')===true){                //Verification de la position du personnage a l'extremité haute
                    if(Grille.children[PositionX+1].children[PositionY].classList.contains('rocher')===false){  //Verification d'un rocher sous le player
                        if(Grille.children[PositionX+1].children[PositionY].classList.contains('mur')===false){ //Verification d'un mur sous le player
                            Grille.children[PositionX+1].children[PositionY].className="player";                //Remplace la terre ou le diamant par le personnage
                            Grille.children[PositionX].children[PositionY].className="vide";                    //Remplace l'ancienne position du personnage par du vide
                            PositionX+=1;                                                                       //Modifie la position X du personnage
                            nbrDeplacement+=1;                                                                  //Augmente le compteur du nombre de déplacement du personnage
                            break;
                        }
                    }
                }
                playermort();                                                                                   //Appel de la fonction playermort()
                bas();                                                                                          //Appel de la fonction bas()
                break;
                    
                case 'ArrowRight':
                case 'KeyD' :
                    if (Grille.children[PositionX].children[31].classList.contains('player')===true){           //Impossible de bouger vers le bas si le personnage est placé a l'extremité droite
                        break;
                    }
                    droite();                                                                                   //Appel de la fonction droite()
                    break;      

                default:
                    break;
            }

            compteurDiamant=0;                                                                                  //Remise à 0 du compteur de diamant
            for (let i = 0; i < 32; ++i) {                                                                      //Boucle parcourant la totalité du jeu
                for (let j = 0; j < 16; ++j) {
                    nbrDiamantCollecte=nbrDiamant-compteurDiamant;                                              //Actualisation du nombre de diamant collecté
                    if(Grille.children[j].children[i].classList.contains('rocher')===true){                     //Verification d'un rocher placé au dessus d'un vide
                        if(Grille.children[j+1].children[i].classList.contains('vide')===true) {
                            Grille.children[j+1].children[i].className='rocher';                                //Remplace du vide par le rocher
                            Grille.children[j].children[i].className='vide';                                    //Remplace le rocher par du vide
                        }
                    }
                    if(Grille.children[j].children[i].classList.contains('diamant')===true){                    //Si il y a un diamant dans le jeu, on augmente le compteur de diamant
                        compteurDiamant+=1;
                    }
                    if(Grille.children[j].children[i].classList.contains('player')===true){                     //Si le joueur est dans le jeu, il n'est donc pas mort
                        mort=false;
                    }
                }
            }

            document.getElementById("collected").innerHTML = nbrDiamantCollecte;                                //Information pour l'affiche du nombre de diamant collecté
            document.getElementById("total").innerHTML = nbrDiamant;                                            //Information pour l'affiche du nombre de diamant total dans le niveau
            document.getElementById("deplacement").innerHTML = nbrDeplacement;                                  //Information pour l'affiche du nombre de déplacement effectués

            if (nbrDiamant===nbrDiamantCollecte){                                                               //Si tous les diamants on était récuperer, alors le niveau est fini
                Niveau+=1;                                                                                      //On change donc de niveau
                chargerFichierTexte();                                                                          //On charge la nouvelle carte
            }
        }
    }
});


let PositionX=0;                                                                          //Variable PositionX initialisé à 0
let PositionY=0;                                                                          //Variable PositionY initialisé à 0
let mort=true;                                                                            //Variable mort initialisé à true pour éviter les déplacements dans le menu principale
let fichier = "";                                                                         //Variable fichier initialisé vide
let nbrDiamant=0;                                                                         //Variable nbrDiamant initialisé à 0 
let tableauFinal = [];                                                                    //Variable tableauFinal initalisé vide
let tableauTemporaire=[];                                                                 //Variable tableauTemporaire initialisé à vide


document.addEventListener("DOMContentLoaded", () => {
  chargerFichierTexte();
});

function chargerFichierTexte() {
  if (Niveau==1){
    text=`MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    MVVVTTTTTTTTRVTTTTTTTTTTTTTTTTTM
    MTTPTTTTRTTTDTTTTTTTTTRTTTTVTTTM
    MTTTTVTTTDTTVTTTTTTTTTTTTDTTTTTM
    MTTTTTTTRTTTTTTTTTTVTTTRTTTTTTTM
    MTTTTTTTTTTTVTTTTTTTTTTTTTTTVTTM
    MTTTTTTTVTTTTTTTTTTTTTDTTTTTTTTM
    MTTTTTTTRTTTTTTTVTTTRTTTTTTTTTTM
    MTTTTTTTTTTTTTRTTTTTTTTTTDTTTTTM
    MTTTTTTTTVTTTTTTTTTTVTTTTTTTTTTM
    MTTTTRTTTTTTTDTTTRTTTTDTTTTTTTTM
    MTTVTTTTTTTTTTTTTTTTTTTTTTVTTTTM
    MTTTTTTTTTRTTTTTTVTTTTTTTTTTTTTM
    MTTTTTTVTTTTTDTTTTTTTRTTTTTTTTTM
    MTTTTTTTRTTTTTTVTTTTTDTTTTTVTTTM
    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM`
  }
  else if (Niveau==2){
    text=`MTTPTTTTRTTTDTTTTTTTTTRTTTTVTTTM
    TTTTTVTTTDTTVTTTTTTTTTTTTDTTTTTM
    TTTTTTTTRTTTTTTTTTTVTTTRTTTTTTTM
    TTTTTTTTTTTTVTTTTTTTTTTTTTTTVTTM
    TTTTTTTTRTTTTTTTTTTVTTTRTTTTTTTM
    TTTTTTTTTTTTVTTTTTTTTTTTTTTTVTTM
    MTTTTTTTVTTTTTTTTTTTTTDTTTTTTTTT
    MTTTTTTTRTTTTTTTVTTTRTTTTTTTTTTT
    MTTTTTTTTTTTTTRTTTTTTTTTTDTTTTTT
    MTTTTTTTTVTTTTTTTTTTVTTTTTTTTTTT
    MTTTTRTTTTTTTDTTTRTTTTDTTTTTTTTT
    MTTVTTTTTTTTTTTTTTTTTTTTTTVTTTTT
    MTTTTTTTTTRTTTTTTVTTTTTTTTTTTTTT
    MTTTTTTVTTTTTDTTTTTTTRTTTTTTTTTM
    MTTTTTTTRTTTTTTVTTTTTDTTTTTVTTTM
    MMMMMMMMMMMMMMMMMMMMMMMTTTTTMMMM`
  }
  else if (Niveau==3){
    text=`MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    MTTTTTTTTTTTRVTTTTTTTTTTTTTTTTTM
    MTTPTTTTRTTTDTTTTTTTTTRTTTTVTTTM
    MTTTDDDTTDTTVTTTTTTTTTTTTDTTTTTM
    MTTTDDDTRTTTTTTTTTTVTTTRTTTTTTTM
    MTTTDDDTTTTTVTTTTTTTTTTTTTTTVTTM
    MTTTDDDTVTTTTTTTTTTTTTDTTTTTTTTM
    MTTTDDDTRTTTTTTTVTTTRTTTTTTTTTTM
    MTTTDDDTTTTTTTRTTTTTTTTTTDTTTTTM
    MTTTTTTTTVTTTTTTTTTTVTTTTTTTTTTM
    MTTTTRTTTTTTTDTTTRTTTTDTTTTTTTTM
    MTTVTTTTTTTTTTTTTTTTTTTTTTVTTTTM
    MTTTTTTTTTRTTTTTTVTTTTTTTTTTTTTM
    MTTTTTTVTTTTTDTTTTTTTRTTTTTTTTTM
    MTTTTTTTRTTTTTTVTTTTTDTTTTTVTTTM
    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM`
  }
  else if (Niveau==4){
    text=`BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
    BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
    BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
    BBWWBBBBBBWWBBWWBBWWBBBBBWWBBWWB
    BBWWBBBBBBWWBBWWBBWWBBBBBWWBBWWB
    BBWWBBWWBBWWBBBBBBWWWWBBBWWBBWWB
    BBWWBBWWBBWWBBWWBBWWWWBBBWWBBWWB
    BBWWBBWWBBWWBBWWBBWWBBWWBWWBBWWB
    BBWWBBWWBBWWBBWWBBWWBBWWBWWBBWWB
    BBWWWWBBWWWWBBWWBBWWBBBBWWWBBWWB
    BBWWWWBBWWWWBBWWBBWWBBBBWWWBBBBB
    BBWWBBBBBBWWBBWWBBWWBBBBBWWBBWWB
    BBWWBBBBBBWWBBWWBBWWBBBBBWWBBWWB
    BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
    BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
    BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB`
  }
    fichier = text;                                                                       //Le fichier .txt  est implémenter dans la variable fichier
    compteurDiamant=0;                                                                    //Dans le cas d'un nouveau niveau le compteur de diamant doit être remis à zero
    tableauFinal=[];                                                                      //De la même manière pour le tableau final qui servira à afficher notre jeu
    nbrDiamant=0;                                                                         //De la même manière avec notre nombre de diamant total
    nbrDeplacement=0;                                                                     //De la même manière pour le nombre de déplacement du personnage
    nbrDiamantCollecte=0;                                                                 //De la même manière pour le nombre de diamant collecté
    mort=false;                                                                           //La variable mort est donc mis en false car le jeu sera affiché
    chargerTableauTemporaire();                                                           //Appel de la fonction chargerTableauTemporaire()
    win();                                                                                //Appel de la fonction win() qui change la musique
}

function chargerTableauTemporaire() {
  for (let ligne of fichier.split(/\n/)) {                                                //Boucle avec détection de retour à la ligne du fichier
    tableauTemporaire = [];                                                               //Remise à vide de la variable tableau temporaire
    for (let i = 0; i < ligne.length; i++) {                                              //Boucle permettant de charger le tableau temporaire avec nos n lignes et i colonnes
      /* Detection de la lettre dans le fichier pour la mettre dans le fichier tableau temporaire */
      if (ligne[i] === "M") {                                                              
        tableauTemporaire.push("M");
      }
      if (ligne[i] === "T") {
        tableauTemporaire.push("T");
      }
      if (ligne[i] === "R") {
        tableauTemporaire.push("R");
      }
      if (ligne[i] === "D") {
        tableauTemporaire.push("D");
        nbrDiamant+=1;                                                                      //Si un diamant est détecter dans le fichier le nombre de diamant total est augmenté de 1
      }
      if (ligne[i] === "V") {
        tableauTemporaire.push("V");
      }
      if (ligne[i] === "P") {
        tableauTemporaire.push("P");
      }
      if (ligne[i] === "W") {
        tableauTemporaire.push("W")
      }
      if (ligne[i] === "B") {
        tableauTemporaire.push("B")
      }
    }
    tableauFinal.push(tableauTemporaire);                                                   //Remplissage du tableau final à l'aide du tableau temporaire
  }
  document.getElementById("total").innerHTML = nbrDiamant;                                  //Recupération de la variable nbrDiamant pour l'affichage de la variable dans le jeu
  document.getElementById("collected").innerHTML = nbrDiamantCollecte;                      //Recupération de la variable nbrDiamantCollecte pour l'affichage de la variable dans le jeu
  document.getElementById("deplacement").innerHTML = nbrDeplacement;                        //Recupération de la variable nbrDeplacement pour l'affichage de la variable dans le jeu

  afficherTableauFinal();                                                                   //Appel de la fonction afficherTableauFinal()
}

function afficherTableauFinal() {
  const grille = document.getElementById("grille");                                         //Appel de l'élément grille qui vient du fichier index.html
  grille.innerHTML = '';
  /* Permet d'afficher des div en html selon la lettre dans le tableauFinal */
  for (let i = 0; i < tableauFinal.length; ++i) { 
    let tabHTML = '<div class="tab">';
    for (let j = 0; j < tableauFinal[i].length; ++j) {
      if (tableauFinal[i][j] === "M") {
        tabHTML += '<div class="mur"></div>';
      }
      if (tableauFinal[i][j] === "T") {
        tabHTML += '<div class="terre"></div>';
      }
      if (tableauFinal[i][j] === "R") {
        tabHTML += '<div class="rocher"></div>';
      }
      if (tableauFinal[i][j] === "D") {
        tabHTML += '<div class="diamant"></div>';
      }
      if (tableauFinal[i][j] === "V") {
        tabHTML += '<div class="vide"></div>';
      }
      if (tableauFinal[i][j] === "P") {
        tabHTML += '<div class="player"></div>';
        PositionX=i;                                                                         //Permet d'obtenir la position X du joueur
        PositionY=j;                                                                         //Permet d'obtenir la position Y du joueur
      }
      if (tableauFinal[i][j] === "B") {
        tabHTML += '<div class="black"></div>';
      }
      if (tableauFinal[i][j] === "W") {
        tabHTML += '<div class="white"></div>';
      }
      else if (tableauFinal[i] === "0") {
        tabHTML += '<div class="autre"></div>';
      }
    }
    tabHTML += '</div>';
    grille.innerHTML += tabHTML;
  } 
}

//changer de musique pour win
function win(){
  if(Niveau===4){
    document.getElementById("music").pause();
    document.getElementById("win").play();
  }
}
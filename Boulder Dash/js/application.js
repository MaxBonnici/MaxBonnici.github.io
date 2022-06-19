let d1 = document.getElementById("logo")

// fonctionnalités du bouton nouvelle partie
document.getElementById("newgame")
        .addEventListener("click", function() {
  document.getElementById("home").hidden = true;
  document.getElementById("game").hidden = false;
  document.getElementById("surprise").hidden = true;
  Niveau=1
  chargerFichierTexte();
  d1.style.display = "none"; 
}, false);

// fonctionnalités du bouton reprendre la partie
document.getElementById("reprendre")
        .addEventListener("click", function() {
  document.getElementById("home").hidden = true;
  document.getElementById("game").hidden = false;
  document.getElementById("surprise").hidden = true;
  d1.style.display = "none"; 
}, false);

// // fonctionnalités du bouton charger une partie (qui ne fonctionne pas)
// document.getElementById("charger")
//         .addEventListener("click", function() {
//   document.getElementById("home").hidden = true;
//   document.getElementById("upload").hidden = false;
//   d1.style.display = "none"; 
// }, false);

// fonctionnalités du bouton acceuil + demande de confirmation
document.getElementById("accueil")
        .addEventListener("click", function() {
          if (confirm("Voulez-vous vraiment quitter la partie ?")) {
            mort=true;
            document.getElementById("home").hidden = false;
            document.getElementById("game").hidden = true;
            document.getElementById("surprise").hidden = false;
            d1.style.display = "flex";
          }
}, false);

document.getElementById("recommencer")
        .addEventListener("click", function() {
          if (confirm("Voulez-vous vraiment quitter la partie ?")) {
            chargerFichierTexte()
          }
}, false);

//  fonctionnalités du bouton mute
var playing = !!('ontouchstart' in window) || !!('ontouchstart' in document.documentElement) || !!window.ontouchstart || (!!window.Touch && !!window.Touch.length) || !!window.onmsgesturechange || (window.DocumentTouch && window.document instanceof window.DocumentTouch),
snd = document.getElementsByTagName('audio')[0],
ctrl = document.getElementById('mute');
playing = !playing;
ctrl.title = playing? 'Mute' : 'Unmute';
if(playing)
{
  snd.autoplay = false; ctrl.src = 'img/mute.png';
}
ctrl.addEventListener('click', function(){
  if(playing){
    document.getElementById('music').pause()
  }
  if(!playing) {
    document.getElementById('music').play()
  }
  playing = !playing;
  ctrl.title = playing? 'Mute' : 'Unmute';
  ctrl.src = playing? 'img/play.png' : 'img/mute.png';
}, false);



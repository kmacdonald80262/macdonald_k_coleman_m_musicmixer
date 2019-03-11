(() => {
   //create a variable stack and grab all of the dom elements from the page
   let aud = document.querySelector('audio'),
       tracks = document.querySelectorAll('.trackholder');


  let dropZones = document.querySelectorAll('.drop-zone');

  // pieces.forEach((piece, index) => {
  // let newPuzzlePiece =`<img draggable id ="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="dancer1">`;


  // write the functions for the audio element
  function playAudio() {
  	aud.play();
  }

  function pauseAudio() {
  	aud.pause(true);
  }

  function rewindAudio() {
  	aud.currentTime = 0;
  }

//   function initDrag() {
//     drag.querySelectorAll('img').forEach(img => {
      
//       img.addEventListener("dragstart", function(e) {
//        {
//              console = console || {};
//              console.log = function(){};
// }
// function removePlayingClass(event) {


  function swapSource() {
  	let currentTrack = this.dataset.currenttrack;

  	aud.src = `audio/${currentTrack}`;
  	aud.load();
  	aud.play();
  }

  // add event handling


  tracks.forEach(track => track.addEventListener("click", swapSource));


})();
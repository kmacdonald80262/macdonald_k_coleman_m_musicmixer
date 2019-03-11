(() => {
   //create a variable stack and grab all of the dom elements from the page
   let aud = document.querySelector('audio'),
       tracks = document.querySelectorAll('.trackholder');


  // function() {
  //   var play = document.getElementById("audio");
  //   play.addEventListener("dragover", function (ev) {
  //       ev.preventDefault();
  //   }, false);
  //   play.addEventListener("drop", function (ev) {
  //       ev.preventDefault();
  //       var data = ev.dataTransfer.getData("audio/dance.mp3");


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


  function swapSource() {
  	let currentTrack = this.dataset.currenttrack;

  	aud.src = `audio/${currentTrack}`;
  	aud.load();
  	aud.play();
  }

  // add event handling


  tracks.forEach(track => track.addEventListener("click", swapSource));


})();
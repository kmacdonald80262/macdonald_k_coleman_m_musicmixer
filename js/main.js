(() => {
   //create a variable stack and grab all of the dom elements from the page
   let aud = document.querySelector('audio'),
       tracks = document.querySelectorAll('.trackholder');


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
  // play.addEventListener("click", playAudio);


  tracks.forEach(track => track.addEventListener("click", swapSource));


})();
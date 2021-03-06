// JavaScript Document
//Self Executing Anonymous Function - use this. Prevents Global Variables

(function() {
  //console.log("Yep the SEAF Fired");
  
  //Variables
  //save referene to dropzone in DOM
  let dropZone = document.querySelector(".danceDropZones");

  //save referene to dragable element in DOM
  let dragElements = document.querySelectorAll(".buttons div");
  //create variable tunes save new Audio object instance inside of it
  
  //functions
  function startDrag (e) {
    //we are capturing the event object and using it to set some information about what is being dragged
    //in this case we are saying that we are storing some text and it is the id of element being moved
    //We need to set this, this iswhy it wasn't working earlier
    //Set the drag's format and data. Use the event target's id for the data
    e.dataTransfer.setData('text', e.target.dataset.audiosrc);
    console.log("dragging");
    console.log(e.dataTransfer.getData('text'));
   }
    
  function endDrag() {
    console.log("Stopped Dragging");
   }
    
  function overDrag(e) {
    // console.log("draggedOver");
    //capture event object and prevent the default behaviour so that draggedOver event can properly be observed
    e.preventDefault();

  }
    
  function dropped(e) {
    console.log("dropped");
    //capture event object and prevent the default behaviour so that draggedOver event can properly be observed
    e.preventDefault();
    //This is where you might play a sound
    
    let targetSrc = e.dataTransfer.getData("text");
    // debugger;

    // const audioElement;

    let audioElement = document.createElement("audio");

    audioElement.src = `audio/${targetSrc}`;
    audioElement.load();
    audioElement.play();

   let currentDancer = e.target.closest("svg");

   let targetSkirt = currentDancer.querySelector("#tutu");
   // debugger;

   targetSkirt.classList.add(currentDancer.dataset.highlight); 


  }

  dragElements.forEach(icon => {
    icon.addEventListener('dragstart', startDrag);
  })
  
  

  //Event Listener for when the drag interaction starts.
  // dragElement.addEventListener('dragstart', startDrag); 
  //Event Listener for when the drag interaction finishes.
  //dragElement.addEventListener('dragend', endDrag);
  // Event Listener for when the dragged element is over the drop zone.
  dropZone.addEventListener('dragover', overDrag);    
  // Event Listener for when the dragged element dropped in the drop zone.
  dropZone.addEventListener('drop', dropped);
  
  
})();
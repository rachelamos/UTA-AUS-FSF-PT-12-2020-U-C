var eventType = document.querySelector("#event-type"); 
var keyEventsEl = document.querySelector("#key-events");

// function keydownAction(event) {
//   TODO: Complete keydown function
//   event.preventDefault();
//   console.log('event: ', event);
//   var key = event.key.toLowerCase();
//   var alphabetNumbericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
//   if (alphabetNumbericCharacters.includes(key)) {
//     elements.forEach(function(element) {
//       element.textContent += event.key;
//     });
//   }
//   document.querySelector("#status").innerHTML = "KEYDOWN Event";
// }

function keydownAction(event) {
  console.log(event);
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
  document.querySelector("#key").textContent = event.key;
  document.querySelector("#code").textContent = event.code;
}


function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);

var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

// TODO: Complete function
  if (element.matches(".box")){
    var state = element.getAttribute("data-state");

    if (state === "hidden") {
      element.dataset.state = "visible";
      element.textContent = element.dataset.number;
    } else {
        element.dataset.state = "hidden";
        element.textContent = "";
    }
  }

  // if (element.matches(".box")) {
  //   var state = element.getAttribute("data-state");

  //   if (state === "hidden") {
  //     element.dataset.state = "data-number";
  //     element.setAttribute("data-state", "data-number");
  //     element.setAttribute("data-number", element.dataset.number);
  //   } else {
  //     element.dataset.state = "hidden";
  //     element.setAttribute("data-state", element.dataset.state);
  //   } 
  // }


  
});




function myFunction() {

  var x = document.getElementById("myTopnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

function navfunction(){
  var y = document.getElementById("myMainnav");
  if (y.className === "mainnav m-row") {
    y.className += " navresponsive";
  console.log(y.className)
  } else {
    y.className = "mainnav m-row";
  }

}

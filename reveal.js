function show() {
  // Adding a drop shadow
  var truth_one = document.getElementById("truth_one");
  var truth_two = document.getElementById("truth_two");
  truth_one.style.textShadow="5px 5px 5px black";
  truth_two.style.textShadow="5px 5px 5px black";

  // Changing the background color for the lie
  var lie = document.getElementById("lie");
  lie.style.backgroundColor = "#A9A9A9";
}

document.getElementById("reveal").addEventListener("click", show);
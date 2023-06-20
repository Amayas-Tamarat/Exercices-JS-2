const search = document.getElementById("lastname");

search.addEventListener("keyup", function (e) {
  const inputText = e.target.value; // Get the text typed by user
  alert(inputText); // log the input text out
});
function add() {
  var comments = document.getElementById('comment').value;
  document.getElementById('comment').value = ""; //Limpia
  var newComment = document.createElement("div")
  var cont = document.getElementById("cont");

  var check = document.createElement("input");
  check.type = "checkbox";

  //Parrafo
  var paragraph = document.createElement("p");
  paragraph.classList.add("color");
  var nodoText = document.createTextNode(comments);
  paragraph.appendChild(nodoText);

  //iconos
  var heart = document.createElement("i");
  heart.classList.add("fa", "fa-heart", "heart");

  var trash = document.createElement("i");
  trash.classList.add("fa", "fa-trash", "trash");

  newComment.appendChild(paragraph);
  newComment.appendChild(check);
  newComment.appendChild(trash);
  newComment.appendChild(heart);
  cont.appendChild(newComment);

  check.addEventListener( "click", function(){
    paragraph.classList.toggle("strike-out");
  })

  trash.addEventListener("click", function(){
        cont.removeChild(newComment);

})

  heart.addEventListener("click", function(){
    heart.classList.toggle("red");
  })

}

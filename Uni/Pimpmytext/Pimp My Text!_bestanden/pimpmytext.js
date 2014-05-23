function pimpin() {
 var checkbox = document.getElementById("YO")
 $("yolo").style.color = "orange";
 $("yolo").style.fontSize = "24pt";
 if (checkbox.checked){
  $("yolo").style.textDecoration = "underline";
  $("yolo").style.color = "green";
  $("yolo").style.fontWeight = 'bold';
  $("yolo").style.fontSize = "50pt";
  //Two other styles, yet to choose...  
 }
}

function izzle() {
  var sentence = document.getElementById('yolo').value.split("\n");
  var text = ""
  for (var i = sentence.length - 1; i >= 0; i--) {
    document.getElementById('yolo').value =  (sentence.join("-izzle. \n") + "-izzle.");
  }
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
function  drawWhenScroll(){
  var speed = 100; // adjust speed accordingly
  var offset = speed*pageYOffset;
  if(offset < LOGOLENGTH) {
  SVGLOGO.style.strokeDashoffset = LOGOLENGTH - offset;
  console.log(pageYOffset)
}

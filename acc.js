var acc = document.getElementsByClassName("accord");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight=null;
    } else {
      panel.style.maxHeight = panel.scrollHeight+"px";
    }
  });
}
let x=[43,32,32,645,423,66,2233,3];
let text="";
for(let y in x){
    text+=x[y]+" <br> ";
  }
  console.log(text);

function openCity(eve, city) {
    var i, content,tablink;
    content=document.getElementsByClassName("content");
    for(i=0;i<content.length;i++){
        content[i].style.display="none";
    }
    tablink=document.getElementsByClassName("tablink");
    for(i=0;i<tablink.length;i++){
        tablink[i].className=tablink[i].className.replace("active","");
    }
    document.getElementById(city).style.display="block";
    eve.currentTarget.className += " active";

}




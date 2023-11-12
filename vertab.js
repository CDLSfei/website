function openC(eve,city){

    var i,content,tab;
    content=document.getElementsByClassName("content");
    for(i=0;i<content.length;i++)
    {
        content[i].style.display="none";
    }
   tab=document.getElementsByClassName("tablink");
   for(i=0;i<tab.length;i++){
    tab[i].className=tab[i].className.replace("active","");
   }
    document.getElementById(city).style.display="block";
    eve.currentTarget.className +=" active";
}
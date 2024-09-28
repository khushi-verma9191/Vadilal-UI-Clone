var img=["banner1.jpg","banner3.jpg","banner6.jpg"];
var i=0;
function slide()
{
    //alert("HII HII");
    var div= document.getElementById("slider");
    //alert(div);
    div.style.backgroundImage="url('images/"+img[i]+"')";
    i++;
    if(img.length==i)
    {
        i=0;
    }
    window.setTimeout("slide()",3000);
}


window.onscroll=function() {scrollFunction()}
function scrollFunction()
{
    if(document.body.scrollTop>20 || document.documentElement.scrollTop > 20)
    {
        document.getElementById("nav").style.top="0";
    }
    else
    {
        document.getElementById("nav").style.top="-65px";
    }
}
function myFunction(x) {
    x.classList.toggle("change");
  }
window.onload=function() {
	var name=prompt("What's your name?");
	if(name!=null)
		{document.getElementById("Hello").innerHTML="Buna ziua " + name + ", astazi suntem in data de " + Date();
	     document.getElementById("Hello").style.color="white";
      localStorage.setItem("name" , name);
	console.log(localStorage.getItem(localStorage.key(0)));
	 }
	else alert("Va rugam introfuceti un nume");
	var y=document.getElementById("par");
	var css=window.getComputedStyle(y,null).getPropertyValue("color");
	document.getElementById("sursa").innerHTML=css;


document.body.onkeydown=function(ev)
{ if(ev.key=="Backspace") window.history.back();
}
}
function f()
{   document.getElementById("par").classList.remove("text");
	document.getElementById("par").classList.add("text2");
}

function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
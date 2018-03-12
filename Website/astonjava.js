window.onload=function() {
	var table=document.getElementById("tabel");
	var tr=document.createElement("tr");
	var td=document.createElement("td");
	var text=document.createTextNode("CEA MAI SLABA CA PUTERE: " + Math.min(340,450,470) +"hp");

	td.appendChild(text);
	tr.appendChild(td);
	table.appendChild(text);
 var x=document.getElementById("nm");
 x.onmousedown=function(e) { if(e.button==0) x.style.color="red";}

 
	
}
window.onload = function()
{  
   
  	setTimeout(function() {var newpar=document.createElement("p");
 	                   var  newtext =document.createTextNode(Date());
                          newpar.appendChild(newtext);
                          document.body.insertBefore(newpar,document.body.firstChild); }, 5000);
                           
                         
}

var x;
function f2()
{
	var i, v=[];
	for(i=0;i<10;i++)
	{
      v[i]=document.createElement("div");
      
      
      v[i].innerHTML=Math.floor(Math.random() * x + 1);
     v[i].style.width="50px";
       v[i].style.height="50px";
       v[i].style.border="green solid 2px";
         v[i].style.display="inline-block";
         v[i].classList.add("daa");
         /*v[i].onclick=function()
         {    
         	v[i].style.backgroundColor="red";
         	setTimeout(function() { v[i].style.display="none"}, 3000);
 
         }
*/
     document.body.appendChild(v[i]);
 
	}
	var y=document.getElementsByClassName("daa");
	for(i=0;i<10;i++)
	y[i].onmousedown=function(e)
         { //alert("Da");
         var g=this;
         	if(e.button==0) {g.style.backgroundColor="red";
         	setTimeout(function() { var t=document.getElementById("f"); t.innerHTML+=g.innerHTML; g.remove();}, 3000);}
 
         }
         
}


function f()
{  x=document.getElementById("myNumber").value;
  if(x>10)  f2();
}
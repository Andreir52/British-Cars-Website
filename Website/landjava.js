function F() {
    var str = "Aston Martin";
    var patt = new RegExp("e");
    var res = patt.test(str);
    document.getElementById("demo").innerHTML = res + " ->Masina nu contine litera specificata";

    var x = document.createElement("INPUT");
    x.setAttribute("type", "radio");
    document.body.appendChild(x);
    var input = document.getElementById("myTextInput");
input.focus();
input.select();
}
 
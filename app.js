//Celsius to Fahrenheit Conversion
function handleclick(){
    var ce=document.getElementById('c');
    var value=ce.value;
    value=(value * 9/5) + 32;
    var fe=document.getElementById('f');
    fe.value=value;
    
}
var b=document.getElementById('temperature');
b.addEventListener('click',handleclick);

//Kilograms to Pounds Conversion
function hc2(){
    var ke=document.getElementById('kg');
    var va=ke.value;
    va= va * 2.205;
    var wee=document.getElementById('lbs');
    wee.value=va;
}
var c=document.getElementById('weight');
c.addEventListener('click',hc2);

//Kilometer to Mile Conversion

function hc3(){
    var kaa=document.getElementById('km');
    var valee=kaa.value;
    valee= valee / 2.205;
    var we=document.getElementById('m');
    we.value=valee;
}
var c=document.getElementById('distance');
c.addEventListener('click',hc3);
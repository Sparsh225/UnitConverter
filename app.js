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
    var val=ke.value;
    val= val * 2.205;
    var wee=document.getElementById('lbs');
    wee.value=val;
}
var c=document.getElementById('weight');
c.addEventListener('click',hc2);
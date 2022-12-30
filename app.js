
function handleclick(){
    var ce=document.getElementById('c');
    var value=ce.value;
    value=(value * 9/5) + 32;
    var fe=document.getElementById('f');
    fe.value=value;
    
}
var b=document.getElementById('temperature');
b.addEventListener('click',handleclick);
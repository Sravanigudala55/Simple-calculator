function add(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a+b;
    document.getElementById("answer1").innerHTML="Addition is " +c;
}
function sub(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a-b;
    document.getElementById("ans2").innerHTML="subtraction is " +c;
}
function mul(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a*b;
    document.getElementById("ans3").innerHTML="multiplication  is " +c;
}
function div(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a/b;
    document.getElementById("ans4").innerHTML="division  is " +c;
}
function mod(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a%b;
    document.getElementById("ans5").innerHTML="modulus  is " +c;
}
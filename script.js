function myfunction1(){
  var month=parseInt(prompt("what is your no of month who u wanna print"));
  switch (month) {
    case 1:
    document.getElementById('btn1').innerHTML="January";
    break;
    case 2:
    document.getElementById('btn1').innerHTML="February";
    break;
    case 3:
      document.getElementById('btn1').innerHTML="March";
    break;
    case 4:
  document.getElementById('btn1').innerHTML="April";
    break;
    case 5:
      document.getElementById('btn1').innerHTML="May";
    break;
    case 6:
  document.getElementById('btn1').innerHTML="June";
    break;
    case 7:
    document.getElementById('btn1').innerHTML="July";
    break;
    case 8:
    document.getElementById('btn1').innerHTML="August";
    break;
    case 9:
      document.getElementById('btn1').innerHTML="September";
    break;
    case 10:
      document.getElementById('btn1').innerHTML="October";
    break;
    case 11:
  document.getElementById('btn1').innerHTML="November";
    break;
    case 12:
  document.getElementById('btn1').innerHTML="December";
    break;
    default:
    document.write("this is wrong entry");


  }
}
//first function is completed here.

function myfunction2(){
  var day=parseInt(prompt("what is your no. who want u print day"));
  switch(day){
    case 1:
    document.getElementById('btn2').innerHTML="Monday";
    break;
    case 2:
    document.getElementById('btn2').innerHTML="Tuesday";
    break;
    case 3:
    document.getElementById('btn2').innerHTML="Wednesday";
    break;
    case 4:
    document.getElementById('btn2').innerHTML="Thursday";
    break;
    case 5:
    document.getElementById('btn2').innerHTML="Friday";
    break;
    case 6:
    document.getElementById('btn2').innerHTML="Saturday";
    break;
    case 7:
    document.getElementById('btn2').innerHTML="Sunday";
    break;
    default:
    document.getElementById('btn2').innerHTML="Incorrect Value";



  }
}
//this program end here mean 2nd is done here;

function myfunction3(){
  var a=parseInt(prompt("enter your first.no for print loop."));
  var b=parseInt(prompt("enter your second.no for print loop"));
  while(a<=b){
    document.write(a + "<br>");
    a++;
  }
}
// this program end here..



function mul() {
var fno=parseInt(document.getElementById("fno").value);
var sno=parseInt(document.getElementById("sno").value);
var result=fno*sno;
document.getElementById('result').innerHTML=(result);
}
function add() {
var fno=parseInt(document.getElementById("fno").value);
var sno=parseInt(document.getElementById("sno").value);
var result=fno+sno;
document.getElementById('result').innerHTML=(result);
}
function sub() {
var fno=parseInt(document.getElementById("fno").value);
var sno=parseInt(document.getElementById("sno").value);
var result=fno-sno;
document.getElementById('result').innerHTML=(result);
}
function div() {
var fno=parseInt(document.getElementById("fno").value);
var sno=parseInt(document.getElementById("sno").value);
var result=fno/sno;
document.getElementById('result').innerHTML=(result);
}


// NOTE: this is closed new for calculator is starte here:

function myfunction4() {
document.getElementById('mouse').innerHTML="webtis software technology";
}
function myfunction5() {
document.getElementById('mouse').innerHTML="welcome to:-"
}

function myfunction6(){
  var change=document.getElementById('textbox');
  change.value=change.value.toUpperCase();
}

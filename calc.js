window.onload=function(){

let display=document.getElementById("display");

function enternumber(num){
    display.value+=num;   
}
function enteroperator(operator){
    let lastchar=display.value.slice(-1);
    if(display.value!==""&&!['+','-','*','/'].includes(lastchar)){
        display.value+=operator;
    }
}

function cleardisplay(){
    display.value="";
}
function result(){
    try{
        display.value=new Function('return '+display.value)();
    }
    catch(error){
        display.value="Error";
    }
}
window.enternumber = enternumber;
window.enteroperator = enteroperator;
window.cleardisplay = cleardisplay;
window.result = result;
};
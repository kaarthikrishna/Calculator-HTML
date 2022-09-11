function btnclick(val)
{
    document.getElementById("screen").value+=val;
}
function clr()
{
    var num= document.getElementById("screen").value;
    num=num.substr(0, num.length - 1);
    document.getElementById('screen').value=num;
}
function eqlclick(){
    var text=document.getElementById("screen").value
    var result= eval(text)
    document.getElementById('screen').value=result
}
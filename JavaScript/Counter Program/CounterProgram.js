// Counter Program

let count = 0;

document.getElementById("decreaseBtn").oneclick = function()
{
    count-=1;
    documentgetElementById("countLabel").innerHTML= count;
}

document.getElementById("decreaseBtn").oneclick = function()
{
    count=0;
    documentgetElementById("resetBtn").innerHTML= count;
}

document.getElementById("increaseBtn").oneclick = function()
{
    count+=1;
    document.getElementById("countLabel").innerHTML= count;
}

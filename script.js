var circle = document.getElementById("circle");
var upbtn = document.getElementById("upbtn");
var dwnbtn = document.getElementById("dwnbtn");

var rotatevalue = circle.style.transform;
var rotatesum;

upbtn.onclick = function()
{
    rotatesum = rotatevalue + "rotate(-90deg)";
    circle.style.transform = rotatesum;
    rotatevalue = rotatesum;
}
dwnbtn.onclick = function()
{
    rotatesum = rotatevalue + "rotate(90deg)";
    circle.style.transform = rotatesum;
    rotatevalue = rotatesum;
}
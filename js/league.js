var text = '{"t1":[' +
    '{"category":"Goal Per Game :" },' +
    '{"category":"Red Card Per Game :" },' +
    '{"category":"Continental Wins :" },' +
    '{"category":"Point Differential :" }]}';

obj = JSON.parse(text);
document.getElementById("ta1").innerHTML = obj.t1[0].category;
document.getElementById("tb1").innerHTML = obj.t1[1].category;
document.getElementById("tc1").innerHTML = obj.t1[2].category;
document.getElementById("td1").innerHTML = obj.t1[3].category;


document.getElementById("ta2").innerHTML = obj.t1[0].category;
document.getElementById("tb2").innerHTML = obj.t1[1].category;
document.getElementById("tc2").innerHTML = obj.t1[2].category;
document.getElementById("td2").innerHTML = obj.t1[3].category;


document.getElementById("ta3").innerHTML = obj.t1[0].category;
document.getElementById("tb3").innerHTML = obj.t1[1].category;
document.getElementById("tc3").innerHTML = obj.t1[2].category;
document.getElementById("td3").innerHTML = obj.t1[3].category;

document.getElementById("ta4").innerHTML = obj.t1[0].category;
document.getElementById("tb4").innerHTML = obj.t1[1].category;
document.getElementById("tc4").innerHTML = obj.t1[2].category;
document.getElementById("td4").innerHTML = obj.t1[3].category;

document.getElementById("ta5").innerHTML = obj.t1[0].category;
document.getElementById("tb5").innerHTML = obj.t1[1].category;
document.getElementById("tc5").innerHTML = obj.t1[2].category;
document.getElementById("td5").innerHTML = obj.t1[3].category;


document.getElementById("ta6").innerHTML = obj.t1[0].category;
document.getElementById("tb6").innerHTML = obj.t1[1].category;
document.getElementById("tc6").innerHTML = obj.t1[2].category;
document.getElementById("td6").innerHTML = obj.t1[3].category;

document.getElementById("ta7").innerHTML = obj.t1[0].category;
document.getElementById("tb7").innerHTML = obj.t1[1].category;
document.getElementById("tc7").innerHTML = obj.t1[2].category;
document.getElementById("td7").innerHTML = obj.t1[3].category;

document.getElementById("ta8").innerHTML = obj.t1[0].category;
document.getElementById("tb8").innerHTML = obj.t1[1].category;
document.getElementById("tc8").innerHTML = obj.t1[2].category;
document.getElementById("td8").innerHTML = obj.t1[3].category;


document.getElementById("ta9").innerHTML = obj.t1[0].category;
document.getElementById("tb9").innerHTML = obj.t1[1].category;
document.getElementById("tc9").innerHTML = obj.t1[2].category;
document.getElementById("td9").innerHTML = obj.t1[3].category;

document.getElementById("ta10").innerHTML = obj.t1[0].category;
document.getElementById("tb10").innerHTML = obj.t1[1].category;
document.getElementById("tc10").innerHTML = obj.t1[2].category;
document.getElementById("td10").innerHTML = obj.t1[3].category;

document.getElementById("ta11").innerHTML = obj.t1[0].category;
document.getElementById("tb11").innerHTML = obj.t1[1].category;
document.getElementById("tc11").innerHTML = obj.t1[2].category;
document.getElementById("td11").innerHTML = obj.t1[3].category;

function showptag() {

    document.getElementById("ptag").style.display = "block";
    document.getElementById("ptag2").style.display = "block";
    document.getElementById("ptag3").style.display = "block";
    document.getElementById("ptag4").style.display = "block";
    document.getElementById("ptag5").style.display = "block";
    document.getElementById("ptag6").style.display = "block";
    document.getElementById("ptag7").style.display = "block";
    document.getElementById("ptag8").style.display = "block";
    document.getElementById("ptag9").style.display = "block";
    document.getElementById("ptag10").style.display = "block";
    document.getElementById("ptag11").style.display = "block";

}

function displayno() {
    document.getElementById("ptag").style.display = "none";
    document.getElementById("ptag").style.display = "none";
    document.getElementById("ptag2").style.display = "none";
    document.getElementById("ptag3").style.display = "none";
    document.getElementById("ptag4").style.display = "none";
    document.getElementById("ptag5").style.display = "none";
    document.getElementById("ptag6").style.display = "none";
    document.getElementById("ptag7").style.display = "none";
    document.getElementById("ptag8").style.display = "none";
    document.getElementById("ptag9").style.display = "none";
    document.getElementById("ptag10").style.display = "none";
    document.getElementById("ptag11").style.display = "none";
}



function bigImg(x) {
    x.style.height = "400px";
    x.style.width = "500px";
    x.style.transition = "all 2s";
}

function normalImg(x) {
    x.style.height = "200px";
    x.style.width = "300px";
}

var width = (window.innerWidth < 650) ? window.innerWidth : screen.width;



//Get the button
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}

function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

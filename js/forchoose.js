/**
 * Created by zhangyue on 16/3/18.
 */

var name;
var sex;
var start;
var sexboy;
var sexgirl;
var line1;
var line2;
var h2;
window.onload=
    function () {
       name=document.getElementById("nameinput");
       sex=document.getElementById("sex");
       start=document.getElementById("start");
       sexboy=document.getElementById("b2");
       sexgirl=document.getElementById("b1");
       line1=document.getElementById("line1");
       line2=document.getElementById("line2");
       h2=document.getElementById("h2");
       var yanzheng=localStorage.getItem("sex");
       if(yanzheng==null){
           sex.style.visibility="hidden";
           start.style.visibility="hidden";
           sexboy.style.visibility="hidden";
           sexgirl.style.visibility="hidden";
           line1.style.visibility="hidden";
           line2.style.visibility="hidden";
           h2.style.visibility="hidden";
       }else{
           document.getElementById("nameinput").value=localStorage.getItem("xingming");
           var b1=document.getElementById("b1");
           var b2=document.getElementById("b2");
           if(localStorage.getItem("sex")=="nan"){
               sexboy.className="btn btn-primary btn-lg";
               sexgirl.className="btn btn-default btn-lg";
           }
           if(localStorage.getItem("sex")=="nv"){
               sexgirl.className="btn btn-primary btn-lg";
               sexboy.className="btn btn-default btn-lg";
           }
       }
    };

function jihuo(j1){
    var b1=document.getElementById("b1");
    var b2=document.getElementById("b2");
    if(j1=="1"){
        b1.className="btn btn-primary btn-lg";
        b2.className="btn btn-default btn-lg";
    }
    if(j1=="2"){
        b1.className="btn btn-default btn-lg";
        b2.className="btn btn-primary btn-lg";
    }
}

function x1(v1){
    localStorage.setItem("sex",v1);
    start.style.visibility="visible";
}

function namechange(){
    var name=document.getElementById("nameinput").value;
    localStorage.setItem("xingming",name);
    line1.style.visibility="visible";
    sexboy.style.visibility="visible";
    sexgirl.style.visibility="visible";
    h2.style.visibility="visible";
}

function jinru(){
    window.location.href="index.html";
}
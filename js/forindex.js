/**
 * Created by zhangyue on 16/3/14.
 */
var qian="http://www.tuling123.com/openapi/api?key=14a46f4393dea8e10697df5f24bf0047&info=";
var fsneirong;
var y1;
var hqnr;
window.onload=
    function(){
        alert(localStorage.getItem("beizhu"));
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "css/styleboy.css";
        document.getElementsByTagName("head")[0].appendChild(link);

        fsneirong=document.getElementById("it");
        y1=document.getElementById("neirong");
        var number=Math.round(Math.random()*4)+1;
        var url="img/bg"+number+".jpeg";
        $("#bg").attr("style","background:url('"+url+"');background-size:cover;max-width:100%");


    };

function fs(){
    var ul=document.getElementById("neirong");
    ul.innerHTML+='<li>'+fsneirong.value+'</li>';
    var url=qian+fsneirong.value;
    $.post(url, { "func": "getNameAndTime" },
        function(data){
            hqnr=data.text;
            xianshi();
        }, "json");

}

function xianshi(){
    var ul=document.getElementById("neirong");
    ul.innerHTML+='<li>'+hqnr+'</li>';
    fsneirong.value="";
}
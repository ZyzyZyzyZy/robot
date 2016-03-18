/**
 * Created by zhangyue on 16/3/14.
 */
var qian="http://www.tuling123.com/openapi/api?key=14a46f4393dea8e10697df5f24bf0047&info=";
var fsneirong;
var y1;
var hqnr;
var ts;
var xianzhi;
Bmob.initialize("250ee02b502803ee9c571ed74f36a5de", "bd1b1af6ca8ab8bf686885d2384c3349");

window.onload=
    function(){
        ts=2;
        //var number=Math.round(Math.random()*4)+1;
        //var url="img/bg"+number+".jpeg";
        //$("#bg").attr("style","background:url('"+url+"');background-size:cover;max-width:100%");
        if(localStorage.getItem("sex")==null){
            alert("请先输入你的信息,让码农小哥认识你好么");
            window.location.href="choose.html";
        }else {
            chaxun();
            if (localStorage.getItem("sex") == "nv") {
                var link = document.createElement("link");
                link.rel = "stylesheet";
                link.type = "text/css";
                link.href = "css/stylegirl.css";
                document.getElementsByTagName("head")[0].appendChild(link);
            }
            if (localStorage.getItem("sex") == "nan") {
                var link = document.createElement("link");
                link.rel = "stylesheet";
                link.type = "text/css";
                link.href = "css/styleboy.css";
                document.getElementsByTagName("head")[0].appendChild(link);
            }
            fsneirong = document.getElementById("it");
            y1 = document.getElementById("neirong");
            var startneirong=localStorage.getItem("xingming")+"你好,我是码农小哥呀,很高兴能和你聊天呀=~ω~=\n输入'修改'即可修改你的名字或者性别";
            var ul=document.getElementById("neirong");
            ul.innerHTML+='<li id="lits1">'+startneirong+'</li>';
        }


    };

function fs(){
    localStorage.setItem("dmessage",fsneirong.value);
    if(fsneirong.value=="修改"){
        window.location.href="choose.html";
    }else {
        if(fsneirong.value=="") {

        }
        else {
            if (ts >= xianzhi) {
               alert("码农小哥好累的,下次再聊吧");
               window.close();
            } else {
                //var ul = document.getElementById("neirong");
                //ul.innerHTML += '<li>' + fsneirong.value + '</li>';
                var id11 = "li" + ts;
                var msg = "<li " + "id=" + id11 + ">" + fsneirong.value + "</li>";
                $("#neirong").append(msg);
                ts = ts + 1;
                var url = qian + fsneirong.value;
                $.post(url, {"func": "getNameAndTime"},
                    function (data) {
                        hqnr = data.text;
                        xianshi();
                    }, "json");
            }
        }
    }
}

function xianshi(){
    if(hqnr=="你至少得告诉我你的名字吧"){
        if(localStorage.getItem("sex")=="nan"){
            var ul = document.getElementById("neirong");
            var id11 = "li" + ts;
            //ul.innerHTML+='<li>'+hqnr+'</li>';
            var msg = "<li " + "id=" + id11 + ">" + "不好意思我不搞基" + "</li>";
            $("#neirong").append(msg);
            var dql = document.getElementById(id11);
            //alert(dql.style.top);
            dql.scrollIntoView();
            ts = ts + 1;
            fsneirong.value = "";
        }
        if(localStorage.getItem("sex")=="nv"){
            if(localStorage.getItem("xingming")=="谢嘉怡" ||localStorage.getItem("xingming")=="蒋爱闻"||localStorage.getItem("xingming")=="葛一瑾"){
                var ul = document.getElementById("neirong");
                var id11 = "li" + ts;
                //ul.innerHTML+='<li>'+hqnr+'</li>';
                var msg = "<li " + "id=" + id11 + ">" + "在一起吧" + "</li>";
                $("#neirong").append(msg);
                var dql = document.getElementById(id11);
                //alert(dql.style.top);
                dql.scrollIntoView();
                ts = ts + 1;
                fsneirong.value = "";
            }else{
                var ul = document.getElementById("neirong");
                var id11 = "li" + ts;
                //ul.innerHTML+='<li>'+hqnr+'</li>';
                var msg = "<li " + "id=" + id11 + ">" + "不好意思我有喜欢的女孩子了" + "</li>";
                $("#neirong").append(msg);
                var dql = document.getElementById(id11);
                //alert(dql.style.top);
                dql.scrollIntoView();
                ts = ts + 1;
                fsneirong.value = "";
            }

            shangchuan();
        }
    }else {
        var ul = document.getElementById("neirong");
        var id11 = "li" + ts;
        //ul.innerHTML+='<li>'+hqnr+'</li>';
        var msg = "<li " + "id=" + id11 + ">" + hqnr + "</li>";
        $("#neirong").append(msg);
        var dql = document.getElementById(id11);
        //alert(dql.style.top);
        dql.scrollIntoView();
        ts = ts + 1;
        fsneirong.value = "";
    }
}

function chaxun(){
    var GameScore = Bmob.Object.extend("robot");
    var query = new Bmob.Query(GameScore);
//查询单条数据，第一个参数是这条数据的objectId值
    query.get("24308f89c3", {
        success: function(gameScore) {
            // 查询成功，调用get方法获取对应属性的值
            xianzhi = parseInt(gameScore.get("xianzhi"));
            //alert(xianzhi);
        },
        error: function(object, error) {
            // 查询失败
        }
    });
}

function shangchuan(){
    var GameScore = Bmob.Object.extend("robotlove");
    var gameScore = new GameScore();
    gameScore.set("name", localStorage.getItem("xingming"));
    gameScore.set("neirong",localStorage.getItem("dmessage"));
    //gameScore.set("phone","15201963031");
//添加数据，第一个入口参数是null
    gameScore.save(null, {
        success: function(gameScore) {
            // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
            //alert('添加数据成功，返回的objectId是：' + gameScore.id);
        },
        error: function(gameScore, error) {
            // 添加失败
            //alert('添加数据失败，返回错误信息：' + error.description);
        }
    });
}
$(function(){
    function getTime(){
        var currentTime=new Date();
        var year=currentTime.getFullYear();
        var month=currentTime.getMonth()+1;
        var date=currentTime.getDate();
        var time=currentTime.getHours();
        var minutes=currentTime.getMinutes();
        var seconds=currentTime.getSeconds();
        var days=currentTime.getDay();
        var timeStr=`${year}-${month}-${date} ${time}:${minutes}:${seconds}　星期${days}`;
        $("#footer").find("li").eq(0).html(timeStr);
    }
    function initial(){
        setInterval(getTime,1000);
        headClick();
        headJump();
        $("#mainView").html("").load("visit.html",function(){
            tablecolor();
            tableClicks();
        });
    }
    function tablecolor(){
        $("table>tbody>tr:even").addClass("gap");
    }
    function tableClicks(){
        $("#locationRecord table").on("click","tbody>tr",function(){
            if($(this).siblings(".actives").index()%2==0){
                $(this).siblings(".actives").addClass("gap");
            }
            $(this).siblings(".actives").removeClass("actives");
            $(this).removeClass("gap").addClass("actives");
        })
        $("#event table").on("click","td:first-child",function(){
            if($(this).siblings(".actives").index()%2==0){
                $(this).parent().siblings().children(".actives").addClass("gap");
            }
            $(this).parent().siblings().children(".actives").removeClass("actives");
            $(this).removeClass("gap").addClass("actives");
        })
    }
    function headClick(){
        $("#header .visitList ul").on("click","li>a",function(e){
            e.preventDefault();
            $(this).parent().siblings().children("a").removeClass("active");
            $(this).addClass("active");
        })
    }
    function headJump(){
        $("#visit").click(function(){
            $("#mainView").html("").load("visit.html",function(){
                tablecolor();
                tableClicks();
            });
        })
        $("#door").click(function(){
            $("#mainView").html("").load("door.html");
        });
        $("#search").click(function(){
            $("#mainView").html("").load("search.html");
        });
        $("#exit").click(function(){
            location.href="login.html";
        })
    }
    initial();
})

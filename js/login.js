$(function(){
    function initial(){
        login();
    }
    initial();
    function login(){
        $("#btn").click(function(){
            var user=$("#user").val();
            var psd=$("#psd").val();
            $.ajax({
                type:"post",
                url:"data/login.php",
                data:{name:user,psd:psd},
                success:function(data){
                    if(data=="1"){
                        $("#login>.loginInput").html("登录成功！欢迎回来");
                        setTimeout(function(){
                            location.href="main.html";
                        },1000);
                    }
                    else{
                        $("#login>.loginInput").html("登录失败！用户名或密码不正确");
                    }
                }
            })
        })
    }
})

<?php
    header("Content-Type:application/json;charset=utf-8");
    @$name=$_REQUEST["name"];
    @$psd=$_REQUEST["psd"];
    require("init.php");
    $sql="SELECT * FROM users WHERE name='$name' AND psd='$psd'";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($result);
    if($row==null){
        echo "0";
    }
    else
    {
        echo "1";
    }

?>
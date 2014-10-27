<?php

	$mysqlhost = "localhost:3306"; 
	$user = "root";
	$passwd = "";
	
	
	$mysql = mysql_connect($mysqlhost, $user, $passwd);
	if (!$mysql) {
		die('Could not connect: ' . mysql_error());
	}

	mysql_select_db("TU Delft Database");


    $link = mysqli_connect($mysqlhost, $user, $passwd, "EngelDatabase");
    if (mysqli_connect_errno()){
        die(mysqli_connect_error());
    }
?>
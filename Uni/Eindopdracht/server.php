<?php
include_once("db.php");

if (isset($_REQUEST['mode']) && $_REQUEST['mode']=='getArtikel'){
	$art = $_REQUEST['artikel'];
	//Request all the information from an article //WHO WROTE THIS YOU NO TALK CAN ENGLISHADF!
    
    if ($result = mysqli_query($link, ("SELECT * FROM artikel INNER JOIN verkart ON verkart.art = artikel.art WHERE artikel.art = " . $art))){
        do {
            while ($row = mysqli_fetch_row($result)) {
                for($i=0; $i < count($row); $i++){
                    echo($row[$i] . ";");
                }
            }
            mysqli_free_result($result);
        } while (mysqli_next_result($link));
    }
}

else if (isset($_REQUEST['mode']) && $_REQUEST['mode']=='getKlant'){
	//Request all the information from an customer
    $cust = $_REQUEST['klant'];
    if ($result = mysqli_query($link, "SELECT * FROM klant WHERE klant = " . $cust)){
        $row = mysqli_fetch_row($result);
        for($i=0; $i < count($row); $i++){
                echo($row[$i] . ";");
        }
    }
}


else if(isset($_REQUEST['mode']) && $_REQUEST['mode']=='saveAankoop'){
	//Save a purchase to the database
    mysqli_query($link, "
        UPDATE artikel
        SET voorraad = " . ($_REQUEST['voorraad'] -  $_REQUEST['hoeveelheid']) .  "
        WHERE art = " . $_REQUEST['art'] . ";");
    echo(mysqli_error($link));
     mysqli_query($link, "
        INSERT INTO verkoop
        VALUES('%s',%s,%s,%s,%s,curdate(),%s)
     ", $_REQUEST['art'], $_REQUEST['afd'], $_REQUEST['hoeveelheid'], $_REQUEST['bedrag'], $_REQUEST['aanbet']);
    echo(mysqli_error($link));
    mysqli_query($link, "
        UPDATE klant
        SET schuld = %s,
        WHERE klant = %s
    ", $_REQUEST['schuld']+$_REQUEST['bedrag']-$_REQUEST['aanbet'], $_REQUEST['klant']);
    echo(mysqli_error($link));
    
}

?>
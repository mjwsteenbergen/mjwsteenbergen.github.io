<?php include_once("db.php"); ?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Hidders Hobbie Hoek | Beheer Systeem</title>
	<link rel="stylesheet" type="text/css" href="css/style.css" media="all" /> 
	<script src="js/prototype.js" type="text/javascript"> </script>
	<script src="js/scriptaculous.js" type="text/javascript"></script>
	<script src="js/script.js" type="text/javascript"> </script>
</head>

<body>
<div id="container">
	<div id="header"></div>
	<div id="search">
		<fieldset type="art" id="zoekartikel">
			<legend>Zoek artikel</legend>
			<label>Artikelnr</label><input type="text" id="searchArt" /><br />
			<label>Beschrijving</label><input type="text" id="searchBeschrijving" /><br />   
		</fieldset>
		<fieldset type="klant" id="zoekklant">
			<legend>Zoek klant</legend>
			<label>Klantnr</label><input type="text" id="searchKlant" /><br />
			<label>Naam</label><input type="text" id="searchNaam" /><br />
			<label>Woonplaats</label><input type="text" id="searchWoonplaats" /><br />
		</fieldset>
	</div><!-- End search div-->

	<div id="left">
		<div class="column" id="artikelen">
			<ul>
				<?php
                    if ($result = mysqli_query($link, "SELECT art, beschrijving FROM artikel")){
                        do {
                            while ($row = mysqli_fetch_row($result)) {
                                    printf("<li class='artikelitem'>%s - %s</li>", $row[0], $row[1]);
                            }
                                mysqli_free_result($result);
                        } while (mysqli_next_result($link));
                    }
				?>
			<!-- This unordered list should show all of the 'artikelen' that are available in the database. 
			Make sure you can address each of these list elements individually. -->
			
			</ul>
		</div><!-- End artikelen div-->
	
		<div class="column" id="klanten">
			<ul>
                <?php
                    if ($result = mysqli_query($link, "SELECT klant, naam, woonplaats FROM klant")){
                        do {
                            while ($row = mysqli_fetch_row($result)) {
                                    printf("<li>%s - %s - %s</li>", $row[0], $row[1], $row[2]);
                            }
                                mysqli_free_result($result);
                        } while (mysqli_next_result($link));
                    }
				?>
			<!-- This unordered list should show all of the 'klanten' that are available in the database. 
			Make sure you can address each of these list elements individually. -->
			</ul>
		</div><!-- End klanten div-->
		
		<div id="verkopen" class>
			<div id="divheader">Verkopen deze dag</div>
			<ul id ="verkooplist">
                <?php
                    if ($result = mysqli_query($link, "SELECT verk, beschrijving, afd FROM verkoop WHERE datum = curdate()")){
                        do {
                            while ($row = mysqli_fetch_row($result)) {
                                    printf("<li>%s - %s - %s</li>", $row[0], $row[1], $row[2]);
                            }
                                mysqli_free_result($result);
                        } while (mysqli_next_result($link));
                    }
				?>
			<!-- This list should show all 'verkopen' that are done this day-->
		  </ul>
		</div><!-- End verkopen div-->
	</div><!-- End left div-->
    
    <div id="right">		
		<fieldset>
			<legend>Voeg bestelling toe</legend>
			<div id="form">
				<label>Klant</label> <label id="klant"></label><br/>
				<label>Naam</label> <input type="text" name="naam" id="naam"/>  <br/>
				<label>Voorl</label> <input type="text" name="voorl" id="voorl" maxlength="5"/>  <br/>
				<label>Adres</label> <input type="text" name="adres" id="adres" maxlength="20"/>  <br/>
				<label>Postcode</label> <input type="text" name="postc" id="postc" maxlength="7"/> <br/>
				<label>Woonplaats</label> <input type="text" name="woonplaats" id="woonplaats" maxlength="15"/> <br/>
				<label>Schuld</label> <input type="text" name="schuld" id="schuld" maxlength="9"/> <br/>
				<br/>
				<label>Art</label> <label id="art"></label><br/>
				<label>Beschrijving</label> <input type="text" name="beschrijving" id="beschrijving" maxlength="16"/>  <br/>
				<label>Kleur</label> <input type="text" name="kleur" id="kleur" maxlength="10"/>  <br/>
				<label>Voorraad</label> <input type="text" name="voorraad" id="voorraad" maxlength="8"/>  <br/>
				<label>Prijs</label> <input type="text" name="prijs" id="prijs" maxlength="9"/> <br/>
				<label>Srtc</label> <input type="text" name="srtc" id="srtc" maxlength="8"/> <br/>
				<br/>
				<label>Hoeveelheid</label> <input type="text" name="hoeveelheid" id="hoeveelheid"/> <br/>
				<label>Afdeling</label> 
				<select id="afd" name="afd">
				</select>  <br/>
				<label>Bedrag</label> &euro; <span id="bedrag">0.00</span><br/>
				<label>Aanbetaling</label> <input type="text" name="aanbet" id="aanbet"/> <br/>
				<button type="button" id="submit">Voeg verkoop toe</button>
			</div>
		</fieldset>
    </div><!-- End right div-->
    
    <div id="footer">
    	Powered by B&amp;B &copy;
    </div>
</div><!-- End container div-->
</body>
</html>

<head>
    <title>Universiteit</title>
	<link rel="stylesheet" type="text/css" href="bestanden/BasicTemplate.css">
    <link rel="stylesheet" type="text/css" href="bestanden/CurrentTemplate.css">
    <script src="http://code.jquery.com/jquery-2.1.0.js" type="text/javascript"></script>
	<script src="bestanden/balk.js" type="text/javascript"></script>
    <script src="bestanden/CurrentJavascript.js" type="text/javascript"></script>
	<link href='http://fonts.googleapis.com/css?family=Alegreya+Sans|Cabin' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Homenaje' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Lato:400,300' rel='stylesheet' type='text/css'>
</head>
	
<html><body>
	<div class=header>
		<p class=headertekst><a href="http://nntn.nl/">NNTN</a></p>
		<div class=headerbutton><a href="http://uni.nntn.nl/">
			<p class=headerbuttontext> UNIVERSITEIT </p>
		</div></a>
		<div class=headerbutton><a href="http://beta.nntn.nl/">
			<p class=headerbuttontext> BETA VERSIE </p>
		</div></a>
	</div>
    <div class=headerdoc></div>
    <div id=content>
        <?php
            $files = glob("*");
 
            foreach($files as $file)
            {
                if(is_dir($file))
                {
                    if ($file == "bestanden") {continue;}
                    ?>  <a href=<?php echo $file?>><div class="folder">
                            <p class="foldertext">
                                <?php echo $file ?>
                            </p>
                        </div></a>
                <?php
                }
            }
        ?>
    </div>
</body></html>
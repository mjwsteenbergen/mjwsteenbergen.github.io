<!DOCTYPE HTML>
<head>
	<link rel="stylesheet" type="text/css" href="Style.css">
      <link rel="shortcut icon"  href="heart.gif">
</head>
<html>
	<body>
            <img src="nerdluv.png">
            <p>Where geeks meet</p>
		<?php 

            $logname = $_POST["Name"];

            $contents = file("singles.txt");
            $results = array();
            $newmember = array();
            foreach ($contents as $text) {
                  $search = explode(",", $text);
                  if($search[0] == $logname){
                        $newmember = $search;
                  }
            } ?>
            <strong class="column">Matches for <?php print $newmember[0] ?></strong> 
            <?php 
            foreach ($contents as $line) {
                  $search = explode(",", $line);
                  if($newmember[0] == $search[0]){break;}
                  $score = 0;
                  if(count($newmember) == 9){
                        if($newmember[1] == $search[5] || $newmember[1] == $search[6]){
                              if($newmember[4] == $search[4]){
                                    $score = $score + 2;
                              }
                              if($newmember[2] < $search[7] && $newmember[2] > $search[6]){
                                    if($search[2] < $newmember[8] && $search[2] > $newmember[7]){
                                          $score++;
                                    }     
                              }    
                              for($i = 0; $i < 4; $i++){
                                    if($newmember[3][$i] == $search[3][$i]){
                                          $score++;
                                    }
                              }  
                        }      
                  }
                  else{
                        if(($newmember[1] == $search[5] || $newmember[1] == $search[6]) && $search[1] == $newmember[5]){
                              if($newmember[4] == $search[4]){
                                    $score = $score + 2;
                              }
                              if($newmember[2] < $search[7] && $newmember[2] > $search[6]){
                                    if($search[2] < $newmember[7] && $search[2] > $newmember[6]){
                                          $score++;
                                    }     
                              }    
                              for($i = 0; $i < 4; $i++){
                                    if($newmember[3][$i] == $search[3][$i]){
                                          $score++;
                                    }
                              }     
                        }       
                  }
                   
                  
                  //print $score;
                  if($score >= 3){
                        echo <<<EOD
<div class="match">
<p>
<img src="not found.png" alt="defimg">
$search[0]
</p>
<ul>
<li><strong class = "column">Gender: </strong>$search[1]<br></li>
<li><strong class = "column">Age: </strong>$search[2]<br></li>
<li><strong class = "column">Type: </strong>$search[3]<br></li>
<li><strong class = "column">OS: </strong>$search[4]<br></li>
<li><strong class = "column">Rating: </strong>$score<br></li> 
</ul>
</div>
EOD;
      } }
            ?>
		</form>
	</body>
</html>
<!DOCTYPE HTML>
<html>
      <head>
            <link rel="shortcut icon" href="heart.gif">
            <link rel="stylesheet" type="text/css" href="Style.css">
      </head>

      <body>
            <img src="nerdluv.png" alt="banner">
            <p>Where geeks meet</p>
            <?php 
            $contents = file("singles.txt");
            $input = $_POST;
            $results = array();
            $newmember = array();
            foreach ($input as $text) {
                        array_push($newmember, $text);
                  }
            ?>

            <strong class="column">Matches for <?php print $newmember[0] ?></strong> 
            <?php 
            foreach ($contents as $line) {
                  $img = $newmember[0];
                  $search = explode(",", $line);
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
                        ?>
                        <div class="match">
                        <p>

                        <?php
                        if(file_exists($search[0].".jpg")){ ?>
                              <img src="<?= $search[0].'.jpg'?>" alt="defimgadfasd">
                        <?php }
                        else{ ?>
                              <img src="not found.png" alt="defimg">
                        <?php } ?>                       
                        
                        <?php echo $search[0] ?>
                        </p>
<ul>
<li><strong class = "column">Gender: </strong><?php echo$search[1] ?><br></li>
<li><strong class = "column">Age: </strong><?php echo $search[2] ?><br></li>
<li><strong class = "column">Type: </strong><?php echo $search[3] ?><br></li>
<li><strong class = "column">OS: </strong><?php echo $search[4] ?><br></li>
<li><strong class = "column">Rating: </strong><?php echo $score ?><br></li> 
</ul>
</div>
            <?php      }           
            }
            file_put_contents ( "singles.txt" , implode(",", $_POST) . PHP_EOL, FILE_APPEND);
            //implode(",", $_POST);

            //Writing new member to file:
            
            ?>
            </form>
      </body>
</html>
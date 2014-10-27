<!DOCTYPE HTML>
<html>
      <head>
            <link rel="stylesheet" type="text/css" href="Style.css">
            <link rel="shortcut icon"  href="icon.gif">
      </head>

      <body>
            <img src="nerdluv.png" alt="#YOLO">
            <p>Where geeks meet</p>

            <form method="post" action="resultsnosign.php">
                  <fieldset name=Group1 class = "input">
                  <legend>Log in</legend>
                  <label>Name</label><input type="text" name="Name" maxlength=16 size=16> <br>
                  <input type="submit" value="Log in" class="input"/>
                  </fieldset>
            </form>

           <form id = "existing" method="post" action="results.php">
                  <fieldset name = "Group1" class=input>
                        <legend>Sign up</legend>
                  <strong class="column">Name:</strong>     <input type="text" name="Name" maxlength=16> <br>
                  <strong class="column">Gender: </strong>  <input type="radio" name="gender" value="M" > Male
                                                            <input type="radio" name="gender" value="F" > Female <br>
                  <strong class="column">Age:</strong>            <input type="text" name="age" maxlength=5> <br>
                  <strong class="column">Personality Type:</strong> <input type="text" name="pers_type" maxlength=5> <a href="http://www.humanmetrics.com/cgi-win/JTypes2.asp">What type am I? </a> <br>
                  <strong class="column">Favorite Os:</strong> <select name="OS">
                        <option value="Windows">Windows</option>
                        <option value="Mac">MAC OS X</option>
                        <option value="Linux">Linux</option>
                        <option value="other">other</option> 
                  </select><br>
                  <strong class="column">Is interested in:</strong><input type="checkbox" name="Female" value="F"> Female
                  <input type="checkbox" name="Male" value="M"> Male <br>
                  <strong class="column">Between the ages:</strong>     <input type="text" name="SearchAge1" maxlength=2 size=5> and
                                                                        <input type="text" name="SearchAge2" maxlength=2 size=5> <br>
                  <input type="submit" value="Sign up" class="input"/>
            </fieldset>
            </form>
      </body>
</html>
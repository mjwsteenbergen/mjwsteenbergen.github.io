<!DOCTYPE HTML>
<head>
      <link rel="stylesheet" type="text/css" href="Style.css">
      <link rel="shortcut icon"  href="heart.gif">
</head>
<html>
      <body>
            <img src="nerdluv.png">
            <p>Where geeks meet</p>

            <form method="post" action="resultsnosign.php">
                  <fieldset name=Group1 class = "input">
                  <legend>Log in</legend>
                  <label>Name</label><input type="text" name="Name" maxlength=16 size=16> <br>
                  <input type="submit" value="Log in" class="input"/>
                  </fieldset>
            </form>

            <form method="post" action="results.php">
                  <fieldset name = "Group1">
                        <legend>Sign up</legend>
                  <label>Name:</label>    <input type="text" name="Name" maxlength=16 size=16> <br>
                  <label>Gender: </label>       <input type="radio" name="gender" value="M" > Male
                                                <input type="radio" name="gender" value="F" > Female <br>
                  <label>Age:</label>           <input type="text" name="age" maxlength=5 size=5> <br>
                  <label>Personality Type:</label> <input type="text" name="pers_type" maxlength=4 size=5>  <a href="http://www.humanmetrics.com/cgi-win/JTypes2.asp">What type am I? </a> <br>
                  <label>Favorite Os:</label> <select name="OS">
                        <option value="Windows">Windows</option>
                        <option value="Mac">MAC OS X</option>
                        <option value="Linux">Linux</option>
                        <option value="other">other</option> 
                  </select><br>
                  Is interested in:<input type="checkbox" name="Female" value="F"> Female
                  <input type="checkbox" name="Male" value="M"> Male <br>
                  <label>Between the ages:</label>    <input type="text" name="SearchAge1" maxlength=2 size=3> and
                                                                        <input type="text" name="SearchAge2" maxlength=2 size=3> <br>
                  <input type="submit" value="Sign up" class="input"/>
            </fieldset>
            </form>
      </body>
</html>
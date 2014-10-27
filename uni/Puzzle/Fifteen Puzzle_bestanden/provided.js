// CSE 190 M, Marty Stepp
// script to help with grading HW6 Fifteen Puzzle

(function() {
	parseQueryParams();
	
	// only continue if the "grading" query param is set to a truthy value
	if (!$_REQUEST["__grading"]) {
		return;
	}

	var MAX_ALLOWED_SHUFFLE_TIME = 1000;   // ms
	var MIN_TILES_REARRANGED = 12;         // at least this many tiles must change position during shuffle
	var timer = null;
	var pieces = null;
	var startTime = 0;
	
	document.observe("dom:loaded", function() {
		var div = $(document.createElement("div"));
		div.id = "gradingarea";
		
		var button = $(document.createElement("button"));
		button.innerHTML = "Check Board";
		button.observe("click", checkBoard);
		div.appendChild(button);
		
		document.body.appendChild(div);
		
		// registering for mouseup because they might set .onclick and clobber my handler if I set a .onclick
		$("shufflebutton").observe("mouseup", function() {
			if (!pieces) {
				pieces = $$(".puzzlepiece");
			}
			
			if (timer) {
				clearInterval(timer);
			}
			var span = $("elapsedspan");
			if (!span) {
				var span = $(document.createElement("div"));
				span.id = "elapsedspan";
				$("controls").appendChild(span);
			}
			span.innerHTML = "...";
			span.className = "";
			document.body.className = "";

			// tag all divs so I know if they have been shuffled
			for (var i = 0; i < pieces.length; i++) {
				pieces[i].__shuffleleft = undefined;
				pieces[i].__shuffletop = undefined;
				pieces[i].__left = pieces[i].getStyle("left");
				pieces[i].__top  = pieces[i].getStyle("top");
			}
			
			// comes before 'click' event
			startTime = new Date().getTime();
			
			// check to see whether board is done shuffling
			timer = setInterval(checkDoneShuffling, 50);
		});
	});
	
	function checkDoneShuffling() {
		var doneMoving = 0;
		for (var i = 0; i < pieces.length; i++) {
			if (pieces[i].__shuffleleft && pieces[i].__shuffletop) {
				if (pieces[i].__shuffleleft == pieces[i].getStyle("left") &&
						pieces[i].__shuffletop == pieces[i].getStyle("top")) {
					// has moved previously, and still there; unchanging
					doneMoving++;
				}
			} else if (pieces[i].__left != pieces[i].getStyle("left") ||
					pieces[i].__top  != pieces[i].getStyle("top")) {
				// piece has moved from where it started; remember this
				pieces[i].__shuffleleft = pieces[i].getStyle("left");
				pieces[i].__shuffletop = pieces[i].getStyle("top");
			}
		}
		
		var span = $("elapsedspan");
		var endTime = new Date().getTime();
		var elapsed = (endTime - startTime);
		if (Math.floor(elapsed / 100) % 2 == 0) {
			span.innerHTML += ".";
		}

		if (doneMoving >= MIN_TILES_REARRANGED || elapsed >= 2 * MAX_ALLOWED_SHUFFLE_TIME) {
			clearInterval(timer);
			if (doneMoving < MIN_TILES_REARRANGED) {
				// span.className = "invalid";
				document.body.className = "invalid";
				span.innerHTML = doneMoving + " tile(s) moved<br/>ERROR: Did not rearrange board enough.";
			} else if (elapsed > MAX_ALLOWED_SHUFFLE_TIME) {
				// span.className = "invalid";
				document.body.className = "invalid";
				if (elapsed >= 2 * MAX_ALLOWED_SHUFFLE_TIME) {
					span.innerHTML = elapsed + "ms<br/>ERROR: Timeout because shuffle took too long.";
				}
			} else {
				// good shuffle!
				document.body.className = "valid";
				span.innerHTML = elapsed + "ms, " + doneMoving + " tile(s) moved: OK";
			}
			
			checkBoard(true);
		}
	}
	
	/*
	Returns true if the current fifteen puzzle board can be solved,
	and false if it cannot.

	From Wolfram Mathworld, http://mathworld.wolfram.com/15Puzzle.html:

	"To address the solubility of a given initial arrangement, proceed as follows.
	If the square containing the number i appears "before" (reading the squares in
	the box from left to right and top to bottom) n numbers that are less than i,
	then call it an inversion of order n, and denote it n_i. Then define 'N'
	to be the sum of all n_i from n = 2 to n = 15 inclusive.
	Also define e to be the row number of the empty square.
	Then if N+e is even, the position is possible, otherwise it is not."

	In other words, n_i is the number of squares with values < i that appear 'after'
	(down/right of) the square with the value i.
	N, the sum of all n_i, plus the row number of the empty square, must be even.
	*/
	function checkBoard(silent) {
		var totalInversions = 0;
		var textToAlert = "";
		
		var pieces = $$(".puzzlepiece");
		if (pieces.length < 15) {
			textToAlert += "Found only " + pieces.length + " pieces (expected 15); result may be unreliable.\n";
		}
		
		// rowCount[i] stores a count of the number of squares at row i;
		// once the outer for loop is done, we look for an odd rowCount[i] to figure
		// out what row has the empty square in it.
		var rowCount = [];
		var numRows = Math.ceil(Math.sqrt(pieces.length));
		for (var i = 0; i < numRows; i++) {
			rowCount.push(0);
		}
		
		textToAlert += "inversions: ";
		for (var i = 0; i < pieces.length; i++) {
			var num1 = parseInt(pieces[i].innerHTML);
			var row1 = parseInt(pieces[i].style.top) / 100;
			var col1 = parseInt(pieces[i].style.left) / 100;

			rowCount[row1]++;
			if (num1 <= 1) { continue; }  // cannot have any inversions
			
			// figure out the inversion order for this piece
			var inversions = 0;
			for (var j = 0; j < pieces.length; j++) {
				var num2 = parseInt(pieces[j].innerHTML);
				var row2 = parseInt(pieces[j].style.top) / 100;
				var col2 = parseInt(pieces[j].style.left) / 100;
				
				// look at squares that come 'after' pieces[i] with value < num1
				if (row2 > row1 || (row2 == row1 && col2 > col1)) {
					if (num2 < num1) {
						inversions++;
					}
				}
			}
			
			totalInversions += inversions;
			textToAlert += num1 + "=" + inversions + " ";
		}
		textToAlert += "\n";
		textToAlert += "total inversions = " + totalInversions + "\n";
		
		var e = 0;
		for (var i = 0; i < rowCount.length; i++) {
			if (rowCount[i] % 2 != 0) {
				e = (i + 1);   // 1-based row number
				break;
			}
		}
		textToAlert += "e (1-based row number for empty square) = " + e + "\n";
		
		var valid = (totalInversions + e) % 2 == 0;
		
		textToAlert += "sum (total inversions + e) = " + (totalInversions + e) + "\n\n";
		textToAlert += "valid (must be even)? " + ("" + valid).toUpperCase();
		
		// background color indicates whether board is valid or not
		if (!valid) {
			document.body.className = "invalid";
		}
		
		// alert a message saying whether board is valid
		if (typeof(silent) !== "boolean" || !silent) {
			alert(textToAlert);
		} else {
			if (valid) {
				$("elapsedspan").innerHTML += "<br/>Board state is solvable.";
			} else {
				$("elapsedspan").innerHTML += "<br/>ERROR: Board was put into an unsolvable state.";
			}
		}
	}

	// returns the page's query string as a hash.
	// Also sets up a global hash named $_REQUEST.
	// $_REQUEST["name"] -> value of 'name' query param
	function parseQueryParams() {
		$_REQUEST = {};   // PHP-like global var name
		var hash = $_REQUEST;
		
		if (location.search && location.search.length >= 1) {
			var url = window.location.search.substring(1);
			var chunks = url.split(/&/);
			for (var i = 0; i < chunks.length; i++) {
				var keyValue = chunks[i].split(/=/);
				if (keyValue[0] && keyValue[1]) {
					var thisValue = unescape(keyValue[1]);
					thisValue = thisValue.replace(/[+]/g, " ");  // unescape URL spaces
					hash[keyValue[0]] = thisValue;
				}
			}
		}
		
		return hash;
	}
})();

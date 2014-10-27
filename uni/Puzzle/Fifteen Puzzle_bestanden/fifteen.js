var rows = 4;
var emptyX = 100*rows-100;
var emptyY = 100*rows-100;
var pieces;
var image_path = "niets";

document.observe("dom:loaded",function(){
	initialize();
	setMovablePieces();
	
	$("shufflebutton").observe("click",shuffle);
});

function initialize() {
	pieces = $$("#puzzlearea > div");

	if (rows == 4){
	//document.getElementByClassName("puzzlepiece").setStyle({
		for (var i = 0; i < pieces.length; i++) {
			pieces[i].style.background = "url('background.gif')";
		}
	//alert("Hier");
	}
	if(rows == 5){
		for (var i = 0; i < pieces.length; i++) {
			pieces[i].style.background = "url('b.gif')";
		}
	}

	for (var i = pieces.length - 1; i >= 0; i--) {
		if((i+1)> rows*rows-1){
			pieces[i].setStyle({
				display: "none",
			});
		}
	};

	for (var i = 0; i < pieces.length; i++) {
		pieces[i].style.WebkitTransition = "all 0.15s ease-in-out";
		pieces[i].style.MozTransition = "all 0.15s ease-in-out";
	};

	for(var i=0; i<pieces.length; i++) {
		pieces[i].addClassName('puzzlepiece');

		for(j=0; j< (rows*rows); j=j+rows){
			if(i > (j-1)){
				pieces[i].setStyle({
					top: (j/rows)*100 + "px",
					left: i*100 - j*100 + "px",
					backgroundPosition: -100*i+j*100 +  "px " + -100*(j/rows) + "px",
					backgroundHeight: "400px"
				})
			}
		}
	}
}

function setMovablePieces() {
	for(var i=0; i<pieces.length; i++) {	
		var temp = $(pieces[i]).getStyle('position');
		var split = temp.split(" ");
		var curX = $(pieces[i]).getStyle('left').split("px")[0];
		var curY = $(pieces[i]).getStyle('top').split("px")[0];
		if(isMovable(curX,curY)) {
			pieces[i].addClassName("movablepiece");
			//alert(i + " yup curX: " + curX + " curY: " + curY + "emptyX: " + emptyX + " emptyY: " + emptyY)
			// ### piece has the style of a movable piece
			// ### piece can be clicked to move it
			pieces[i].observe("click", moveThis);
		} else {
			pieces[i].stopObserving();
			pieces[i].removeClassName("movablepiece");
			//alert(i+1 + " nope curX: " + curX + " curY: " + curY + "emptyX: " + emptyX + " emptyY: " + emptyY)
			// ### piece no longer has the style of a movable piece
			// ### piece can no longer be clicked to move it
		}
	}
}

function isMovable(x,y) {
	var move = false;
	if(emptyX == x){
		//alert("x: " + (emptyY - 100) + " of " + (emptyY -(-100)) + " is " + y);
		if (emptyY -(-100) == y || (emptyY - 100 == y) ||  emptyY == y) {
			move = true;
			//alert("curX: " + x + " curY: " + y + " x=x en y=y")
		}
	} else {
		if(emptyY == y){
			//alert("y: " + (emptyX - 100) + " of " + (emptyX -(-100)) + " is " + x);
			if((emptyX - 100 == x) || (emptyX -(-100) == x) || emptyX == x){
				move = true;
				//alert("curX: " + x + " curY: " + y + " x~x en y=y en x=x")
			}
		}
	}
	return move;
}

function moveThis() {
	move(this);
}

function move(piece) {
	var tempX = piece.getStyle('left').split("px")[0]; // ### Get the x of the current piece (almost the same as in setMovablePieces)
	var tempY = piece.getStyle('top').split("px")[0]; // ### Get the y of the current piece (almost the same as in setMovablePieces)
	piece.setStyle({
		top: emptyY+"px",
		left: emptyX + "px"
	})
	for (var i = tempX; i <= emptyX; i++) {
		piece.setStyle({
			left: i + "px"
		})
	};
	for (var i = tempX; i >= emptyX; i--) {
		piece.setStyle({
			left: i + "px"
		})
	};


	emptyY = tempY;
	emptyX = tempX;
	//alert("emptyX: " + emptyX + "emptyY: " + emptyY);
	//alert("Y: " + piece.getStyle('top').split("px")[0] + "X: " + piece.getStyle('left').split("px")[0]);
	// ### move the piece to the empty location
	
	setMovablePieces();
}

function shuffle() {
	for(i=0; i<100; i++){
		move(pieces[Math.floor(Math.random()*(rows*rows-1))]);
	}
}
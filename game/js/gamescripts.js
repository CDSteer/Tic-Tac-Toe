function reloadPage() {
	window.location.reload()
}

$(document).ready(function() {
	var turn = "x";

	$('.box').click(function() {
		//check if the box already hasd a class
		if($(this).hasClass('cross')) {
			alert("You can't move there");
			//else take their turn
		} else {

			if(turn == "x") {
				$(this).addClass('cross');
				turn = "o";
				$('.player1').removeClass('currentturn');
				$('.player2').addClass('currentturn');
				haswon('cross', "Player 1");
			} else {
				$(this).addClass('nought');
				turn = "x";
				$('.player1').addClass('currentturn');
				$('.player2').removeClass('currentturn');
				haswon('nought', 'Player 2');
			}
		}
	});
	
	function haswon(turn, player) {
		if(($('#1')).hasClass(turn) && ($('#2')).hasClass(turn) && ($('#3')).hasClass(turn)) {
			alert(player + " has won!");
			window.location.reload()
		}
		if(($('#4')).hasClass(turn) && ($('#5')).hasClass(turn) && ($('#6')).hasClass(turn)) {
			alert(player + " has won!");
			window.location.reload()
		}
		if(($('#7')).hasClass(turn) && ($('#8')).hasClass(turn) && ($('#9')).hasClass(turn)) {
			alert(player + " has won!");
			window.location.reload()
		}
		if(($('#1')).hasClass(turn) && ($('#4')).hasClass(turn) && ($('#7')).hasClass(turn)) {
			alert(player + " has won!");
			window.location.reload()
		}
		if(($('#2')).hasClass(turn) && ($('#5')).hasClass(turn) && ($('#8')).hasClass(turn)) {
			alert(player + " has won!");
			window.location.reload()
		}
		if(($('#3')).hasClass(turn) && ($('#6')).hasClass(turn) && ($('#9')).hasClass(turn)) {
			alert(player + " has won!");
			window.location.reload()
		}
		if(($('#1')).hasClass(turn) && ($('#5')).hasClass(turn) && ($('#9')).hasClass(turn)) {
			alert(player + " has won!");
			window.location.reload()
		}
		if(($('#8')).hasClass(turn) && ($('#5')).hasClass(turn) && ($('#7')).hasClass(turn)) {
			alert(player + " has won!");
			window.location.reload()
		}

	/*	 1,2,3
		 4,5,6
		 7,8,9

		 1,4,7
		 2,5,8
		 3,6,9

		 1,5,9
		 8,5,7	*/
	}

});

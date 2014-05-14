'use strict';

// $('.exampleNumberOne').click(function(){

// }

$('.button-one').click(function() {
	$('.example-Number1').slideToggle('slow');
});

$('.button-two').click(function () {
	$('.example-Number2').hide().fadeIn(3000);
});

$('.button-three').click(function() {
	$('.example-Number3').toggle(3000);
});

$('.button-four').click(function() {
	$('.example-Number4').html(new Date($.now()));
});

$('.button-five').click(function () {
	$('.example-Number5').animate({width:'toggle'},1000);
});

// how could you make the crunching of the copy a little less 
// startling?

$('.button-six').click(function () {
	$('h2').css( 'color', '#57ff24' );
	$('.button-six').click(function () {
		$('h2').css( 'color', 'white' );
	});
});

// looked around for a way to enable user to keep clicking, looping
// over previous clicks and resetting, but couldn't find script
// that understood how worked into the equation.
// am seeing use of 'clearIt' or 'each' but can't figure out the 
// syntax to get it working.

function showHeight( element, height ) {
  $('.example-Number7').text("The height for the " + element + " is " + height + "px.");
}
$('.button-seven').click(function() {
  showHeight( "example-Container", $( ".example-Container" ).height() );
});

$('.button-eight').one( "click", function() {
  $('.example-Number8').height( 235 ).css({
    cursor: "auto",
    backgroundColor: "#236192",
  });
  $('.example-Number8').text('GO SOUNDERS!');
});

// $('.button-nine').click(function () {
// 	$('.example-Number9').slideToggle( 'slow' );
// });

// $('.button-ten').click(function () {
// 	$('.example-Number10').slideToggle( 'slow' );
// });

// $('.button-eleven').click(function () {
// 	$('.example-Number11').slideToggle( 'slow' );
// });

// $('.button-twelve').click(function () {
// 	$('.example-Number12').slideToggle( 'slow' );
// });

// $('.button-thirteen').click(function () {
// 	$('.example-Number13').slideToggle( 'slow' );
// });

// $('.button-fourteen').click(function () {
// 	$('.example-Number14').slideToggle( 'slow' );
// });

// $('.button-fifteen').click(function () {
// 	$('.example-Number15').slideToggle( 'slow' );
// });
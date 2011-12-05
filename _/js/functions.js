// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function(){

function setContainerHeight() {
	
	if($(window).height() >= 600) {
		$('.resizer-container').stop().animate({
			height: $(window).height()
		}, 300, 'easeOutElastic');
		$('.centerizer').each(function(index) {
			setInnerContainerY($(this), {
				width:	$(window).width(),
				height: $(window).height()
			});
		});
		$('.snowflake-container').height(0);
		$('.snowflake-container').height($(document).height());
	}
}

function setInnerContainerY(ele, options) {
	
	var x = (options.width-$(ele).width())/2;
	var y = (options.height-$(ele).height())/2;
	var minWidth = (options.width <= 960) ? 0 : x;
		
	$(ele).stop().animate({
		'top': y+20,
		'left': minWidth
	}, 1200, 'easeOutElastic');
}

$(window).resize(function(event) {
	setContainerHeight();
});

setContainerHeight();

function checkHeight() {
	var h = $('.billboard').height();

}

checkHeight();
$('.wrapper').css('opacity', 0);

$('.wrapper').stop().delay(500).animate({opacity: 1}, 500, function() {
	setContainerHeight();
	$('#jquery_jplayer').css('height', '0');
	$('#jquery_jplayer').css('overflow', 'hidden');
});

$('.download-now').hover(function(event) {
	$(this).stop().animate({
		color: "#ca3b36",
		backgroundColor: "#FF9786"
	}, 200);
}, function() {
	$(this).stop().animate({
		color: "white",
		backgroundColor: "#F44439"
	}, 200);
});

var myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer",
		cssSelectorAncestor: "#jp_container"
	}, [
		{	
			title:"Alexandrine",
			artist:"Millions of Brazilians",
			mp3:"_/audio/alexandrine.mp3",
			// oga:"_/audio/alexandrine.ogg",
			poster: "_/img/albumart_497x497.jpg"
		},
		{	
			title:"Fur In Winter",
			artist:"FAWN",
			mp3:"_/audio/fur_in_winter.mp3",
			// oga:"_/audio/fur_in_winter.ogg",
			poster: "_/img/albumart_497x497.jpg"
		},
		{
			title:"Second Hand Holiday (ft. Jeff Tuttle and Chris Pennie)",
			artist:"The Armed",
			mp3:"_/audio/second_hand_holiday.mp3",
			// oga:"_/audio/second_hand_holiday.ogg",
			poster: "_/img/albumart_497x497.jpg"
		},
		{
			title:"What Child is This",
			artist:"Daniel",
			mp3:"_/audio/what_child_is_this.mp3",
			// oga:"_/audio/what_child_is_this.ogg",
			poster: "_/img/albumart_497x497.jpg"
		},
		{
			title:"Winter Once Again",
			artist:"Lightning Love",
			mp3:"_/audio/winter_once_again.mp3",
			// oga:"_/audio/winter_once_again.ogg",
			poster: "_/img/albumart_497x497.jpg"
		}
	], {
		playlistOptions: {
			autoPlay: false,
			loopOnPrevious: false,
			shuffleOnLoop: true,
			enableRemoveControls: false,
			displayTime: 'slow',
			addTime: 'slow',
			removeTime: 'fast',
			shuffleTime: 'slow'
	},
		swfPath: "",
		supplied: "mp3"
		// supplied: "webmv, ogv, m4v, oga, mp3"
});
	
function calcParallax(tileheight, speedratio, scrollposition) {
	//    by Brett Taylor http://inner.geek.nz/
	//    originally published at http://inner.geek.nz/javascript/parallax/
	//    usable under terms of CC-BY 3.0 licence
	//    http://creativecommons.org/licenses/by/3.0/
	return ((tileheight) - (Math.floor(scrollposition / speedratio) % (tileheight+1)));
}

$(window).scroll(function() {
	var posX = (document.documentElement.scrollLeft) ? document.documentElement.scrollLeft : window.pageXOffset;
	var posY = (document.documentElement.scrollTop) ? document.documentElement.scrollTop : window.pageYOffset;

	var snowflake_left = document.getElementById('snowflakes-left');
	var snowflake_right = document.getElementById('snowflakes-right');
	var snowflakessparallax = calcParallax(1790, .5, posY);
	snowflake_left.style.backgroundPosition = "0 " + snowflakessparallax + "px"; 
	snowflake_right.style.backgroundPosition = "0 " + snowflakessparallax + "px"; 
});

});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/
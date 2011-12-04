// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function(){

function setContainerHeight() {
	
	if($(window).height() >= 600) {
		//$('.resizer-container').height($(window).height());
		$('.resizer-container').stop().animate({
			height: $(window).height()
		}, 300, 'easeOutElastic');
		$('.centerizer').each(function(index) {
			setInnerContainerY($(this), {
				width:	$(window).width(),
				height: $(window).height()
			});
		});
	}
}

function setInnerContainerY(ele, options) {
		
	var x = (options.width-$(ele).width())/2;
	var y = (options.height-$(ele).height())/2;
		
	$(ele).stop().animate({
		'top': y+20,
		'left': x
	}, 1200, 'easeOutElastic');
}



$(window).resize(function(event) {
	setContainerHeight();
});

setContainerHeight();

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
			swfPath: "js",
			supplied: "mp3"
			// supplied: "webmv, ogv, m4v, oga, mp3"
	});
});

/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/
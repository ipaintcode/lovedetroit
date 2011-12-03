// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function(){

function setContainerHeight() {
	$('.artist-container, footer').height($(window).height());
}

setContainerHeight();

$(window).resize(function(event) {
	setContainerHeight();
});

var myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer",
		cssSelectorAncestor: "#jp_container"
	}, [
		{	
			title:"Alexandrine",
			artist:"Millions of Brazilians",
			mp3:"_/audio/alexandrine.mp3",
			oga:"_/audio/alexandrine.ogg",
			poster: "_/img/albumart_497x497.jpg"
		},
		{	
			title:"Fur In Winter",
			artist:"FAWN",
			mp3:"_/audio/fur_in_winter.mp3",
			oga:"_/audio/fur_in_winter.ogg",
			poster: "_/img/albumart_497x497.jpg"
		},
		{
			title:"Second Hand Holiday (ft. Jeff Tuttle and Chris Pennie)",
			artist:"The Armed",
			mp3:"_/audio/second_hand_holiday.mp3",
			oga:"_/audio/second_hand_holiday.ogg",
			poster: "_/img/albumart_497x497.jpg"
		},
		{
			title:"What Child is This",
			artist:"Daniel",
			mp3:"_/audio/what_child_is_this.mp3",
			oga:"_/audio/what_child_is_this.ogg",
			poster: "_/img/albumart_497x497.jpg"
		},
		{
			title:"Winter Once Again",
			artist:"Lightning Love",
			mp3:"_/audio/winter_once_again.mp3",
			oga:"_/audio/winter_once_again.ogg",
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
			supplied: "webmv, ogv, m4v, oga, mp3"
	});
});

/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/
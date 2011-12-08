// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function(){

function setContainerHeight() {
	
	var newHeight = ($(window).height() >= 600) ? $(window).height() : 600;

	$('.resizer-container').stop().animate({
		height: newHeight
	}, 300, 'easeOutElastic');
	$('.centerizer').each(function(index) {
		setInnerContainerY($(this), {
			width:	$(window).width(),
			height: newHeight
		});
	});
	
	$('.snowflake-container-left, .snowflake-container-right').height(0);
	$('.snowflake-container-left, .snowflake-container-right').height($(document).height());
}

function setInnerContainerY(ele, options) {
	
	var hWrapper = $(ele).parent().parent().find('.animate-wrapper');
	
	var x = (options.width-$(ele).width())/2;
	var y = (options.height-$(ele).height())/2;
	var minWidth = (options.width <= 960) ? 0 : x;
	
	var xAlt = (options.width-$(hWrapper).width())/2;
	var yAlt = (options.height-$(hWrapper).height())/2;
	var minWidthAlt = (options.width <= 960) ? 0 : xAlt;
	
	$(ele).stop().animate({
		'top': y+20,
		'left': minWidth
	}, 1200, 'easeOutElastic');
	
	$(hWrapper).stop().animate({
		'top': yAlt+20,
		'left': minWidthAlt
	}, 1600, 'easeOutElastic');

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
	$('.snowflake-container-left, .snowflake-container-right').stop().animate({opacity: 1}, 500);
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

$('.artist-status, div.jp-playlist').hover(function() {
	$('div.jp-playlist').css('borderTop', '1px solid #E5EAEA');
	$('div.jp-playlist').stop().animate({height: 355}, 300);
	$('.playlist-shadow').stop().animate({height: 355}, 300);
}, function() {
	$('div.jp-playlist').stop().animate({height: 0}, 300, function() {
		$('div.jp-playlist').css('borderTop', 'none');
	});
	$('.playlist-shadow').stop().animate({height: 0}, 300);
});

$('.artist-social a').each(function(index) {
	var c = $(this).css('color');
	$(this).attr('oldColor', c);
});

$('.artist-social a').hover(function() {
	$(this).stop().animate({
		color: "#FF4E48"}, 300);
}, function() {
	$(this).stop().animate({color: $(this).attr('oldColor')}, 300);
});

$('.play-now a').hover(function() {
	$(this).stop().animate({opacity: .5}, 500);
}, function() {
	$(this).stop().animate({opacity: 1}, 500);
});

$('.play-now a').click(function(event) {
	var id = myPlaylist.play();
	var eleString = ".artist-"+(id+1);
	$('html,body').stop().animate({
		scrollTop: $(eleString).offset().top
	}, 500);
	
	$(this).stop().delay(200).animate({
		opacity: 1
	}, 200);
	
	$('li.album-art').stop().animate({
	  'background-position-x': '0',
	  'background-position-y': ((id+1)*70)*-1+"px"
	}, 500);
});

$('.billboard h2 span, .share span, .billboard-hovers').hover(function() {
	$(this).stop().animate({opacity: .5}, 200);
}, function() {
	$(this).stop().animate({opacity: 1}, 200);
});

var myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer",
		cssSelectorAncestor: "#jp_container"
	}, [
		{
			title:"When The Key Turns",
			artist:"Computer Perfection",
			mp3:"_/audio/When-the-Key-Turns.mp3",
			poster: "_/img/album-covers.png",
			albumID: "5" //1
		},
		{	
			title:"One More Round With Rudolph",
			artist:"Daniel",
			mp3:"_/audio/One-More-Round-With-Rudolph.mp3",
			poster: "_/img/album-covers.png",
			albumID: "4"
		},
		{
			title:"Xmas Break",
			artist:"Will Sessions",
			mp3:"_/audio/Xmas-Break.mp3",
			poster: "_/img/album-covers.png",
			albumID: "3"
		},
		{	
			title:"Christmas in CDG (Live)",
			artist:"The History of Pan!c",
			mp3:"_/audio/Christmas-in-CDG-(Live).mp3",
			poster: "_/img/album-covers.png",
			albumID: "2"
		},
		{
			title:"Christmas at Koltay&rsquo;s",
			artist:"Floods",
			mp3:"_/audio/Christmas-at-Koltays.mp3",
			poster: "_/img/album-covers.png",
			albumID: "1"
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
		swfPath: "_/js/",
		supplied: "mp3",
		wmode: "window"
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
	var snowflakessparallax = calcParallax(1790, .6, posY);
	snowflake_left.style.backgroundPosition = "0 " + snowflakessparallax + "px"; 
	snowflake_right.style.backgroundPosition = "0 " + snowflakessparallax + "px"; 
});

// GOOGLE ANALYTICS
$.trackPage('UA-20230862-2');
$.fn.track.defaults.debug = true;

$('.download-now').track({
	category : 'download-album'
});

$('.jp-playlist-item').track({
	category : 'playlist',
	value: $(this).text()
});

$(document).bind("contextmenu",function(e){
	return false;
});

});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/
$(document).ready(function(){

///////////////////////////////////////////////////////////
// Change background
///////////////////////////////////////////////////////////

var backgrounds = ["url(images/cities/beijing02.jpg)", 
				   "url(images/cities/beijing03.jpg)", 
				   "url(images/cities/shanghai01.jpg)",
           "url(images/cities/shanghai02.jpg)",
           "url(images/cities/hongkong01.jpg)",
           "url(images/cities/hongkong02.jpg)",
           "url(images/cities/hongkong03.jpg)",
           "url(images/cities/hongkong04.jpg)", 
				   "url(images/cities/london01.jpg)"];

function changeImage() {
	$('#bodyPic').removeClass('bodyPicIm')
  $('#bodyPic')
    .fadeOut(400, function() {
        $('#bodyPic').css('background-image', backgrounds[i]);
    })
    .fadeIn(400); 
	
    i = i + 1;
	
    if( i >= backgrounds.length) {
		i = 0;
	}
}

var i = 0;
setInterval(changeImage, 6000);

///////////////////////////////////////////////////////////
// Open Close experience details
///////////////////////////////////////////////////////////

function PlusMinusexpand () {
	$(this).parent().parent().find(".hiddenExp").slideToggle().toggleClass("hidden");
	$(this).toggleClass("buttonPlus");
  $(this).toggleClass("buttonMinus");
}

function  expandall () {
  $(this).parent().parent().find(".hiddenExp").slideToggle().toggleClass("hidden");
}

$(".buttonPlus").on("click", PlusMinusexpand);
$(".buttonMinus").on("click", PlusMinusexpand);
$(".openall").on("click", expandall);

///////////////////////////////////////////////////////////
// Nav menu selection upon scroll and for animation bars
///////////////////////////////////////////////////////////

var waypoint = new Waypoint({
  element: $('#progressbars'),
  handler: function() {
    moveProgressBar();
  },
  offset: '20%'
})

function navMenuWay(bar) {
  var restAnim = ['.navAnim1', '.navAnim2', '.navAnim3', '.navAnim4','.navAnim5'];
  $(bar).addClass('navAnim navAnim:focus navAnim:active navAnim:before navAnim:focus:before navAnim:active:before');
  restAnim.splice($.inArray(bar, restAnim), 1);
  $.each(restAnim, function(index, value){
    $(value).removeClass('navAnim navAnim:focus navAnim:active navAnim:before navAnim:focus:before navAnim:active:before');
  });
};

var waypoint = new Waypoint({
  element: $('.navAnimation1'),
  handler: function() {
    a = '.navAnim1';
    navMenuWay(a);
  },
})

var waypoint = new Waypoint({
  element: $('.navAnimation2'),
  handler: function() {
    a = '.navAnim2';
    navMenuWay(a);
  },
  offset: '20%'
}) 

var waypoint = new Waypoint({
  element: $('.navAnimation3'),
  handler: function() {
    a = '.navAnim3';
    navMenuWay(a);
  },
  offset: '20%'
}) 

var waypoint = new Waypoint({
  element: $('.navAnimation4'),
  handler: function() {
    a = '.navAnim4';
    navMenuWay(a);
  },
  offset: '20%'
}) 

var waypoint = new Waypoint({
  element: $('.navAnimation5'),
  handler: function() {
    a = '.navAnim5';
    navMenuWay(a);
  },
  offset: '20%'
}) 

$('#scrollNav').localScroll({duration:800});


///////////////////////////////////////////////////////////
// Responsive website
///////////////////////////////////////////////////////////

// $(window).on('resize', function() {
//     if($(window).height() < 870) {
//         $('.navMobile').removeClass('hidden');
//     }else{
//         $('.navMobile').addClass('hidden');
//     }
// })

///////////////////////////////////////////////////////////
// Skills bar animation
///////////////////////////////////////////////////////////

function moveProgressBar() {
    $('.progress-wrap').each(function(){

        var getPercent = ($(this).data('progress-percent') / 100);
        var getProgressWrapWidth = $('.progress-wrap').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 2500;
        var progressBar = $(this).find('.progress-bar');
        
        progressBar.stop().animate({
            left: progressTotal
        }, animationLength);
    });
};

$(window).resize(function() {
    moveProgressBar();
});

});
















































































































































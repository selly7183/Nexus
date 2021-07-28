$(document).ready(function(){

$("#gnb li a").on('click', function(){
	$('#gnb li a').removeClass('active');
	$(this).addClass('active');
});
$("#gnb li a.active::after").on('click', function(){
	$('#gnb li a.active::after').removeClass('active');
	$(this).addClass('active');
});

$(window).ready(function(){
	$("#gnb li a").eq(1).addClass("active");
});


$(window).on("scroll",function(){
	var pos=$(window).scrollTop();
	event.preventDefault();
});


$(".sch img").on("click",function(){
	event.preventDefault();
	$("input").fadeIn(500);
	$(".sch").css("display","none");
	$(".clear").fadeIn(500);
});

$(".clear").on("click",function(){
	event.preventDefault();
	$("input").fadeOut();
	$(".sch").fadeIn(500);
	$(".clear").fadeOut();
});

$("a.lang1").on("click",function(){
	event.preventDefault();
	$(this).css("text-decoration","underline");
	$(this).css("opacity","1");
	$("a.lang2").css("text-decoration","none");
	$("a.lang2").css("opacity",".6");
	$("a.lang3").css("text-decoration","none");
	$("a.lang3").css("opacity",".6");
});

$("a.lang2").on("click",function(){
	event.preventDefault();
	$(this).css("text-decoration","underline");
	$(this).css("opacity","1");
	$("a.lang1").css("text-decoration","none");
	$("a.lang1").css("opacity",".6");
});
$("a.lang3").on("click",function(){
	event.preventDefault();
	$(this).css("text-decoration","underline");
	$(this).css("opacity","1");
	$("a.lang2").css("text-decoration","none");
	$("a.lang2").css("opacity",".6");
	$("a.lang1").css("text-decoration","none");
	$("a.lang1").css("opacity",".6");
});



$(".content").hide();
$(".content").first().show();
$(".tabs li").first().addClass("select");

$(".tabs li").on("click",function(){
	event.preventDefault();
	var active=$(this).find("a").attr("href");
	$(".content").hide();
	$(active).show();
	$(".tabs li").removeClass("select");
	$(this).addClass("select");
});

});


function openNav() {
  document.getElementById("myNav").style.height = "35%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

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
	$("#gnb li a").eq(3).addClass("active");
});

$(".sch img").on("click",function(){
	event.preventDefault();
	$("#mysearch").fadeIn(500);
	$(".sch").css("display","none");
	$(".clear").fadeIn(500);
});

$(".clear").on("click",function(){
	event.preventDefault();
	$("#mysearch").fadeOut();
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

$(".more2").on("click",function(){
	event.preventDefault();
	$(".row:nth-child(3)").fadeIn(500),
	$(".more2").css("display","none"),
	$("footer").css("margin-top","500px");
});
$(".more3").on("click",function(){
	event.preventDefault();
	$(".row:nth-child(3)").fadeIn(500),
	$(".more3").css("display","none"),
	$("footer").css("margin-top","1500px");
});
$(".more4").on("click",function(){
	event.preventDefault();
	$(".row:nth-child(3)").fadeIn(500),
	$(".more4").css("display","none"),
	$("footer").css("margin-top","900px");
});

});

function openNav() {
  document.getElementById("myNav").style.height = "35%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

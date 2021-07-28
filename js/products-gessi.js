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

$(".slide-group").slick({	
	dots:true,
	arrows:true
});

$(window).on("scroll",function(){
	var pos=$(window).scrollTop();
	//alert(pos);
	$(".section3-box")[pos>450?"addClass":"removeClass"]("animate__fadeInUp");
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

});


function openNav() {
  document.getElementById("myNav").style.height = "35%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

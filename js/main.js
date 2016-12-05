$("#resumeEducation").hide();
$("#resumeExperience").hide();
$("#profBlogBlog").hide();
$("#profBlogInterviews").hide();

$("#playButton").on("click", function(e){
	e.preventDefault();
	$(".work").fadeOut(function(){
	$(".play").fadeIn();
	});
	$("body").attr("class", "playStyle");
	$("html").addClass("playHtml");
	$("html").removeClass("workHtml");
});

$("#workButton").on("click", function(e){
	e.preventDefault();
	$(".play").fadeOut(function(){
	$(".work").fadeIn()

	});
	$(".workLearn").hide();
	$(".playLearn").hide();
	$('body').attr('class', 'workStyle');
	$("html").removeClass('playHtml');
	$("html").addClass("workHtml");
});

$("#resumeButton").on("click", function(e){
	e.preventDefault();
	$("#profBlog").fadeOut(function(){
	$("#resume").fadeIn()
	});

});

$("#profBlogButton").on("click", function(e){
	e.preventDefault();
	$("#resume").fadeOut(function(){
	$("#profBlog").fadeIn()	
	});
});

$("#travelButton").on("click", function(e){
	e.preventDefault();
	$("#foodBlog").fadeOut(function(){
	$("#travel").fadeIn()
	});
});

$("#foodBlogButton").on("click", function(e){
	e.preventDefault();
	$("#travel").fadeOut(function(){
	$("#foodBlog").fadeIn()	
	});
});

$("#wlButt").on("click", function(e) {
  // prevent the standard link operation on click
  e.preventDefault();
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $("#resumeButton");
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $("body").animate({
    scrollTop: targetOffset
  }, 300);
});


$("#plButt").on("click", function(e) {
  // prevent the standard link operation on click
  e.preventDefault();
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $("#travelButton");
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $("body").animate({
    scrollTop: targetOffset
  }, 300);
});

$("section nav").on("click", function(e) {
  // prevent the standard link operation on click
  e.preventDefault();
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $("#worklearn");
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $("body").animate({
    scrollTop: targetOffset
  }, 300);
});

$("#headerEducation").on("click",function(){
	$("#resumeEducation").fadeToggle();
});

$("#headerExperience").on("click",function(){
  $("#resumeExperience").fadeToggle();
});

$("#headerBlogs").on("click",function(){
	$("#profBlogBlog").fadeToggle();
});

$("#headerInterviews").on("click",function(){
  $("#profBlogInterviews").fadeToggle();
});

$(".blogPic1").hover(function(){
  $(".imgDescription1").fadeIn();
})

$("#resumeDL").click(function() {
    window.location.href = "https://drive.google.com/uc?export=download&id=0ByGATdhnIKQQckhITUJFVHBzdGc";
});

$("#playButton").on("click", function(e){
	e.preventDefault();
	$(".work").fadeOut(function(){
		$(".play").fadeIn();
	});
	$('body').attr('class', 'playStyle');
});

$("#workButton").on("click", function(e){
	e.preventDefault();
	$(".play").fadeOut(function(){
	$(".work").fadeIn()

	});
	$(".workLearn").hide();
	$(".playLearn").hide();
	$('body').attr('class', 'workStyle');
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

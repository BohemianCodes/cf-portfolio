//Twitter Code
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

$(document).ready(function(){

// Smooth Scrolling 
	var $root = $('html, body');

	$('.navbar-nav a').click(function() {
		var href = $.attr(this, 'href');

		if (href != undefined && href != '#') {
			$root.animate({
				scrollTop: $(href).offset().top
			}, 500, function () {
				window.location.hash = href;
			});
		}
		return false;
	});

// Tooltips jQuery
		$(function () {
		 $('#blog_link').tooltip();
		});

		$(function () {
			$('[data-toggle="tooltip"]').tooltip();
		});

// JS that causes the iframe video to stop when modal is exited
		$('.sierra_nevada').each(function(){
				var src = $(this).find('iframe').attr('src');

			$(this).on('click', function(){

				$(this).find('iframe').attr('src', '');
				$(this).find('iframe').attr('src', src);

			});
		});

// Contact-Form jQuery. 

		$("#thankyou").hide();

		$("#form-button").on("click", function () {
			var comment = $(".message-box").val();
			console.log(comment);

			if (comment === "") {
				$(".message-box").css("border", "1.5px solid red");
				} else {
				$("#visible-comment").html(comment);
				$(".message-box").hide();
				$("#form-button").hide();
				$("#name").hide();
				$("#email").hide();
				$("#thankyou").fadeIn(600)
				$("#thankyou").html("I have received your message, thank you!");
			}
			return false;
		});

		$(".message-box").on("keyup", function () {
			console.log("keyup happened");
			var charCount = $(".message-box").val().length;
			$("#char-count").html("Characters: " + charCount);

			if (charCount > 100) {
				$("#char-count").css({"color": "red", "font-weight": "bold"});
			} else {
				$("#char-count").css("color", "#FCFCFC");

			}
		});

// Work Section
		for(var i = 0; i < works.length; ++i ) {
			$(".work-row").append(' \
			    <div class="col-md-3 col-sm-6 work-box"> \
			    <img src="' + works[i] + '" \
			     class="img-responsive"></a></div> \
			  ');

			var images = $(".work-row img");

			if(i%2 === 0) {
				$(images[i]).css("border", "2px solid salmon");
			} else {
				$(images[i]).css("border", "2px solid DodgerBlue");
			}
			
		};

			


}); //end document Ready function

//Twitter Code
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


//Google Maps
var map;
var myLatLng = {lat: 52.5230489, lng: 13.5076008}

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 12,
          mapTypeId: 'hybrid',
        });

        map.setTilt(45);

        var image = 'http://cf.bohemiancodes.com/img/visit.png';
         var pin = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image,
            animation: google.maps.Animation.DROP,
            title: 'Bohemian Codes Office',
          });

        pin.addListener('click', function() {
            map.setZoom(16);
            map.setCenter(marker.getPosition());
          });
      }

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
				$("#thankyou").fadeIn(600);
				$("#char-count").hide();
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

// Work Section - populating work samples from work.js file

		for(var i = 0; i < works.length; ++i ) {
			$(".work-row").append(' \
					<div class="col-xs-4 work-box"> \
					<a href="' + works[i].url +'" class="work-img">\
					<img class="img-responsive" src="' + works[i].pic + '">\
					<span class="info" id="' + works[i].id + '"><p class="proj-title"></p>' + works[i].title + ' </span>\
					</a>\
					</div>\
				');

		}; //end for-loop

// Fade in and out of title when hovering over images
		$(".work-img").mouseenter( function() {
			$(".info", this).fadeIn();
		});

		$(".work-img").mouseleave( function() {
			$(".info", this).fadeOut();
		});
			


}); //end document Ready function

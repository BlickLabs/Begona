// init controller
(function () {
	function galleryFunction() {
		var controller = new ScrollMagic.Controller();

		// build scene
		var scene = new ScrollMagic.Scene({triggerElement: ".gallery-wrapper #loader", triggerHook: "onEnter"})
			.addTo(controller)
			.on("enter", function (e) {
				if (!$(".gallery-wrapper #loader").hasClass("active")) {
					$(".gallery-wrapper #loader").addClass("active");
					if (console){
						console.log("loading new items");
					}
					// simulate ajax call to add content using the function below
					setTimeout(getPhotos, 1000, 9);
				}
			});

		function getPhotos() {
		  var data = { csrf: $('[name="csrfmiddlewaretoken"').val() };
		  $.ajax({
		    url: 'https://jsonplaceholder.typicode.com/posts/',
		    method: 'GET',
		    data: $.param(data),
		    headers: {
		      'X-CSRFToken': data.csrf,
		      'Content-Type': 'application/x-www-form-urlencoded'
		    }
		  })
		    .done(function (data) {
		      var currentElements = $('#carousel-bounding-box .carousel-inner').children().length;
		      data.slice(0, 9).forEach(function (item) {
		        $('<div class="col-sm-4 spacer"></div>')
		          .appendTo('.gallery-elements')
		          .append('<div class="gallery-img" data-toggle="modal" data-target="#galleryOne"><a class="gallery-image-wrapper" href="#myCarousel" data-slide-to="' + currentElements + '"><img src="http://dev.com:8000/static/img/galeria/large/gallery1.jpg" class="img-responsive" alt="Gallery" /></a></div>');

		    		$('<div class="item" data-slide-number="' + currentElements + '"></div>')
		    			.appendTo("#carousel-bounding-box .carousel-inner")
		          .append('<img src="http://dev.com:8000/static/img/galeria/large/gallery1.jpg">');

		        currentElements += 1;
		      });
		      scene.update();
		    	$(".gallery-wrapper #loader").removeClass("active");
		    });
		}
	}
	if ($('.gallery-wrapper').length) {
		galleryFunction();
	}
})();
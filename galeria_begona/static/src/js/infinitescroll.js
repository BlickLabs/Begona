// init controller
(function () {
	function galleryFunction() {
		var controller = null,
			scene = null,
			nextPage = $('.gallery-wrapper').attr('data-gallery-url');

		getPhotos(true);

		function ScrollMagic__init() {
			controller = new ScrollMagic.Controller();
			scene = new ScrollMagic.Scene({triggerElement: ".gallery-wrapper #loader", triggerHook: "onEnter"})
				.addTo(controller)
				.on("enter", infinitescroll);
		}

		function infinitescroll (e) {
			if (!$(".gallery-wrapper #loader").hasClass("active")) {
				$(".gallery-wrapper #loader").addClass("active");
				getPhotos();
			}
		}

		function getPhotos(first) {
		  var data = { csrf: $('[name="csrfmiddlewaretoken"').val() };
		  $.ajax({
		    url: nextPage,
		    method: 'GET',
		    data: $.param(data),
		    headers: {
		      'X-CSRFToken': data.csrf,
		      'Content-Type': 'application/x-www-form-urlencoded'
		    }
		  })
		    .done(function (data) {
		      var currentElements = $('#carousel-bounding-box .carousel-inner').children().length,
						elements = data.results;
					nextPage = data.next;
		      elements.forEach(function (item) {
		        $('<div class="col-sm-4 spacer"></div>')
		          .appendTo('.gallery-elements')
		          .append('<div class="gallery-img" data-toggle="modal" data-target="#galleryOne"><a class="gallery-image-wrapper" href="#myCarousel" data-slide-to="' + currentElements + '"><img src="' + item.image + '" class="img-responsive" alt="Gallery" /></a></div>');

		    		$('<div class="item" data-slide-number="' + currentElements + '"></div>')
		    			.appendTo("#carousel-bounding-box .carousel-inner")
		          .append('<img src="' + item.image + '">');

		        currentElements += 1;

		      });
					if (first) {
						$('#carousel-bounding-box .carousel-inner').children().first().addClass('active');
						ScrollMagic__init();
					}
					if (nextPage === null) {
						controller.destroy(true);
						controller = null;
						scene = null;
						$('.gallery-wrapper #loader').remove();
					} else {
		      	scene.update();
					}
		    	$(".gallery-wrapper #loader").removeClass("active");
		    });
		}
	}
	if ($('.gallery-wrapper').length) {
		galleryFunction();
	}
})();
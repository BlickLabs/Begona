$(document).ready(function() {
	$('.parallax-window').parallax({});

  $('#carousel-text').html($('#slide-content-0').html());
    //Handles the carousel thumbnails
  $('[id^=carousel-selector-]').click( function(){
    var id = this.id.substr(this.id.lastIndexOf("-") + 1);
     id = parseInt(id);
    $('#myCarousel').carousel(id);
  });

    // When the carousel slides, auto update the text
  $('#myCarousel').on('slid.bs.carousel', function (e) {
    var id = $('.item.active').data('slide-number');
    $('#carousel-text').html($('#slide-content-'+id).html());
  });

	$('.boot-step-1-content input, .boot-foot-instructions input, .chaps-step-1-content input').focus(function (e) {
		if($(this).closest('.boot-foot-instructions').length) {
			$('.boot-foot-instructions .instruction').removeClass('active');
			$(this).closest('.instruction').addClass('active');
		} else if ($(this).closest('.boot-step-1-content').length) {
			$(this).closest('.input-row').addClass('active')
				.siblings().removeClass('active');
		} else {
			$(this).closest('.leg-part-wrapper').addClass('active')
				.siblings().removeClass('active');
			$(this).addClass('active')
				.parent().siblings().find('input').removeClass('active');
		}
	});

  $('#horse-stop').scrollToFixed({
    limit: $('.stop-scrolleffect').offset().top - $('#horse-stop').height()*0.65
  });
});



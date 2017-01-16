(function () {
  /* globals Vimeo */
  function playFn() {
    var iframe = $('#vimeo_video'),
      player = new Vimeo.Player(iframe[0]),
      videoTop = iframe.offset().top,
      videoHeight = iframe.height(),
      navbarHeight = $('.homepage-header').height();

    $(window).scroll(function () {
      if ($(this).scrollTop() >= videoTop - navbarHeight - videoHeight/3) {
        player.play();
      } else {
        player.pause();
      }
    });
  }
  if ($('#vimeo_video').length) {
    playFn();
  }
})();
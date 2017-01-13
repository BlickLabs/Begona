(function () {
  function products() {
    var allElements = $('#ProductOne .carousel-inner .item');
    $('a[data-toggle="portfilter"]').click(function (e) {
      var tag = $(this).attr('data-target'),
        elements = null,
        links = tag === 'all' ? $('[data-tag] a') : $('[data-tag*="' + tag + '"] a');
      allElements.removeClass('active').removeAttr('style');
      elements = allElements.filter('[data-categories*="' + tag + '"]');

      $('#ProductOne .carousel-inner').children().remove();
      $('#ProductOne .carousel-inner').append(elements);
      $('#ProductOne .carousel-inner .item').first().addClass('active');
      links.toArray().forEach(function (item) {
        var $item = $(item),
          index = elements.index($('[data-slide-number="' + $item.attr('data-original-slide-to') + '"]'));
          $item.attr('data-slide-to', index);
      });

    });
  }
  if ($('.product').length) {
    products();
  }
})();
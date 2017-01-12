(function (global) {
  global.getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(global.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
  };
  var _color = null,
    _product = null,
    color = '',
    accept_color3 = true;

  if ($('#model').length) {
    _color = getUrlParameter('color');
    _product = getUrlParameter('producto');
    if (_product) {
      _product = _product.replace('+', ' ');

      if (_product == 'Botín Clásico' || _product == 'Botin Clasico' || _product == 'botín clásico' || _product == 'botin clasico' || _product == 'Botín clásico' || _product == 'Botin clasico' || _product == 'Botin clásico' || _product == 'Botín clasico' || _product == 'botin clásico') {
        accept_color3 = false;
      }

      if (!accept_color3) {
        $('option[value="Camello"]').remove();
      }

      $('#model').val(_product);

      if (_color) {
        if (_color == 'Café' || _color == 'café' || _color == 'Cafe' || _color == 'cafe' ) {
          $('#color').val('Café');
        } else if (_color == 'Camello' || _color == 'camello' && accept_color3) {
          $('#color').val('Camello');
        } else {
          $('#color').val('Negro');
        }
      }
    }
  }
})(window);

(function () {
  $.extend($.validator.messages, {
    required: "Este campo es obligatorio",
    remote: "Please fix this field",
    email: "Ingresa una dirección de correo válida",
    url: "Ingresa una URL válida",
    date: "Ingresa una fecha válida",
    dateISO: "Ingresa una fecha válida (ISO)",
    number: "Ingresa un número válido",
    digits: "Solo se permiten números dígitos",
    creditcard: "Ingresa un número de tarjeta válido",
    equalTo: "Los valores deben coincidir",
    accept: "Please enter a value with a valid extension",
    maxlength: jQuery.validator.format("No ingreses más de {0} caracteres"),
    minlength: jQuery.validator.format("Ingresa al menos {0} caracteres"),
    rangelength: jQuery.validator.format("El texto debe tener entre {0} y {1} caracteres"),
    range: jQuery.validator.format("Ingresa un valor entre {0} y {1}"),
    max: jQuery.validator.format("Ingresa un valor menor o igual que {0}"),
    min: jQuery.validator.format("Ingresa un valor mayor o igual que {0}")
  });

  $('#booty-form').validate({
    rules: {
      first_name: {
        required: true
      }
    }
  });
})();
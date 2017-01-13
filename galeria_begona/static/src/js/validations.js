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
    _color = global.getUrlParameter('color');
    _product = global.getUrlParameter('producto');
    if (_product) {
      _product = _product.replace('+', ' ');

      if (_product === 'Botín Clásico' || _product === 'Botin Clasico' || _product === 'botín clásico' || _product === 'botin clasico' || _product === 'Botín clásico' || _product === 'Botin clasico' || _product === 'Botin clásico' || _product === 'Botín clasico' || _product === 'botin clásico') {
        accept_color3 = false;
      }

      if (!accept_color3) {
        $('option[value="Camello"]').remove();
      }

      $('#model').val(_product);

      if (_color) {
        if (_color === 'Café' || _color === 'café' || _color === 'Cafe' || _color === 'cafe' ) {
          $('#color').val('Café');
        } else if (_color === 'Camello' || _color === 'camello' && accept_color3) {
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

  $.validator.setDefaults({
    invalidHandler: function (event, validator) {
      var form = $(this);
      form.find('.form-message')
      .removeClass($('#contact-form').hasClass('success') ? 'success' : 'error')
      .html('');
    },
    submitHandler: function (form) {
      var $form = $(form).serialize(),
        fields = $(form).find('select, input, textarea, button'),
        formMessage = $(form).find('.form-message'),
        successMessage = $('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),
        errorMessage = $('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),
        setMessage = function (success) {
          var message = success ? successMessage : errorMessage;
          fields.removeAttr('disabled');
          formMessage.removeClass(success ? 'error' : 'success');
          formMessage.addClass(success ? 'success' : 'error');
          formMessage.html(message);
        };

      fields.attr('disabled', 'disabled');
      formMessage.html('');
      $(form).find('.loader').css('display', 'block');
      $.ajax({
        url: $(form).attr('action'),
        method: 'POST',
        data: $form,
        headers: {
          'X-CSRFToken': $(form).find('[name="csrfmiddlewaretoken"]').val(),
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .done(function (data) {
          setMessage(parseInt(data) === 1);
          form.reset();
        })
        .fail(function () {
          setMessage(false);
        })
        .always(function () {
          fields.removeAttr('disabled');
          $(form).find('.loader').css('display', 'none');
        });
    }
  });

  $('#contact-form').validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      address: {
        required: true
      },
      message: {
        required: true
      }
    }
  });

  $('#boots-form').validate({
    rules: {
      leg_circ_12: {
        required: true
      },
      leg_circ_16: {
        required: true
      },
      leg_circ_20: {
        required: true
      },
      leg_circ_24: {
        required: true
      },
      leg_circ_28: {
        required: true
      },
      leg_circ_32: {
        required: true
      },
      leg_circ_36: {
        required: true
      },
      leg_circ_40: {
        required: false
      },
      leg_circ_44: {
        required: false
      },
      finger_circ: {
        required: true
      },
      bone_finger_circ: {
        required: true
      },
      instep_circ: {
        required: true
      },
      circ_heel_to_foot: {
        required: true
      },
      circ_tip_to_hell: {
        required: true
      },
      name: {
        required: true
      },
      last_name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      model: {
        required: true
      },
      number: {
        required: true
      },
      color: {
        required: true
      },
      street_col: {
        required: true
      },
      state: {
        required: true
      },
      cp: {
        required: true
      },
      description: {
        required: true
      }
    }
  });

  $('#booties-form').validate({
    rules: {
      name: {
        required: true
      },
      last_name: {
        required: true
      },
      street_col: {
        required: true
      },
      state: {
        required: true
      },
      cp: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      model: {
        required: true
      },
      number: {
        required: true
      },
      color: {
        required: true
      },
      element: {
        required: true
      }
    }
  });

  $('#chaps-form').validate({
    rules: {
      hip_circ: {
        required: true
      },
      high_circ: {
        required: true
      },
      med_circ: {
        required: true
      },
      down_circ: {
        required: true
      },
      calf_circ: {
        required: true
      },
      circ_27: {
        required: true
      },
      circ_22: {
        required: true
      },
      circ_17: {
        required: true
      },
      circ_12: {
        required: true
      },
      mouth_circ: {
        required: true
      },
      name: {
        required: true
      },
      model: {
        required: true
      },
      last_name: {
        required: true
      },
      street_col: {
        required: true
      },
      state: {
        required: true
      },
      cp: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      number: {
        required: true
      },
      color: {
        required: true
      },
      with_initials: {
        required: true
      },
      initials: {
        required: true
      }
    }
  });
})();
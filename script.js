$(document).ready(function(){
    var selectedMenu;

    $.fn.display = (showConverted) => {
        $('.converted-num').text(showConverted);
    }

    $.fn.convert = () => {
      var number = $('#numberVal').val();
      var conceptName = $('.form-select').find(":selected").val();

      selectedMenu = conceptName;

      if (selectedMenu == "bToD") {
        var digit = parseInt(number, 2);
        $.fn.display(digit);
      } else if (selectedMenu == "oToD") {
        var digit = parseInt(number , 8);
        $.fn.display(digit);
      } else if (selectedMenu == "hToD") {
        var digit = parseInt(number , 16);
        $.fn.display(digit);
      } else if (selectedMenu == "dToB") {
        var digit = (number >>> 0).toString(2);
        $.fn.display(digit);
      } else if (selectedMenu == "dToO") {
        var digit = (number >>> 0).toString(8);
        $.fn.display(digit);
      } else if (selectedMenu == "dToH") {
        var digit = (number >>> 0).toString(16);
        $.fn.display(digit);
      } else if (selectedMenu == "bToO") {
        var decimal = parseInt(number , 2);
        var digit = decimal.toString(8);
        $.fn.display(digit);
      } else if (selectedMenu == "bToH") {
        var decimal = parseInt(number , 2);
        var digit = decimal.toString(16);
        $.fn.display(digit);
      } else if (selectedMenu == "oToB") {
        var decimal = parseInt(number , 8);
        var digit = decimal.toString(2);
        $.fn.display(digit);
      } else if (selectedMenu == "oToH") {
        var decimal = parseInt(number , 8);
        var digit = decimal.toString(16);
        $.fn.display(digit);
      } else if (selectedMenu == "hToO") {
        var decimal = parseInt(number , 16)
        var digit = decimal.toString(8);
        $.fn.display(digit);
      } else if (selectedMenu == "hToB") {
        var decimal = parseInt(number , 16)
        var digit = decimal.toString(2);
        $.fn.display(digit);
      } 
    }

    $(document).on('keypress',function(e) {
      if(e.which == 13) {
        $.fn.convert();
      }
    });

    $('.convert-number').on('click', () => {
      $.fn.convert();
    });

    $(".form-select").on('change', function() {
      $('.converted-num').text("...");
  });
});

formValidations = {
  init: function () {
    this.valid();
    this.input_mask();
    this.hide_div();
    this.billing_add();
    this.addclassblue();
    this.calculation();
    this.select_update_checkbox();
  },
  valid: function () {
    $("#myForm").validate({
      onfocusout: function (element) {
        this.element(element);
      },
      rules: {
        name1: {
          required: true,
          non_numeric: true,
          minlength: 3
        },
        name2: {
          required: true,
          non_numeric: true,
          minlength: 3
        },
        name3: {
          required: true,
          non_numeric: true,
          minlength: 3
        },
        name4: {
          required: true,
          non_numeric: true,
          minlength: 3
        },
        name5: {
          required: true,
          non_numeric: true,
          minlength: 3
        },
        name6: {
          required: true,
          non_numeric: true,
          minlength: 3
        },
        mail_id: {
          required: true,
          mail: true
        },
        StreetAddress: {
          required: true
        },
        Address2: {
          required: true
        },
        Address3: {
          required: true
        },
        Address4: {
          required: true
        },
        Address5: {
          required: true,
          number: true,
          minlength: 6
        },
        cntry1: {
          required: true
        },
        phone_num: {
          required: true,
          minlength: 10
        },
        send_gift: {
          required: true
        },
        Address11: {
          required: true
        },
        Address12: {
          required: true
        },
        Address13: {
          required: true
        },
        Address14: {
          required: true
        },
        Address15: {
          required: true,
          minlength: 6,
          maxlength: 6
        },
        cntry2: {
          required: true
        },
        phone_num1: {
          required: true,
          minlength: 10
        }
      }
    });
    
  },
  input_mask: function () {
    $("#num_input").inputmask({ "mask": "(999) 999-9999" });
    $("#num1_input").inputmask({ "mask": "(999) 999-9999" });
  },
  hide_div: function () {
    $('input[type="radio"]').change(function () {
      var inputValue = $("input[name = 'send_gift']:checked").val();
      if ((inputValue == "yes")) {
        $("#hide_div").show();
      } else {
        $("#hide_div").hide();
        $("#fname3").val("");
        $("#lname3").val("");
        $("#num1_input").val("");
        $("#address_conf").prop("checked", false);
        $("#Address1").val("");
        $("#Address12").val("");
        $("#Address13").val("");
        $("#Address14").val("");
        $("#Address15").val("");
        $("#countries1").val("");
      }
      
    });
  },
  billing_add: function () {
    function BillingAddress() {
      if ($("#address_conf").is(":checked")) {
        $('#Address1').val($('#Address').val());
        $('#Address1').attr('disabled', 'disabled');
        $('#Address12').val($('#Address2').val());
        $('#Address12').attr('disabled', 'disabled');
        $('#Address13').val($('#Address3').val());
        $('#Address13').attr('disabled', 'disabled');
        $('#Address14').val($('#Address4').val());
        $('#Address14').attr('disabled', 'disabled');
        $('#Address15').val($('#Address5').val());
        $('#Address15').attr('disabled', 'disabled');
        $('#countries1').val($('#countries').val());
        $('#countries1').attr('disabled', 'disabled');
      } else {
        $('#Address1').removeAttr('disabled');
        $('#Address12').removeAttr('disabled');
        $('#Address13').removeAttr('disabled');
        $('#Address14').removeAttr('disabled');
        $('#Address15').removeAttr('disabled');
        $('#countries1').removeAttr('disabled');
      }
    }

    $('#address_conf').click(function () {
      BillingAddress();
      $("#Address1").removeClass("error");
      $("#Address1-error").hide();
      $("#Address12").removeClass("error");
      $("#Address12-error").hide();
      $("#Address13").removeClass("error");
      $("#Address13-error").hide();
      $("#Address14").removeClass("error");
      $("#Address14-error").hide();
      $("#Address15").removeClass("error");
      $("#Address15-error").hide();
      $("#countries1").removeClass("error");
      $("#countries1-error").hide();
    });
  },
  addclassblue: function () {
    $('.item_checkbox').on('change', function () {
      var div = $(this).closest('.items');
      $(this).is(":checked") ? div.addClass("blue") : div.removeClass("blue");
    });
  },
  calculation: function(){
    $(".item_checkbox").on('change', function (){
      var price = 0;
      var qnty = 0;
      var total = 0;
      $(".item_checkbox:checked").each(function() {
        price = parseInt($(this).val());
        qnty = parseInt($(this).parent().find('select', 'item_select').val());
        var amount = (qnty*price);
        total+=amount;
      });
      if (total == 0) {
        $('#value').html("$0.00");
      } else {				
        $('#value').html(total);
      }
    });
  }, 
  select_update_checkbox: function(){
    $(".i_select").on('change', function(){
      $(this).parent().parent().parent().parent().find('input', 'item_checkbox').prop("checked", true);
      var div = $(this).parent().parent().parent().parent();
      $($(this).parent().parent().parent().parent().find('input', 'item_checkbox')).is(":checked") ? div.addClass("blue") : div.removeClass("blue");
      var price = 0;
      var qnty = 0;
      var total = 0;
      $(".item_checkbox:checked").each(function() {
        price = parseInt($(this).val());
        qnty = parseInt($(this).parent().find('select', 'item_select').val());
        var amount = (qnty*price);
        total+=amount;
      });
      if (total == 0) {
        $('#value').html("$0.00");
      } else {				
        $('#value').html(total);
      }
    });
    
  }
}
$(document).ready(function(){
  $("#submit_btn").on('click', function(){
    debugger
    $(".error").parent().addClass("error-div");
  });
});


function Passvalues(){
    var creditfname = document.getElementById("fname1").value;
    localStorage.setItem("Value1", creditfname);
    var creditlname = document.getElementById("lname1").value;
    localStorage.setItem("Value2", creditlname);
    var fname = document.getElementById("fname").value;
    localStorage.setItem("Value3", fname);
    var lname = document.getElementById("lname").value;
    localStorage.setItem("Value4", lname);
    var email = document.getElementById("email_input").value;
    localStorage.setItem("Value5", email);
    var phone_num = document.getElementById("num_input").value;
    localStorage.setItem("Value6", phone_num);
    var add1 = document.getElementById("Address").value;
    localStorage.setItem("Value7", add1);
    var add2 = document.getElementById("Address2").value;
    localStorage.setItem("Value8", add2);
    var city = document.getElementById("Address3").value;
    localStorage.setItem("Value9", city);
    var state = document.getElementById("Address4").value;
    localStorage.setItem("Value10", state);
    var pin = document.getElementById("Address5").value;
    localStorage.setItem("Value11", pin);
    var country = document.getElementById("countries").value;
    localStorage.setItem("Value12", country);
    var s_gift = $(" input[type='radio'][name='send_gift']:checked").val();
    localStorage.setItem("Value13", s_gift);

    var g_fname = document.getElementById("fname3").value;
    localStorage.setItem("Value14", g_fname);
    var g_lname = document.getElementById("lname3").value;
    localStorage.setItem("Value15", g_lname);
    var g_phone_num = document.getElementById("num1_input").value;
    localStorage.setItem("Value16", g_phone_num);
    var g_add1 = document.getElementById("Address1").value;
    localStorage.setItem("Value17", g_add1);
    var g_add2 = document.getElementById("Address12").value;
    localStorage.setItem("Value18", g_add2);
    var g_city = document.getElementById("Address13").value;
    localStorage.setItem("Value19", g_city);
    var g_state = document.getElementById("Address14").value;
    localStorage.setItem("Value20", g_state);
    var g_pin = document.getElementById("Address15").value;
    localStorage.setItem("Value21", g_pin);
    var g_country = document.getElementById("countries1").value;
    localStorage.setItem("Value22", g_country);

    return false;

}





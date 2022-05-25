$(document).ready(function(){
  $("#myForm").validate({
    onfocusout: function(element) {
      this.element(element);
  },
    rules:{
      item:{
        required:true
      },
      name1:{
        required:true,
        non_numeric:true,
        minlength:3
      },
      name2:{
        required:true,
        non_numeric:true,
        minlength:3
      },
      name3:{
        required:true,
        non_numeric:true,
        minlength:3
      },
      name4:{
        required:true,
        non_numeric:true,
        minlength:3
      },
      name5:{
        required:true,
        non_numeric:true,
        minlength:3
      },
      name6:{
        required:true,
        non_numeric:true,
        minlength:3
      },
      mail_id:{
        required:true,
        mail:true
      },
      StreetAddress:{
        required:true
      },
      Address2:{
        required:true
      },
      Address3:{
        required:true
      },
      Address4:{
        required:true
      },
      Address5:{
        required:true,
        minlength:6,
        maxlength:6
      },
      cntry1:{
        required:true
      },
      phone_num:{
        required:true,
        minlength:10
      },
      send_gift:{
        required:true
      },
      Address11:{
        required:true
      },
      Address12:{
        required:true
      },
      Address13:{
        required:true
      },
      Address14:{
        required:true
      },
      Address15:{
        required:true,
        minlength:6,
        maxlength:6
      },
      cntry2:{
        required:true
      },
      phone_num1:{
        required:true,
        minlength:10
      }
      
      
    }


  });
  $('input[type="radio"]').change(function(){
    var inputValue = $("input[name = 'send_gift']:checked").val();
    if((inputValue == "yes")){
      $("#hide_div").show();
    }else {
      $("#hide_div").hide();
    }
  });
  $("#num_input").inputmask({"mask": "(999) 999-9999"});
  $("#num1_input").inputmask({"mask": "(999) 999-9999"});

  function BillingAddress(){
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
  
  $('#address_conf').click(function(){
    BillingAddress();
  });

//   $(".item_checkbox").click(function() {
//     debugger
//     var total = 0;
//     value222 = parseInt($(".item_quantity_select:checked").val());
//     $(".item_checkbox:checked").each(function() {
//       value111=parseInt($(this).val());
      
//         //total += parseInt($(this).val())*parseInt($(".item_quantity_select:selected").val());
//     });
//     if (total == 0) {
//         $('#value').html("$0.00");
//     } else {                
//         $('#value').html("$" + total);
//     }
// });
// $('.item_checkbox').click( function() {
//   debugger
//   var el = $(this);
//   var quantity = parseInt(el.val());
//   var price;
//   $('input[name="item_quantity_select"]').change(function(){
//     var price = parseInt((this).val());
//   });
  
//   el.closest('#total').find('#value').html(quantity * price);
// });

});

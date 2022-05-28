jQuery.validator.addMethod("non_numeric", function(value,element){
  return this.optional(element)||/^[a-z]+$/i.test(value);
}, "Please use alphabets only.");

jQuery.validator.addMethod("mail", function(value, element){
  return this.optional(element)|| /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(value);
}, "Valid email : abc@domain.tld");




console.log('client.js sourced properly');

$(document).ready(function(){
  console.log('jq sourced properly');

  $('.operatorButton').on('click',function(){
    //what type of operator is this?
  var myOperator = $(this).data('operator');
  console.log('in operator button click',myOperator);
    //get user number inputs
  var num0 =  $('#num0').val();
  var num1 =  $('#num1').val();
    //assemble object to send to the server
  var objectToSend = {
      x: num0,
      y: num1,
      type: myOperator
    }
  console.log('sending',objectToSend);
  $.ajax({
    type: "POST",
    url: "/math",
    data: objectToSend,
    success: function(response){
      console.log('back from ajax with: ',response);
      //receive and answer response.answer
      //display the answer on the DOM
      }//end success function
    });//end ajax
  });//end click listener
}); // end document.reay

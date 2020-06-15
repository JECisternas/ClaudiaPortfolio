// $(document).ready(function(){
  
  $('#btnSend').click(function(){
    var errors = '';
    
    if( $('#names').val() == ''){
      errors += '<p>Enter a name</p>';
      $('#names').css("border-bottom-color", "red");
    }else{
      $('#names').css("border-bottom-color", "#d1d1d1");
    }
   
    if( $('#email').val() == ''){
      errors += '<p>Enter an email</p>';
      $('#email').css("border-bottom-color", "red");
    }else{
      $('#email').css("border-bottom-color", "#d1d1d1");
    }   
    if( $('#message').val() == ''){
      errors += '<p>Enter a message</p>';
      $('#message').css("border-bottom-color", "red");
    }else{
      $('#message').css("border-bottom-color", "#d1d1d1");
    }

    if(errors == '' == false){

        var modalMessage = '<div class="modal_wrap">'+
                              '<div class="modal_message">'+
                              '<h3>Error message</h3>'+
                              errors+
                              '<span id="btnExit">Exit</span>'+

                              '</div>'+
                            '</div>'
        $('body').append(modalMessage);                  
      }
      $('#btnExit').click(function(){
        $('.modal_wrap').remove();
      })

  });

// });
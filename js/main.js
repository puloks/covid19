
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    
    
   /*==================================================================
    [ Simple slide100 ]*/

    $('.simpleslide100').each(function(){
        var delay = 7000;
        var speed = 1000;
        var itemSlide = $(this).find('.simpleslide100-item');
        var nowSlide = 0;

        $(itemSlide).hide();
        $(itemSlide[nowSlide]).show();
        nowSlide++;
        if(nowSlide >= itemSlide.length) {nowSlide = 0;}

        setInterval(function(){
            $(itemSlide).fadeOut(speed);
            $(itemSlide[nowSlide]).fadeIn(speed);
            nowSlide++;
            if(nowSlide >= itemSlide.length) {nowSlide = 0;}
        },delay);
    });

  /*<!--===============================================================================================-->
]*/
        $.ajax({
                url:'https://api.thevirustracker.com/free-api?countryTotals=ALL',
                dataType:"json",
                method:"GET", 
                success: function(covid19) {

                    $(".total").text(covid19.countryitems[0][11].total_cases);
                    $(".death").text(covid19.countryitems[0][11].total_deaths);
                    $(".total_recovered").text(covid19.countryitems[0][11].total_recovered);
                    $(".total_new_cases_today").text(covid19.countryitems[0][11].total_new_cases_today);
                    $(".total_new_deaths_today").text(covid19.countryitems[0][11].total_new_deaths_today);
                    $(".total_active_cases").text(covid19.countryitems[0][11].total_active_cases);
                console.log(covid19.countryitems[0][11]);
          },
          error:function(){
          }
        });

})(jQuery);
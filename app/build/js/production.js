'use strict'
;

(function($) {

  var size = window.getComputedStyle(document.body,':after').getPropertyValue('content');


  $(document).ready(function() {

    lightboxInit(); // Initialize video lightboxes


    /* -----------------------------------------
       Off Canvas Menu
       ----------------------------------------- */
    var $page = $('.nav'),
      $offCanvasMenu = $('.off-canvas'),
      $hamburger = $('.hamburger'),
      $hamburgerTitle = $('.hamburger__title'),
      $switch = $('.js-mobile-nav-toggle');

    $switch.on('touchstart click', function(e) {
      e.preventDefault();
      $page.toggleClass("open");
      $offCanvasMenu.toggleClass("off-canvas-is-open");
      $hamburger.toggleClass("close");

      if ($hamburger.hasClass("close")) {
        $hamburgerTitle.html('Close');
      } else {
        $hamburgerTitle.html('Menu');
      }
    });


    /* -----------------------------------------
       Tabs
       ----------------------------------------- */
    $('.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');

      $('.tabs li').removeClass('is-selected');
      $('.tabs__content').removeClass('is-open');

      $(this).addClass('is-selected');
      $("#"+tab_id).addClass('is-open');
    });


    /* If we are on largelayout set consistent height for social mash tiles */
    if (size.indexOf("largelayout") !=-1) { 
      var socialWidth = $('.social-mash__tile--instagram .social-mash__content').width();
      $(".social-mash__content").css( "height", socialWidth );
    }




    /* -----------------------------------------
       Form: Contact
       ----------------------------------------- */

    $("#form--contact").submit(function(){
        var hasErrors = false;

        // Validate Name
        var name = $("#userName");
        if (name.val() == '' || name.val()==='undefined') {
          name.addClass('has-error');
          hasErrors = true;                            
        }

        // Validate the e-mail
        var email = $("#userEmail");
        if(email.val() == "" || email.val()==='undefined') {
          email.addClass('has-error');
          hasErrors = true;
        } 
        else if ( (email.val() != "") && (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.val()))) {
          email.val('');
          email.addClass('has-error');
          hasErrors = true;
        } 
        else {
          email.removeClass('has-error');
        }


        //if any inputs on the page have the class 'needsfilled' the form will not submit
        if (hasErrors) {
          return false;
        } else {
          var action = $(this).attr('action');

          $("#form-message").slideUp(750,function() {
            $('#form-message').hide();
            $('.js-form-submit')
              .html('Sending <span class="dots"><span>.</span><span>.</span><span>.</span></span>')
              .attr('disabled','disabled');
            $.post(action, {
              name: $('#userName').val(),
              email: $('#userEmail').val(),
              message: $('#userMessage').val()
            },

            function(data){
              if(data.match('success') != null) {
                $('.js-form-submit').fadeOut('slow', function() {
                    $('.js-form-submit').removeAttr('disabled');
                    document.getElementById('form-message').innerHTML = data;               
                    $('#form-message').show();
                    
                });
              }
              else if (data.match('server-error') != null) {
                $('.js-form-submit').fadeOut('slow', function() {
                    $('.js-form-submit').removeAttr('disabled');
                    document.getElementById('form-message').innerHTML = data;               
                    $('#form-message').show();
                });
              }
            }

          );
          // end slideUp Form

          });

          return false;
        }
      }); // end Submit Function


    /* -----------------------------------------
       Form: Newsletter
       ----------------------------------------- */

    $("#form--newsletter").submit(function(){
        var hasErrors = false;

        // Validate the e-mail
        var email = $("#userEmail");
        if(email.val() == "" || email.val()==='undefined') {
          email.addClass('has-error');
          hasErrors = true;
        } 
        else if ( (email.val() != "") && (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.val()))) {
          email.val('');
          email.addClass('has-error');
          hasErrors = true;
        } 
        else {
          email.removeClass('has-error');
        }

        //if any inputs on the page have the class 'needsfilled' the form will not submit
        if (hasErrors) {
          return false;
        } else {
          var action = $(this).attr('action');

          $("#form-message").slideUp(750,function() {
            $('#form-message').hide();
            $('.js-form-submit')
              .html('Sending <span class="dots"><span>.</span><span>.</span><span>.</span></span>')
              .attr('disabled','disabled');
            $.post(action, {
              email: $('#userEmail').val()
            },

            function(data){
              if(data.match('success') != null) {
                $('#form--newsletter').fadeOut('slow', function() {
                    document.getElementById('form-message').innerHTML = data;               
                    $('#form-message').show();
                    $('.js-form-submit').fadeOut('slow',function(){$(this).remove()});
                    $('.js-form-submit').removeAttr('disabled');
                });
              }
              else if (data.match('server-error') != null) {
                $('#form--newsletter').fadeOut('slow', function() {
                    document.getElementById('form-message').innerHTML = data;               
                    $('#form-message').show();
                    $('.js-form-submit').fadeOut('slow',function(){$(this).remove()});
                    $('.js-form-submit').removeAttr('disabled');
                });
              }
            }

          );
          // end slideUp Form

          });

          return false;
        }
      }); // end Submit Function


    /* -----------------------------------------
       Form: Globals
       ----------------------------------------- */

      // Clears any fields in the form when the user clicks on them
      $(":input").click(function(){   
        $(this).removeClass('has-error')
               .removeClass('has-success'); 
      });

      // Clear error message if a user clicks it
      $(".form__error-message").click(function(){ 
        $(this).removeClass('has-error')
               .removeClass('has-success'); 
        $(this).html('');  
        $(this).prev(':input').focus();                            
      });

      // Clear error message if a user tabs
      $(":input").focus(function(){ 
        $(this).removeClass('has-error')
               .removeClass('has-success'); 
      });

}); //end




  $(window).resize(function() {
    size = window.getComputedStyle(document.body,':after').getPropertyValue('content');
  });




  /* -----------------------------------------
   Responsive Video Lightbox
   ----------------------------------------- */
  function lightboxInit() {
    $('.js-play-video').click(function(){
      myPlaylist.pause();
      trackEnded();
      var $thisHref = $(this).attr('data-id');
      var source = $(this).attr('data-source');
      buildLightBox($thisHref, source);
    }); 
  }

  function buildLightBox(id, source) {
    if (source == 'youtube') {
      $('<div class="media--video__content">').appendTo('body').html('<div class="layer"><iframe id="video" width="100%" height="100%" src="http://www.youtube.com/embed/' + id + '?enablejsapi=1&vq=hd1080&controls=1&rel=0&fs=1&modestbranding=1&showinfo=0&wmode=transparent&autoplay=1" frameborder="0"></iframe></div><div class="close js-close"></div>');
    } 
    if (source == 'vimeo') {
      $('<div class="media--video__content">').appendTo('body').html('<div class="layer"><iframe width="100%" height="100%" src="//player.vimeo.com/video/' + id + '?api=1&amp;autoplay=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen id="video"></iframe></div><div class="close js-close"></div>');
    } 
    
    // Create close button
    $('.js-close').on('click',function(e) {
      $('.media--video__content').remove();
    });
  }




})(jQuery);
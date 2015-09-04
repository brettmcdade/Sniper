$( document ).ready(function() {


  // swap svg to png for browsers that won't support it
  if (!Modernizr.svg) {
    $('img[src$=".svg"]').each(function()
    {
        $(this).attr('src', $(this).attr('src').replace('.svg', '.png'));
    });
  }


  /* 
    Tabs 
        */
  // http://codepen.io/cssjockey/pen/jGzuK

  $('.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.tabs li').removeClass('is-selected');
    $('.tabs__content').removeClass('is-open');

    $(this).addClass('is-selected');
    $("#"+tab_id).addClass('is-open');
  });


  var socialWidth = $('.social-mash__tile--instagram .social-mash__content').width();
  console.log(socialWidth);
  $(".social-mash__content").css( "height", socialWidth );


}); //end
/*Mudar de cor a navbar quando der o scroll*/
$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


/*parar o vídeo quando sair do modal*/
$(function(){
  $("body").on('hidden.bs.modal', function (e) {
    var $iframes = $(e.target).find("iframe");
    $iframes.each(function(index, iframe){
      $(iframe).attr("src", $(iframe).attr("src"));
    });
  });
});


/*Fecha o menu (toggle) da navbar quando clica (mobile)*/
$(document).on('click','.navbar-collapse.show',function(e) {
  if( $(e.target).is('a') && ( $(e.target).attr('class') != 'dropdown-toggle' ) ) {
    $(this).collapse('hide');
  }
});
//Begin Map
  var map;
  function initMap() {
    if ($('.contacts').length ) {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.864137, lng: 2.345414},
        // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
        zoom: 15,
        //отключить скорлл
        scrollwheel: false
      });

      var marker = new google.maps.Marker({
        position: {lat: 48.863883, lng: 2.348976},
        // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
        map: map,
        title: 'ROYAL RENT',
        icon: 'images/marker.png'
      });

      var marker = new google.maps.Marker({
        position: {lat: 48.868294, lng: 2.310184},
        map: map,
        title: 'ROYAL RENT',
        icon: 'images/marker.png'
      });
    }
  }
//End Map


//Begin Tabs
  function eventTabs(){
    $('.tab-item').not(':first').hide();
    $('.js-tab .tab').click(function(){
      $('.js-tab .tab').removeClass('active').eq($(this).index()).addClass('active');
      $('.js-tab .tab-item').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('active');
  }
//End Tabs


//Begin Services

  function services(){ //develop1
    var w = $(window).width();    
    var elServices = $(".el-services");
    if(w > 900) {
      setTimeout(function(){
          var flag = true;       
          if( flag == true && $(".sn-outer-wrapper").length){
              flag = false;
              $("body").prepend(elServices);
              $(".el-services").addClass("appended");
          }
      }, 1000);

      var services;
      if ($('.foot-breadcrumbs').length){
        setTimeout(function(){
        services = $('.footer').offset().top-$('.foot-breadcrumbs').outerHeight();
       
        },2000);
         
      } else {
        setTimeout(function(){
          services = $('.footer').offset().top+$('.el-services').height();
        },1000);
         
      }
     
      $(window).scroll(function(){
        // console.log("scroll-height: " + ($(window).scrollTop()+$(window).height()));
        // console.log("services-position: "+ services);
        // if ($('.order-confirm').length || $('.wrapper-about').length ) {
        //   $(".main").append(elServices);
        //   $('.el-services').addClass('active');
        //   debugger;
        // } else {
          if ($(window).scrollTop()+$(window).height() >= services || $(window).scrollTop()+$(window).height() < $(window).height() + 300) {
            $(".main").append(elServices);
            $('.el-services').removeClass('active');
            $('.el-services').addClass('on-his-place');

          } else if ($(window).scrollTop()+$(window).height() < services){
            $('.el-services').addClass('active');
             $("body").prepend(elServices);
            $('.el-services').removeClass('on-his-place');

          }
        // }
      });
    }
  }
//End Services

//Begin News Content
  function newsContent(){ //develop1
    if ($('.news').length) {
      var news = $('.news').offset().top;
      $(window).scroll(function(){
        if ($(window).scrollTop() >= news) {
          $('.news-content').addClass('active');
        } else if ($(window).scrollTop() < news) {
          $('.news-content').removeClass('active');
        }
      });
    }
  }
//End News Content



$(document).ready(function(){

  // backgroundScrollAnimation($(".el-header-bg"));

  $("#phone").mask("8(999) 99-99-99");

  $('#tariff-select').styler();
  $('#brand-select').styler();
  $('#model-select').styler();
  $('#get-select').styler();
  $('#return-select').styler();


//Begin Fancybox
  $('.corp-contract-link').fancybox({
    openEffect  : 'fade',
    closeEffect : 'fade',
    autoSize:true,
    width : 800,
    height : 884,
    maxWidth : '100%',
    wrapCSS:'corp-сontract-wrap',
    'closeBtn' : true,
    fitToView:true,
    padding:'0'
  });

  $('.request-link').fancybox({
    openEffect  : 'fade',
    closeEffect : 'fade',
    autoSize:true,
    width : 800,
    height : 615,
    maxWidth : '100%',
    wrapCSS:'request-wrap',
    'closeBtn' : true,
    fitToView:true,
    padding:'0'
  });
//End Fancybox  

  // services();
  eventTabs();
  initMap();


//Begin Select Styler
  $('#typeTransport').styler();
  $('#markTransport').styler();
  $('#modelTransport').styler();
//End Select Styler

});

$(window).load(function(){

});

$(window).resize(function(){

});
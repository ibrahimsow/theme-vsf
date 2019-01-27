$(document).on('ready', function() {
    $(".lazy").slick({
      lazyLoad: 'ondemand', // ondemand progressive anticipated
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 300,
      centerMode: true,
      // adaptiveHeight: false
    });
  });
  console.log("coucou");
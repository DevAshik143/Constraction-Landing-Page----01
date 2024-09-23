$(window).on("load", function () {

   // Preload
   $("#preload").fadeOut(500);

});

jQuery(document).ready(function () {

   // Magnific Popup About
   $('.popup-youtube').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
   });

   // Projects
   $('.filter button').click(function (event) {
      event.preventDefault();
      var buttonAttr = $(this).attr('data-name');

      $('.wrapper-projects .single-projects').hide();
      $('.wrapper-projects .single-projects[data-name="' + buttonAttr + '"]').fadeIn();

      if (buttonAttr == 'all') {
         $('.wrapper-projects .single-projects').fadeIn();
      }

   });

   // Accordion 
   $('.wrapper-accordion .content-accordion:first-of-type').show();
   $('.wrapper-accordion h3:first-of-type').children('.fa-solid').removeClass('fa-chevron-down').addClass('fa-chevron-up');

   var titleAccordion = $('.wrapper-accordion h3');
   var contentAccordion = $('.content-accordion');


   titleAccordion.click(function () {
      var content = $(this).next(contentAccordion);
      if (content.is(':visible')) {
         content.slideUp();
         $(this).children('.fa-solid').removeClass('fa-chevron-up').addClass('fa-chevron-down');
      } else {
         contentAccordion.slideUp();
         content.slideDown();
         titleAccordion.children('.fa-solid').removeClass('fa-chevron-up').addClass('fa-chevron-down');
         $(this).children('.fa-solid').removeClass('fa-chevron-down').addClass('fa-chevron-up');
      }

   });

   // Progressbar Skills
   $('.skills-1').rProgressbar({
      percentage: 99,
      fillBackgroundColor: '#FFC107',
      backgroundColor: '#212121',
      borderRadius: '0px',
      height: '15px',
      width: '100%'
   });
   $('.skills-2').rProgressbar({
      percentage: 86,
      fillBackgroundColor: '#FFC107',
      backgroundColor: '#212121',
      borderRadius: '0px',
      height: '15px',
      width: '100%'
   });
   $('.skills-3').rProgressbar({
      percentage: 74,
      fillBackgroundColor: '#FFC107',
      backgroundColor: '#212121',
      borderRadius: '0px',
      height: '15px',
      width: '100%'
   });
   $('.skills-4').rProgressbar({
      percentage: 80,
      fillBackgroundColor: '#FFC107',
      backgroundColor: '#212121',
      borderRadius: '0px',
      height: '15px',
      width: '100%'
   });

   // Carousel Testimonials
   $('.owl-testimonials').owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: true,
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 2
         },
         1000: {
            items: 2
         }
      }
   });

   // Scroll Menu
   $(".main-menu, .mobile-menu li").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({
         scrollTop: top
      }, 1500);
   });
   $(".logo, .header-content .btn").on("click", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({
         scrollTop: top
      }, 1500);
   });

   // Scroll Top Button
   $('#scroll-top').click(function () {
      $('body,html').animate({
         scrollTop: 0
      }, 800);
      return false;
   });

   // Scroll Top
   $('#scroll-top').hide();
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $('#scroll-top').fadeIn();
      } else {
         $('#scroll-top').fadeOut();
      }
   });

   // Mobile Menu
   $("#openmenu").click(function (event) {
      event.preventDefault();
      $("#wrapper-mobile-menu ").animate({
         'left': 0
      }, 500);
   });
   $("#closemenu").click(function (event) {
      event.preventDefault();
      $("#wrapper-mobile-menu").animate({
         'left': '-320px'
      }, 500);
   });
   $(".logo, .header-content .btn, .mobile-menu li a ").on("click", function (event) {
      event.preventDefault();
      $("#wrapper-mobile-menu").animate({
         'left': '-320px'
      }, 500);
   });

   // Ajax Send Form
   $('#sendform').click(function (event) {
      event.preventDefault();

      var name = $('input[name="name"]').val();
      var surname = $('input[name="surname"]').val();
      var email = $('input[name="email"]').val();
      var subject = $('input[name="subject"]').val();
      var message = $('textarea[name="message"]').val();

      if (name == '' || surname == '' || email == '' || subject == '' || message == '') {

         $('.res').fadeIn().html('<span class="error">All fields must be filled.</span>');
         $('input, textarea').focus(function () {
            $('.res').fadeOut();
         });

      } else {
         $.ajax({
            url: '../consultation.php',
            type: 'POST',
            data: {
               name: name,
               surname: surname,
               email: email,
               subject: subject,
               message: message
            },
            dataType: 'html',
            success: function (data) {
               if (data == 'Send') {
                  $('.res').fadeIn().html('<span class="send">Thanks. We will contact you shortly.</span>');
                  $('input[name="name"]').val('');
                  $('input[name="surname"]').val('');
                  $('input[name="email"]').val('');
                  $('input[name="subject"]').val('');
                  $('textarea[name="message"]').val('');
               }
            }
         });
      }
   }); // ajax

}); // ready
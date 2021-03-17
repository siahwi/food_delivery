/* JQuery */
$(document).ready(function() {

    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;' // before scoll to the section
    });
    
    $('.js--scroll-to-works').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
     });
     
     $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
     });
});

/* Animations on scroll */
$('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn');
}, {
    offset: '50%'
});

//https://css-tricks.com/snippets/jquery/smooth-scrolling/
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }    
});
  
/** if using button
const sectionFeature = document.querySelector('.section-features');
const sectionStep = document.querySelector('.section-steps');
const btnScrollTo = document.querySelector('.btn-2');
const hBtnScrollTo = document.querySelector('.btn-full');

hBtnScrollTo.addEventListener('click', function (e) {      
    //const s1coords = sectionStep.getBoundingClientRect();
    sectionStep.scrollIntoView({ behavior: 'smooth' });
  });

btnScrollTo.addEventListener('click', function (e) {      
    sectionFeature.scrollIntoView({ behavior: 'smooth' });
  });  
  */
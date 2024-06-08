(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

  








    













// read more and less button


// $(document).ready(function() {
//     $('.read-more-btn').on('click', function() {
//       var $this = $(this);
//       var target = $this.data('target');
//       var isExpanded = $this.attr('aria-expanded') === 'true';

//       if (!isExpanded) {
//         $this.text('Read Less');
//         $this.insertAfter($(target));
//       } else {
//         $this.text('Read More');
//         $this.insertBefore($(target));
//       }
      
//       $this.attr('aria-expanded', !isExpanded);
//     });
//   });

$(document).ready(function() {
    $('.read-more-btn').on('click', function() {
      var $this = $(this);
      var target = $this.data('target');
      var isExpanded = $this.attr('aria-expanded') === 'true';

      $(target).collapse('toggle');
      
      if (!isExpanded) {
        $this.text('Read Less');
        $this.insertAfter($(target));
      } else {
        $this.text('Read More');
        $this.insertBefore($(target));
      }
      
      $this.attr('aria-expanded', !isExpanded);
    });

    $('.collapse').on('shown.bs.collapse', function () {
      var $collapse = $(this);
      var $button = $collapse.siblings('.read-more-btn');
      $button.text('Read Less').insertAfter($collapse);
    }).on('hidden.bs.collapse', function () {
      var $collapse = $(this);
      var $button = $collapse.siblings('.read-more-btn');
      $button.text('Read More').insertBefore($collapse);
    });
  });





  // schedule start
  $(document).ready(function() {
    $('.toggle-btn').click(function() {
      var target = $(this).data('target');
      $(target).toggle();
      $(this).text(function(i, text) {
        return text === "Show/Hide 9th and 10th Grade Schedule" ? "Show/Hide 9th and 10th Grade Schedule" : "Show/Hide 1st and 2nd Year Schedule";
      });
    });

    // Initially hide the schedules
    $('.schedule-content').hide();
  });








// query//

document.addEventListener("DOMContentLoaded", function() {
    // Data for contact cards
    var contactCardData = [
      {
        icon: "bi-telephone-fill",
        title: "Phone Number",
        text: "+1 234 567 890",
        text: "+1 234 567 990",
        action: "tel:+1234567890"
      },
      {
        icon: "bi-envelope-fill",
        title: "Email Address",
        text: "contact@noshahiacademy.com",
        text: "contact@noshahiacademy.com",
        action: "mailto:contact@noshahiacademy.com"
      },
      {
        icon: "bi-geo-alt-fill",
        title: "Academy Location",
        text: "123 Science St, Knowledge City",
        text: "123 Science St, Knowledge City",
        action: "https://www.google.com/maps?q=123+Science+St,+Knowledge+City"
      }
    ];

    // Function to create contact card HTML
    function createContactCard(icon, title, text, action) {
      var cardHtml = `
        <div class="col-lg-4 mb-4">
          <div class="card h-100 text-center" style="cursor: pointer;" onclick="window.location.href='${action}'">
            <i class="bi ${icon} card-icon"></i>
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${text}</p>
            </div>
          </div>
        </div>
      `;
      return cardHtml;
    }

    // Function to add contact cards to the DOM
    function addContactCards(data) {
      var cardContainer = document.getElementById("contactCardContainer");
      data.forEach(function(card) {
        var cardHtml = createContactCard(card.icon, card.title, card.text, card.action);
        cardContainer.innerHTML += cardHtml;
      });
    }

    // Add contact cards to the DOM
    addContactCards(contactCardData);
  });

  
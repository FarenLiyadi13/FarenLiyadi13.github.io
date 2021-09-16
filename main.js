// sticky navigation
let navbar = $('.navbar');

// $(window).scroll(function () {
//   let oTop = $('.section-2').offset().top - window.innerHeight;
//   if ($(window).scrollTop() > oTop) {
//     navbar.addClass('sticky');
//   } else {
//     navbar.removeClass('sticky');
//   }
// });
(function () {
  var documentElem = $(document),
    navbar = $('nav'),
    lastScrollTop = 0;

  documentElem.on('scroll', function () {
    var currentScrollTop = $(this).scrollTop();

    // scroll down
    if (currentScrollTop > lastScrollTop) navbar.addClass('hidden');
    // scrollTop
    else navbar.removeClass('hidden');

    lastScrollTop = currentScrollTop;
  });
})();

// counter animation

let nCount = function (selector) {
  $(selector).each(function () {
    $(this).animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        easing: 'swing',
        step: function (value) {
          //   console.log($(this));
          $(this).text(Math.ceil(value));
        },
      }
    );
  });
};
let a = 0;
$(window).scroll(function () {
  let oTop = $('.numbers').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount('.rect>h1');
  }
});

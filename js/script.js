function animasiIntro() {
  $('#text span').velocity('transition.slideLeftIn', {
    stagger: 150,
    complete: function () {
      animasiButtonStart();
    },
  });
}

function animasiButtonStart() {
  $('#start')
    .velocity('transition.bounceUpIn')
    .mouseenter(function () {
      $(this).velocity({ width: 150 });
    })
    .mouseleave(function () {
      $(this).velocity({ width: 125 });
    });
}
function animasiIntroOut() {
  $('#start').attr('disabled',true).css({'color':'black'});
  $('#start').velocity('transition.whirlOut', {
    stagger: 150,
    complete: function () {
      $('#text').velocity(
        {
          'font-size': '20px',
          'top': '95%',
        },
        {
          duration: 1000,
          complete: function () {
            callMenu();
            $('#start').attr('disabled',false).css({'color':'black'});
            $("#menu ul li a[href='what_we_do']").trigger('click');
          },
        }
      );
    },
  });
}

function callMenu() {
  $('#menu ul li').velocity('transition.slideLeftIn', {
    stagger: 250,
  });
  $('#menu ul li a').off().click(function (event) {
    event.preventDefault();
    $(this).parent('li').addClass('active').siblings().removeClass('active');
    var hrefstring = $(this).attr('href');
    if (hrefstring == 'back_to_intro') {
      back_to_intro();
    } else {
      if (!$('#' + hrefstring).is(':visible')) {
        $('.container-content').fadeOut(1000);
        setTimeout(function () {
          $('#' + hrefstring).show();
          window[hrefstring]();
        }, 1000);
      }
    }
  });
}

function what_we_do() {
  $('#what_we_do img').velocity('transition.flipYIn', { duration: 1000 });
  $('#what_we_do .title').velocity('transition.slideUpIn', { duration: 1000 });
  $('#what_we_do .paragraf').velocity('transition.slideDownIn', { duration: 1000 });
}

function our_team() {
  $('.members.top240').velocity('transition.slideUpIn', { stagger: 100 });
  $('.members.top170').velocity('transition.slideDownIn', { stagger: 100 });
}

function back_to_intro() {
  $('#menu ul li').hide();
  $('.container-content').hide();
  $('#text').velocity(
    {
      'font-size': '90px',
      'top': '50%',
    },
    {
      duration: 1000,
      complete: function () {
        $('#start').velocity('transition.whirlIn');
      },
    }
  );
}

$(document).ready(function () {
  animasiIntro();
  // our_team();
});

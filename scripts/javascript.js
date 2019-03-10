$(document).ready(function() {
  // HOME PAGE
  var aside = document.querySelector('aside#menu');
  var footerBreakpoint = document.querySelector('footer');
  var home = document.querySelector('#home');
  var magicController = new ScrollMagic.Controller();
  var isDesktop = window.matchMedia('screen and (min-width: 992px)').matches;

  if (home) {
    $('.carousel-indicators li, .carousel-indicators-numbers li, .carousel-indicators-dots li').click(function (e) {
      $('#carousel-home').carousel(parseInt(e.target.getAttribute('data-section-to')));
    });

    $('#carousel-home').on('slide.bs.carousel', function (e) {
      $('.carousel-indicators-dots li').removeClass('active');
      $('.carousel-indicators-dots li[data-section-to="' + e.to + '"]').addClass('active');
      $('.carousel-indicators-dots li:not(.active) img').attr('src', 'public/general/dots.svg');
      $('.carousel-indicators-dots li.active img').attr('src', 'public/general/dot.svg');
    });

    if (isDesktop) {
      new Pageable('#container', {
        animation: 500,
        swipeThreshold: 200
      });

      var pips = document.querySelector('.pg-pips');
    }

    var portfolioBreakpoint = home.querySelector('.portfolio-home');
    var uxBreakpoint = home.querySelector('.ux-home');
    var webBreakpoint = home.querySelector('.web-home');

    aside.querySelector('.toggle-aside').addEventListener('click', function () {
      aside.classList.toggle('open');
    });

    document.querySelector('.navbar-toggler').addEventListener('click', function () {
      aside.classList.toggle('open');
    });

    new ScrollMagic.Scene({
      triggerElement: portfolioBreakpoint,
      triggerHook: 'onEnter',
      offset: isDesktop === true ? 300 : 200
    }).on('enter', function () {
      aside.classList.add('show');
      if (isDesktop) {
        document.querySelector('header').classList.add('d-none');
      }
      if (pips) {
        pips.classList.add('show');
      }
      portfolioBreakpoint.classList.add('show');
      setTimeout(function () {
        aside.classList.add('finished');
      }, 1000);
      setTimeout(function () {
        portfolioBreakpoint.querySelector('.photos img').classList.add('finished');
      }, 1500);
    }).on('leave', function () {
      aside.classList.remove('show', 'finished');
      if (isDesktop) {
        document.querySelector('header').classList.remove('d-none');
      }
      if (pips) {
        pips.classList.remove('show');
      }
    }).addTo(magicController);

    new ScrollMagic.Scene({
      triggerElement: webBreakpoint,
      triggerHook: 'onEnter',
      offset: isDesktop === true ? 400 : 100
    }).on('enter', function () {
      webBreakpoint.classList.add('show');
      setTimeout(function () {
        webBreakpoint.querySelector('img').classList.add('finished');
      }, 1500);
    }).addTo(magicController);

    new ScrollMagic.Scene({
      triggerElement: uxBreakpoint,
      triggerHook: 'onEnter',
      offset: isDesktop === true ? 500 : 100
    }).on('enter', function () {
      uxBreakpoint.classList.add('show');
      setTimeout(function () {
        uxBreakpoint.querySelector('.julien').classList.add('finished');
      }, 1500);
      setTimeout(function () {
        uxBreakpoint.querySelector('.one-page').classList.add('finished');
      }, 1700);
      setTimeout(function () {
        uxBreakpoint.querySelector('.ipad').classList.add('finished');
      }, 1900);
    }).addTo(magicController);

    new ScrollMagic.Scene({
      triggerElement: footerBreakpoint,
      triggerHook: 'onEnter',
      offset: isDesktop === true ? 400 : 200
    }).on('enter', function () {
      footerBreakpoint.classList.add('show');
    }).addTo(magicController);
  }

  // ABOUT PAGE
  var about = document.querySelector('#about');

  if (about) {
    if (isDesktop) {
      new Pageable('#container', {
        animation: 500,
        swipeThreshold: 200
      });

      var pips = document.querySelector('.pg-pips');
    }

    var aboutBreakpoint = document.querySelector('.about-page');

    aside.querySelector('.toggle-aside').addEventListener('click', function () {
      aside.classList.toggle('open');
    });

    document.querySelector('.navbar-toggler').addEventListener('click', function () {
      aside.classList.toggle('open');
    });

    new ScrollMagic.Scene({
      triggerElement: aboutBreakpoint,
      triggerHook: 'onEnter',
      offset: isDesktop === true ? 300 : 200
    }).on('enter', function () {
      aboutBreakpoint.classList.add('show');
      aside.classList.add('show');
      if (pips) {
        pips.classList.add('show');
      }
      setTimeout(function () {
        aside.classList.add('finished');
      }, 1000);
    }).on('leave', function () {
      aside.classList.remove('show', 'finished');
      if (pips) {
        pips.classList.remove('show');
      }
    }).addTo(magicController);

    new ScrollMagic.Scene({
      triggerElement: footerBreakpoint,
      triggerHook: 'onEnter',
      offset: isDesktop === true ? 400 : 200
    }).on('enter', function () {
      footerBreakpoint.classList.add('show');
    }).addTo(magicController);
  }

  // PROJET INDIVIDUAL PAGE
  var projetPages = document.querySelector('#projet-pages');

  if (projetPages) {
    if (isDesktop) {
      new Pageable('#container', {
        animation: 500,
        swipeThreshold: 200
      });

      var pips = document.querySelector('.pg-pips');
    }

    var projetPagesBreakpoint = document.querySelector('.projet-pages');
    var projetPagesBreakpoint2 = document.querySelector('section[data-anchor="2"]');
    var projetPagesBreakpoint3 = document.querySelector('section[data-anchor="3"]');

    aside.querySelector('.toggle-aside').addEventListener('click', function () {
      aside.classList.toggle('open');
    });

    document.querySelector('.navbar-toggler').addEventListener('click', function () {
      aside.classList.toggle('open');
    });

    new ScrollMagic.Scene({
      triggerElement: projetPagesBreakpoint,
      triggerHook: 'onEnter',
      offset: isDesktop === true ? 300 : 200
    }).on('enter', function () {
      projetPagesBreakpoint.classList.add('show');
      aside.classList.add('show');
      if (pips) {
        pips.classList.add('show');
      }
      setTimeout(function () {
        aside.classList.add('finished');
      }, 1000);
    }).on('leave', function () {
      aside.classList.remove('show', 'finished');
      if (pips) {
        pips.classList.remove('show');
      }
    }).addTo(magicController);

    new ScrollMagic.Scene({
      triggerElement: projetPagesBreakpoint2,
      triggerHook: 'onEnter',
      offset: isDesktop === true ? 500 : 100
    }).on('enter', function () {
      projetPagesBreakpoint2.classList.add('show');
    }).addTo(magicController);

    new ScrollMagic.Scene({
      triggerElement: projetPagesBreakpoint3,
      triggerHook: 'onEnter',
      offset: isDesktop === true ? 400 : 25
    }).on('enter', function () {
      projetPagesBreakpoint3.classList.add('show');
    }).addTo(magicController);

    new ScrollMagic.Scene({
      triggerElement: footerBreakpoint,
      triggerHook: 'onEnter',
      offset: isDesktop === true ? 400 : 200
    }).on('enter', function () {
      footerBreakpoint.classList.add('show');
    }).addTo(magicController);
  }

  // PROJETS PAGE
  var projets = document.querySelector('#projets');

  if (projets) {
    var projetsBreakpoint = document.querySelector('.projets-page');

    aside.querySelector('.toggle-aside').addEventListener('click', function () {
      aside.classList.toggle('open');
    });

    document.querySelector('.navbar-toggler').addEventListener('click', function () {
      aside.classList.toggle('open');
    });

    new ScrollMagic.Scene({
      triggerElement: projetsBreakpoint,
      triggerHook: 'onEnter',
      offset: isDesktop === true ? 300 : 200
    }).on('enter', function () {
      projetsBreakpoint.classList.add('show');
      aside.classList.add('show');
      setTimeout(function () {
        aside.classList.add('finished');
      }, 1000);
    }).on('leave', function () {
      aside.classList.remove('show', 'finished');
      if (pips) {
        pips.classList.remove('show');
      }
    }).addTo(magicController);

    new ScrollMagic.Scene({
      triggerElement: footerBreakpoint,
      triggerHook: 'onEnter',
      offset: isDesktop === true ? 400 : 200
    }).on('enter', function () {
      footerBreakpoint.classList.add('show');
    }).addTo(magicController);
  }
});
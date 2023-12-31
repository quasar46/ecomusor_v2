document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenu = document.querySelector('.mobile-menu__close');
  const body = document.querySelector('body'); 
  burger.addEventListener('click', function(e) {
    e.preventDefault();
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('hidden');
  })

  closeMenu.addEventListener('click', function(e) {
    e.preventDefault();
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('hidden');
  })

  const btnHowWork = document.querySelectorAll('.how-work__toggle');
  btnHowWork.forEach(btn => {
    btn.addEventListener('click', function () {
      btn.closest('.accordion__item').querySelector('.how-work__inner').classList.toggle('how-work__inner--show');
      btn.closest('.accordion__item').querySelector('.how-work__text').classList.toggle('hidden');
      btn.classList.toggle('active');
    })
  })

  if (document.querySelector('.swiper-information') && window.innerWidth < 768) {
    const swiper = new Swiper('.swiper-information', {
      slidesPerView: "auto",
      spaceBetween: 14,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

  const items = document.querySelectorAll('.news__item');
  items.forEach((item, i) => {
    if (i > 11 && window.innerWidth > 1399) {
      item.classList.add('hidden');
    } else if (i > 5 && window.innerWidth < 1400) {
      item.classList.add('hidden');
    } else if (i > 6 && window.innerWidth < 768) {
      item.classList.add('hidden');
    }
  })

  const btnShowNews = document.querySelector('#show-news');

  const showNews = function () {
    items.forEach(item => {
      item.classList.remove('hidden');
    })
  }
  if (btnShowNews) {
    btnShowNews.addEventListener('click', showNews);
  }

  const headList = document.querySelectorAll('.aside-list__head');
  headList.forEach(item => {
    item.addEventListener('click', function (e) {
      const target = e.target;
      if (target.classList.contains('aside-list__head')) {
        item.nextElementSibling.classList.toggle('show');
      }

    })
  })

  if (document.querySelector('.mySelect')) {
    customSelect(".mySelect");
  }

  const btnOpenFilter = document.querySelectorAll('.openFilter')

  const openFilter = function () {
    document.querySelector('.auctions__aside--tablet').classList.toggle('show');
  }
  if (btnOpenFilter.length > 0) {
    btnOpenFilter.forEach(btn => {
      btn.addEventListener('click', openFilter)
    })
  }


  const tabs = document.querySelectorAll('.tabs');
  tabs.forEach(item => {
    let tab = item.querySelectorAll('.tabs__head-btn'),
      header = item.querySelector('.tabs__head'),
      tabContent = item.querySelectorAll('.tabs__content');

    function hideTabContent(a) {
      for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
      }
    }

    hideTabContent(1);

    function showTabContent(b) {
      if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
      }
    }

    header.addEventListener('click', function (event) {
      event.preventDefault();
      let target = event.target;
      if (target && target.classList.contains('tabs__head-btn')) {
        for (let i = 0; i < tab.length; i++) {
          if (target == tab[i]) {
            tab.forEach(item => {
              item.classList.remove('active');
            })
            tab[i].classList.add('active');
            hideTabContent(0);
            showTabContent(i);
            break;
          }
        }
      }

    });
  })

  const overlay = document.querySelector('.overlay');
  const subscribeModal = document.querySelector('#subscribe-modal');
  const btnSubModalSubscribe = subscribeModal.querySelector('#subscribe-modal .btn[type="submit"]');
  const closeModal = document.querySelectorAll('#close-modal-icn');
  const btnsModalConfirm = document.querySelectorAll('.btn-modal-confirm');
  

  btnsModalConfirm.forEach(btn => (
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      this.closest('.modal').classList.remove('active');
      overlay.classList.remove('active');
    })
  ))

  btnSubModalSubscribe.addEventListener('click', function (e) {
    e.preventDefault();
    const modalInputValue = document.querySelector('.modal__input .input').value;
    if (modalInputValue !== "") {
      this.closest('.modal').classList.remove('active');
      document.querySelector('#subscribe-modal__status-active').classList.add('active');
      overlay.classList.add('active');
    } else {
      this.closest('.modal').classList.remove('active');
      document.querySelector('#subscribe-modal__status-error  ').classList.add('active');
      overlay.classList.add('active');
    }
   
  })

  const btnsSubscribeShow = document.querySelectorAll('.subscribe-btn');
  btnsSubscribeShow.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      subscribeModal.classList.add('active');
      overlay.classList.add('active');
    })
  })

  closeModal.forEach(btnClose => {
    btnClose.addEventListener('click', function () {
      document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
      });
      overlay.classList.remove('active'); 
    })

  })
})

$(document).ready(function () {
  $(function () {
    $.fn.scrollToTop = function () {
      $(this).hide().removeAttr("href");
      if ($(window).scrollTop() != "0") {
        $(this).fadeIn("slow")
      }
      var scrollDiv = $(this);
      $(window).scroll(function () {
        if ($(window).scrollTop() == "0") {
          $(scrollDiv).fadeOut("slow")
        } else {
          $(scrollDiv).fadeIn("slow")
        }
      });
      $(this).click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow")
      })
    }
  });
  $(function () { $("#topscroll").scrollToTop(); });


  //- #test кнопочка
}) 
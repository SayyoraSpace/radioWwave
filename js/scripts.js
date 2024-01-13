

const showNumber = 4;
const hiddenItemClass = 'podcasts-list__item_hidden';
const hiddenItemMobileClass = 'podcasts-list__item_hidden-mobile';
const moreBtn = document.querySelector('.podcasts-more');

moreBtn.addEventListener('click', function (event) {
  const podcastsHidden = document.querySelectorAll(`.${hiddenItemClass}`);
  const podcastsHiddenMobile = document.querySelectorAll(`.${hiddenItemMobileClass}`);

  if (document.body.clientWidth <= 480) {
    podcastsHiddenMobile.forEach((item, i) => {
      if (i < showNumber) {
        item.classList.remove(hiddenItemMobileClass);
      }
    });
  } else {
    podcastsHidden.forEach((item, i) => {
      if (i < showNumber) {
        item.classList.remove(hiddenItemClass);
      }
    });
  }

  const newPodcastsHidden = document.querySelectorAll('.' + hiddenItemClass, '.' + hiddenItemMobileClass);

  if (newPodcastsHidden.length === 0) {
    moreBtn.remove();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const selector = document.querySelector(".choices");

  const choices = new Choices(selector, {
    searchEnabled: false,
    classNames: {
      containerOuter: "choices author-select",
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const acc = new Accordion(".guests-list", {
    duration: 700,
    elementClass: "guests-list__item",
    triggerClass: "guests-list__item-btn",
    panelClass: "guests-list__item-panel",
    showMultiple: false,
    openOnInit: [0],
    collapse: true,
  });
});

const swiper = new Swiper('.about-swiper-wrap', {
	slidesPerView: 4,
	slidesPerGroup: 1,
	spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 4,
	    spaceBetween: 30,
    }
  },
  loop: true,
  speed: 300,
  navigation: {
    nextEl: '.about-swiper-next',
    prevEl: '.about-swiper-prev',
  },
});


new window.JustValidate(".js-form", {
  colorWrong: "#D52B1E",
  rules: {
    message: {
      required: true,
    },
    name: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
  },
  messages: {
    message: "Введите текст",
    name: "Вы не ввели имя",
    email: {
      required: "Вы не ввели e-mail",
      email: "Введите корректный e-mail",
    },
  },
});

new window.JustValidate(".js-form", {
  colorWrong: "#D52B1E",
  rules: {
    login: {
      required: true,
    },
    password: {
      required: true,
      password: true,
    },
  },
  messages: {
    login: "Вы не ввели логин",
    password: {
      required: "Вы не ввели пароль",
      password: "Введите верный пароль",
    },
  },
});

// GUEST
const guestIdElements = document.querySelectorAll('[data-guest-id]');

guestIdElements.forEach((element) => {
  element.addEventListener('click', function(event) {
    const target = event.target;

    console.dir(target);

    guestIdElements.forEach((item) => {
      item.classList.remove('is-active');
    });

    target.classList.add('is-active');

    const id = target.dataset.guestId;

    console.log('id', id);

    const guestInfoElement = document.querySelector(`[data-guest-info-id="${id}"]`);

    console.dir(guestInfoElement);

    const plug = document.querySelector('.guests-plug');

    if (plug) {
      plug.remove();
    }

    document.querySelectorAll('[data-guest-info-id]').forEach((itemElement) => {
      itemElement.classList.remove('is-active');
    });

    guestInfoElement.classList.add('is-active');
  })
});

// header-what-air acrive
const whatAirElement = document.querySelector('.header-what-air');

whatAirElement.addEventListener('click', () => {
  whatAirElement.classList.toggle('is-active');
});

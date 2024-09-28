//all functions

function initLocomotiveScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  tl.from(".purple p", {
    scale: 0.3,
    rotation: 45,
    autoAlpha: 0,
    ease: "power2",
  })
    .from(
      ".line-3",
      { scaleX: 0, transformOrigin: "left center", ease: "none" },
      0
    )
    .to(".purple", { backgroundColor: "#28a92b" }, 0);

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

function cursorEffect() {
  // all variables
  var cursor = document.querySelector(".cursor");
  var page1 = document.querySelector(".page1");

  // all functions
  function cursorMove(e) {
    gsap.to(cursor, {
      duration: 0.7,
      x: e.clientX,
      y: e.clientY,
    });
  }
  function cursorEnter() {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  }
  function cursorLeave() {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  }
  // all events listener
  page1.addEventListener("mousemove", cursorMove);
  page1.addEventListener("mouseenter", cursorEnter);
  page1.addEventListener("mouseleave", cursorLeave);
}

function cursorEffect2() {
  // all variables
  var cursor1 = document.querySelector(".cursor1");
  var page4 = document.querySelector(".page4");

  // all functions
  function cursorMove1(dets) {
    gsap.to(cursor1, {
      x: dets.x,
      y: dets.y,
    });
  }

  function cursorEnter1() {
    gsap.to(cursor1, {
      scale: 1,
      opacity: 1,
    });
  }

  function cursorLeave1() {
    gsap.to(cursor1, {
      scale: 0,
      opacity: 0,
    });
  }
  // all events listener
  page4.addEventListener("mousemove", cursorMove1);
  page4.addEventListener("mouseenter", cursorEnter1);
  page4.addEventListener("mouseleave", cursorLeave1);
}

function page2Animation() {
  // all animation
  gsap.from(".elem h1", {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: ".page2",
      scrolller: "body",
      start: "top 47%",
      end: "top 46%",
      //   markers: true,
      scrub: 2,
    },
  });
}

function Page3swiper() {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

function loaderAnimation() {
  // all variables

  var tl = gsap.timeline();

  // all animation

  tl.from(".loader h3", {
    x: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  });

  tl.to(".loader h3", {
    x: -10,
    duration: 1,
    stagger: 0.1,
    opacity: 0,
  });

  tl.to(".loader", {
    duration: 0.5,
    delay: 1,
    opacity: 0,
  });

  tl.to(".loader", {
    display: "none",
  });

  tl.from(".page1-content h1 span", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    delay: -0.5,
  });

}

// all functions call

Page3swiper();
cursorEffect();
cursorEffect2();
page2Animation();
loaderAnimation();
initLocomotiveScroll();

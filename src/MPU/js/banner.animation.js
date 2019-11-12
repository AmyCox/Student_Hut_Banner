'use strict';



/**
 * Run the animation functions.
 */
Banner.prototype.start = function () {
  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = [
    'images/img1.png'
  ];

  var _this = this;
  this.preloadImages(this.images, function () {
    // _this.createElements();
    // _this.setup();
    _this.hidePreloader();
    _this.animate();
    _this.bindEvents();
  });
};

/**
 * Create dom elements.
 */
// Banner.prototype.createElements = function () {
//   this.logo = this.smartObject({
//     backgroundImage: 'images/logo.png',
//     retina: true,
//     parent: this.banner
//   });
// };

/**
 * Setup initial element states.
 */
// Banner.prototype.setup = function () {
//   this.logo.center();
//   this.logo.set({ autoAlpha: 0, scale: 0.4 });
// };

/**
 * Hide the preloader.
 */
Banner.prototype.hidePreloader = function () {
  TweenLite.to('.preloader', 1, { autoAlpha: 0 });
};

/**
 * Animation timeline.
 */
Banner.prototype.animate = function () {

  var masterTimeline = new TimelineMax({
    repeat: -1
  }); 



var intro = new TimelineMax()

intro.from('.img1, .logo-overlay', 1, {
  opacity: 0,
  x: 10,
  ease: Expo.easeInOut
})
intro.to(".pink-line", 0.4 ,{
  x: -410,
  delay: -1
})


var copyIntro = new TimelineMax()

// copyIntro.from(".pink-line", 0.2, {
//   opacity: 0,
//   delay: 0.1
// })


copyIntro.from("#copy1", 1.8, {
  attr: { x: '100%' },
   delay: -0.9,
   ease: Expo.easeOut
 })




 var copyAnim = new TimelineMax()

copyAnim.from(".copy-rotate-1", 0.4, {
  opacity: 0,
  y: 20,
  delay: 1.6,
  ease: Expo.easeOut
})
copyAnim.to(".copy-rotate-1", 0.2, {
  opacity: 0,
  y: -5,
  delay: 0.4
})
copyAnim.from(".copy-rotate-2", 0.4, {
  opacity: 0,
  y: 20,
  delay: 0,
  ease: Expo.easeOut
})
copyAnim.to(".copy-rotate-2", 0.2, {
  opacity: 0,
  y: -5,
  delay: 0.4
})
copyAnim.from(".copy-rotate-3", 0.3, {
  opacity: 0,
  y: 20,
  delay: -0,
  ease: Expo.easeOut
})
copyAnim.to(".copy-rotate-3", 0.1, {
  opacity: 0,
  y: -5,
  delay: 0.3
})
copyAnim.from(".copy-rotate-4", 0.3, {
  opacity: 0,
  y: 20,
  delay: 0,
  ease: Expo.easeOut
})
copyAnim.to(".copy-rotate-4", 0.1, {
  opacity: 0,
  y: -5,
  delay: 0.3
})
copyAnim.from(".copy-rotate-5", 0.3, {
  opacity: 0,
  y: 20,
  delay: 0,
  ease: Expo.easeOut
})
copyAnim.to(".copy-rotate-5", 0.1, {
  opacity: 0,
  y: -5,
  delay: 0.3
})
copyAnim.from(".copy-rotate-6", 0.3, {
  opacity: 0,
  y: 20,
  delay: 0,
  ease: Expo.easeOut
})
copyAnim.to(".copy-rotate-6", 0.2, {
  opacity: 0,
  y: -5,
  delay: 0
})
copyAnim.from(".copy-rotate-7", 0.2, {
  opacity: 0,
  y: 20,
  delay: 0,
  ease: Expo.easeOut
})
copyAnim.to(".copy-rotate-7", 0.2, {
  opacity: 0,
  y: -5,
  delay: 0,
})
copyAnim.from(".copy-rotate-8", 0.2, {
  opacity: 0,
  y: 20,
  delay: 0,
  ease: Expo.easeOut
})
copyAnim.to(".copy-rotate-8", 0.1, {
  opacity: 0,
  y: -5,
  delay: 0
})
copyAnim.from(".copy-rotate-9", 0.1, {
  opacity: 0,
  y: 20,
  delay: 0,
  ease: Expo.easeOut
})
copyAnim.to(".copy-rotate-9", 0.1, {
  opacity: 0,
  y: -5,
  delay: 0
})
copyAnim.from(".copy-rotate-10", 0.1, {
  opacity: 0,
  y: 20,
  delay: 0,
  ease: Expo.easeOut
})
copyAnim.to(".copy-rotate-10", 0.1, {
  opacity: 0,
  y: -5,
  delay: 0
})
copyAnim.from(".copy-rotate-11", 0.1, {
  opacity: 0,
  y: 20,
  delay: 0,
  ease: Expo.easeOut
})
copyAnim.to(".copy-rotate-11", 0.1, {
  opacity: 0,
  y: -5,
  delay: 0
})
copyAnim.to(".copy-rotate-11, .copy1", 0.4, {
  opacity: 0,
})


var imgAnim = new TimelineMax () 

imgAnim.to(".img1", 0.4, {
  opacity: 0
})
imgAnim.from(".img2", 1, {
  x: 1,
  opacity: 0,
  delay: -0.2
})
imgAnim.from("#copy2", 1.8, {
  attr: { x: '100%' },
   delay: -0.4,
   ease: Expo.easeOut
 })
 imgAnim.to(".outro1", 1, {
   opacity: 0,
  
 })

 imgAnim.from("#copy3", 1.8, {
  attr: { x: '100%' },
   delay: -0.4,
   ease: Expo.easeOut
 })
 imgAnim.from("#cta", 1, {
  attr: { x: '100%' },
   delay: -1.4,
   ease: Expo.easOut
 })

 // Start Outro
var outro = new TimelineMax()

outro.to('.outro', 1, {
    x: 5,
    opacity: 0,
    delay: 0,
    ease: Expo.easeOut
  })

// End Outro

// THIS IS THE MASTER TIMELINE 
masterTimeline
// ADD OTHER TIMELINES
.add(intro, 0)
.add(copyIntro, 0)
.add(copyAnim, 0)
.add(imgAnim, 8)
.add(outro, 15.5)



// // STOPS HERE AFTER LOOPING ONCE
// .call(function () {
//   if (loops === maxLoops) {
//     masterTimeline.pause();
//   }
//   loops++;
// })
// // PLAYS ONCE BEFORE LOOPING


// Moves CTA 5 pixels right on hover and back on mouseOut
var ctahov = document.querySelector(".banner");
ctahov.onmouseover = function () {
  TweenLite.to(".cta", 0.77, {
    ease: Expo.easeOut,
    y:-5,
  });
  TweenMax.to(masterTimeline, 0.5, { timeScale: 0.5 });
};
ctahov.onmouseout = function () {
  TweenLite.to(".cta", 0.77, {
    ease: Expo.easeOut,
    y: 0
  });
  TweenMax.to(masterTimeline, 0.5, { timeScale: 1 });
};

};

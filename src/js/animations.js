import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';

let sceneArray = []
let tweensArray = []

//introTween
let introTween = new TimelineMax({paused: true})
introTween.fromTo('.header__logo', 0.5, {opacity: 0}, {opacity: 1})
          .staggerFromTo('.header__menu li', 0.5, {opacity: 0, x: 50, y: -50}, {opacity: 1, x: 0, y: 0}, 0.25)
          .fromTo('.header__cart', 0.5, {opacity: 0, x: 50, y: -50}, {opacity: 1, x: 0, y: 0}, '-=0.25')
          .fromTo('.header__search', 0.5, {opacity: 0, x: 50, y: -50}, {opacity: 1, x: 0, y: 0}, '-=0.25');

window.addEventListener('load', function(){
    introTween.play()
})

//featuresTween
let featuresTween = new TimelineMax()
featuresTween.staggerFromTo('.features-item', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0}, 0.5);

let featuresScene = new ScrollMagic.Scene({
   triggerElement: '.landing__features',
   reverse: false
})
.setTween(featuresTween)

sceneArray.push(featuresScene)

//themesTween
let themesTween = new TimelineMax()
themesTween.fromTo('.landing__themes-browser-center', 0.5, {opacity: 0, y: 200}, {opacity: 1, y: 0})
           .fromTo('.landing__themes-browser-left', 0.5, {opacity: 0, x: 200}, {opacity: 1, x: 0})
           .fromTo('.landing__themes-browser-right', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0}, '-=0.5');

let themesScene = new ScrollMagic.Scene({
    triggerElement: '.landing__themes',
    reverse: false
})
.setTween(themesTween)

sceneArray.push(themesScene)

//statisticTween
let statisticTween = new TimelineMax()

statisticTween.staggerFromTo('.statistic-item', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0}, 0.5);

let statisticScene = new ScrollMagic.Scene({
   triggerElement: '.landing__statistic',
   reverse: false
})
.setTween(statisticTween)

sceneArray.push(statisticScene)

//clientsTween
let clientsTween = new TimelineMax()

clientsTween.staggerFromTo('.landing__clients-item', 0.5, {opacity: 0}, {opacity: 1}, 0.5);

let clientsScene = new ScrollMagic.Scene({
   triggerElement: '.landing__clients',
   reverse: false
})
.setTween(clientsTween)

sceneArray.push(clientsScene)

let controller = new ScrollMagic.Controller()
controller.addScene(sceneArray)

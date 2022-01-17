
// paralax

let bg = document.getElementById("bg");

let sun = document.getElementById("sun");
let road = document.getElementById("road");
let text = document.getElementById("text");
let textAbout = document.getElementById("textAbout");



window.addEventListener('scroll', function(){
    var value = window.scrollY;

    bg.style.top = value * 0.15 + 'px';
    textAbout.style.top = value * 0.15 + 'px';
    
    
    
    sun.style.top = value * 0.35 + 'px';
    road.style.top = value * 0.5 + 'px';
    text.style.top = value * 1 + 'px';
})

// scroll


  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: {className: 'main-tool-bar--scrolled', targets: '.main-tool-bar'}
    
  });
  ScrollTrigger.create({
    start: 'top -82.75',
    end: 99999,
    toggleClass: {className: 'resumeBoxTitle--scrolled', targets: '.resumeBoxTitle'}
    
  });
  



// page transition


 


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });
  




var tl = gsap.timeline()
tl
.to("#page1",{
    y:"150vh",
    duration: 0,
    scale:0.6,
    
})
.to("#page1",{
    y:"10vh",
    duration: 1,
    delay:1,
    
})
.to("#page1",{
    
    rotate:360,
    scale:1,
    duration:0.8
    
})
.to("#page1",{
    y:0,
    duration:0.2,

})


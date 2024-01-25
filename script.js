function revealElement(){
    document.querySelectorAll(".reveal")
.forEach(function(elem){
    let spanParent = document.createElement("span");
    let spanChild = document.createElement("span");
    spanParent.classList.add("parent");
    spanChild.classList.add("child");
    spanChild.innerHTML = elem.innerHTML;
    spanParent.appendChild(spanChild);
    elem.innerHTML="";
    elem.appendChild(spanParent);
})
}
revealElement();

function loaderAnimation(){
let tl = gsap.timeline();
tl
.from(".child span",{
    x:100,
    duration:2,
    stagger:.2,
    delay:0.1,
    ease:Power3.easeInOut
})

.to(".parent .child",{
    y:"-100%",
    duration:2,
    ease:Expo.easeInOut
})

.to("#firstPage",{
    height:0,
    duration:2,
    delay:-1.5,
    ease:Expo.easeInOut
})

.to("#green",{
    height:"100%",
    duration:2,
    delay:-2,
    ease:Expo.easeInOut
})

.to("#home",{
    height:"100%",
    duration:2,
    delay:-1.4,
    ease:Expo.easeInOut
})
}
loaderAnimation();

let tl1 = gsap.timeline();
tl1
.to("#heading1",{
    y:"0",
    duration:1,
    delay:3.8,
    ease:Expo.easeInOut
})
.to("#heading2",{
    y:"0",
    duration:1,
    delay:0.1,
    ease:Expo.easeInOut
})
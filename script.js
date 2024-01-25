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
let tl = gsap.timeline();
tl
.from(".child span",{
    x:100,
    duration:2,
    stagger:.2,
    delay:1.4,
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

.to("#frontpage",{
    height:"100%",
    duration:2,
    delay:-1.4,
    ease:Expo.easeInOut
})
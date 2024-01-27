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
    height:"180vh",
    duration:2,
    top:0,
    delay:-1.4,
    ease:Expo.easeInOut,
    //oncompelete:function(){top:"0"}
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
    duration:2,
    delay:0.1,
    ease:Expo.easeInOut
})
function setZero(k)
{
  return k>10?k:"0"+k;
}
function set2Time()
{
    // for date object
    const localTime= new Date();
    // find the exact time from date object
    const h = setZero(localTime.getHours());
    const m = setZero(localTime.getMinutes());
    const s = setZero(localTime.getSeconds());
    console.log(h);
    console.log(m);
    console.log(s);
    document.querySelector("#p2").innerHTML=
    `<h5>My local Time ${h}:${m}:${s}<br>GMT(+5:30)</h5>`;
    setTimeout(set2Time,1000);
}
set2Time();
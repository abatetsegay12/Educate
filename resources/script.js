
const navbar=document.querySelector(".navbar");
const footer=document.querySelector(".footer-info");
const testmony=document.querySelectorAll(".testimony-box>div");
const navdrawer=document.querySelector(".navigationDrawer");
const navdraweropen=document.querySelector(".navdrawer");
const closnavdraw=document.getElementById("closedrawerid");
navdrawer.classList.add("xclose");
closnavdraw.addEventListener("click",(e)=>{
  e.preventDefault();
  navdrawer.classList.add("xclose");
});
navdraweropen.addEventListener("click",()=>{
  navdrawer.classList.add("animatenavigationopen");
  navdrawer.classList.toggle("xclose");
});
window.addEventListener("click",(e)=>{
  
  
  let boundaryw=navdrawer.getBoundingClientRect().width;
  
  let boundrayy=navdrawer.getBoundingClientRect().height;
  
  if(e.clientX<boundaryw || e.clientY>boundrayy){
    // console.log(e.pageX);
    // console.log(boundaryw);
     navdrawer.classList.add("xclose");
   }
  
});
let options={
    root:null,
    rootMargin:"10px",
    threshold:0.6
}
function animateheader_footer(name,animate){
  let observer=new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
           entry.target.classList.add(animate);
      }
    })
},options);
observer.observe(name);
}
animateheader_footer(navbar,"animateheader");
animateheader_footer(footer,"animateheader");
testmony.forEach(testm=>animateheader_footer(testm,"animatetestimony"))

let dropdown=document.querySelector(".dropdown-menu");
let observer2=new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
         entry.target.classList.add("animatedropdown");  
    }
  })
},options);
observer2.observe(dropdown);
let headerbox=document.querySelector(".header-box1");
let observer3=new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
         entry.target.classList.add("headerboxanimate");  
    }
  })
},options);
observer3.observe(headerbox);

let workitem=document.querySelectorAll(".work-item");
let observer4=new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
         entry.target.classList.add("animateworkitem");  
    }
  })
},options);
workitem.forEach(work=>{
  observer4.observe(work);
});


let tutortext=document.querySelector(".tutor-text");
let observer5=new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
         entry.target.classList.add("animateworkitem");  
    }
  })
},options);

  observer5.observe(tutortext);

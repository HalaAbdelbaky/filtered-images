var buttons=document.querySelectorAll("ul li");
var imgContainer=document.querySelector(".display-img")
var logoImgs = [
  "images/logo1.jpg",
  "images/logo2.webp",
  "images/logo3.png"
];
var mobileImgs = [
  "images/mobile1.jpg",
  "images/mobile2.jpg",
  "images/mobile3.jpg",
]; 
var webImgs = [
  "images/web1.png",
  "images/web2.jpg",
  "images/web3.jpg",
];
buttons.forEach(
  (button)=>
  button.onclick=function(){
    if(button.dataset.name === "logo"){
      imgContainer.innerHTML=`
  
      <img src=${logoImgs[0]}   alt="">
      <img src=${logoImgs[1]}   alt="">
      <img src=${logoImgs[2]}   alt="">
      `
    }
    else if(button.dataset.name === "mobile"){
      imgContainer.innerHTML=`
  
      <img src=${mobileImgs[0]}   alt="">
      <img src=${mobileImgs[1]}   alt="">
      <img src=${mobileImgs[2]}   alt="">
      `
    }
    else if(button.dataset.name === "web"){
      imgContainer.innerHTML=`
  
      <img src=${webImgs[0]}   alt="">
      <img src=${webImgs[1]}   alt="">
      <img src=${webImgs[2]}   alt="">
      `
    }
    else if(button.dataset.name === "All"){
      imgContainer.innerHTML=`
      <img src=${logoImgs[0]}   alt="">
      <img src=${logoImgs[1]}   alt="">
      <img src=${logoImgs[2]}   alt="">
      
      <img src=${webImgs[0]}   alt="">
      <img src=${webImgs[1]}   alt="">
      <img src=${webImgs[2]}   alt="">

      <img src=${mobileImgs[0]}   alt="">
      <img src=${mobileImgs[1]}   alt="">
      <img src=${mobileImgs[2]}   alt="">
      `
    }
  }

)
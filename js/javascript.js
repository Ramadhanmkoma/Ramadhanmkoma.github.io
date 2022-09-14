//"use strict"
const projectTitle = "Ramadhan Mohammed Mkoma";
let isAsideNavActive = true;


let showImage = false;

document.addEventListener('DOMContentLoaded', () => {
  setNavBarAside();
}); 

let setNavBarAside = () => {
  document.getElementById('menu').addEventListener('click', myNavHeadSec);
};

// Controlling Navigation Section
let myNavHeadSec = () => {
  if (isAsideNavActive) {
      let aside = document.querySelector('aside').style.cssText = `
        margin-left: -210px;
        transition: .5s ease-in;
      `;
      let myheadTitle = document.getElementById('mytitle');
          myheadTitle.style.cssText = `
            margin-left: 0;
            transition: .5s ease-in;
          `;
      isAsideNavActive = false;
  } else {
    let aside = document.querySelector('aside').style.cssText = `
      margin-left: 0;
      transition: .5s ease-in;
    `;
    let myheadTitle = document.getElementById('mytitle');
        myheadTitle.style.cssText = `
          margin-left: 0;
          width: 100%;
          transition: .5s ease-in;
        `;
    isAsideNavActive = true;
  }
}

"use strict"
const projectTitle = "Ramadhan Mohammed Mkoma";

// whatsapp QR Code banner slider
let done = document.getElementById('chevron-down'),
    tsapp_banner = document.getElementById('tsapp-qr'),
    whatsappQRCode = document.getElementById('whatsapp-link');


window.document.addEventListener('DOMContentLoaded', function(){
    
    done.addEventListener('click', function() {
        tsapp_banner.classList.remove('isTop');
    });

    whatsappQRCode.addEventListener('click', function () {
        tsapp_banner.classList.add('isTop');
    });

});


// let isAsideNavActive = true;

// let showImage = false;

// document.addEventListener('DOMContentLoaded', () => {
//   setNavBarAside();
// }); 

// let setNavBarAside = () => {
//   document.getElementById('menu').addEventListener('click', myNavHeadSec);
// };

// // Controlling Navigation Section
// let myNavHeadSec = () => {
//   if (isAsideNavActive) {
//       let aside = document.querySelector('aside').style.cssText = `
//         margin-left: -210px;
//         transition: .5s ease-in;
//       `;
//       let myheadTitle = document.getElementById('mytitle');
//           myheadTitle.style.cssText = `
//             margin-left: 0;
//             transition: .5s ease-in;
//           `;
//       isAsideNavActive = false;
//   } else {
//     let aside = document.querySelector('aside').style.cssText = `
//       margin-left: 0;
//       transition: .5s ease-in;
//     `;
//     let myheadTitle = document.getElementById('mytitle');
//         myheadTitle.style.cssText = `
//           margin-left: 0;
//           transition: .5s ease-in;
//         `;
//     isAsideNavActive = true;
//   }
// }


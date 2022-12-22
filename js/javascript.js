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

    // notification API 
    notification();

    // sessionStorage.setItem('notification', JSON.stringify(notification()));
    // const myNotifyData = JSON.parse(sessionStorage.getItem('notification'));
    // console.log(myNotifyData);
    
});

// document.addEventListener('progress', notification());

let notification = () => {
    let track = false;
    Notification.requestPermission().then((perm) => {
    
        console.log(`Notification access ${ perm }`);

        if (perm === 'granted') {
            let notify = new Notification('Ramadhan', {
                body: `Hello!, Thank you for visiting my website, feel free to contact me for any questions or help.`,
                data: { name: 'M.M Ramadhan'},
                icon: '/assets/icons/Ramadhan\'s.jpg',
                tag: 'Welcome Message'
            });

            notify.addEventListener('close', (e) => {
                console.log(e);
            });
        }
    })
}

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


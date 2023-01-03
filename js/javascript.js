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


    /* Setting Navigation Code starts here */ 
    let setting_btn = document.getElementById('open-setting'),
        aside_setting = document.getElementById('setting-id');

    setting_btn.addEventListener('click', function() {
        aside_setting.classList.remove('slide-off');
    });

    let btn_close_setting = document.getElementById('close-setting-btn');
    btn_close_setting.addEventListener('click', function() {
        aside_setting.classList.add('slide-off');

    });
    /* Setting Navigation ends here */ 


    document.getElementById('language').addEventListener('click', function() {
        alert('choose');

        document.getElementById('google_translate_element').classList.remove('lang');
    });

    let ligh_mode = document.getElementById('light-mode');
    let isToggleOn = false;

    ligh_mode.addEventListener('click', function() {
        // let light_on = new Audio('./assets/audio/on.mp3'),
            // light_off = new Audio('./assets/audio/off.mp3');
        if (!isToggleOn) {
            // light_off.pause();
            // light_on.play();
            ligh_mode.classList.remove('fa-toggle-off');
            ligh_mode.classList.add('fa-toggle-on');
            isToggleOn = true;    
        } else {
            // light_on.pause();
            // light_off.play(); 
            ligh_mode.classList.remove('fa-toggle-on');
            ligh_mode.classList.add('fa-toggle-off');

            isToggleOn = false;
        }
      
    });

    // notification API 
    // notification();    
});

// Google Translater API
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: 'en'
        },
        'google_translate_element'
    );
}

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


//"use strict"
const projectTitle = "Ramadhan Mohammed Mkoma";

let showImage = false;

document.addEventListener('DOMContentLoaded', () => {
  setNavBarAside();
});

let setNavBarAside = () => {
  document.getElementById('menu').addEventListener('click', function () {
    alert("nav bar clicked");
  });
};

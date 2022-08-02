//"use strict"
const projectTitle = "Ramadhan Mohammed Mkoma";

let showImage = false;

document.addEventListener('DOMContentLoaded', () => {
  // console.log("page loaded")
  document.getElementById('clickable-img').addEventListener('click', () => {
    if (showImage == false) {
      document.getElementById('fluid-image').classList.remove('hidden');
      showImage = true;
    } else {
      document.getElementById('fluid-image').classList.add('hidden');
      showImage = !showImage;
    }
  }); 
});

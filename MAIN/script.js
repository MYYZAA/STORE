const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop) {
    // Scroll down, hide the header and fade out the footer
    header.style.opacity = '0';
    footer.style.opacity = '0';
  } else {
    // Scroll up, show the header and fade in the footer
    header.style.opacity = '1';
    footer.style.opacity = '1';
  }

  lastScrollTop = currentScroll;
});
const toggleSectionsButton = document.getElementById('toggleSectionsButton');
const sectionList = document.querySelector('.section-list');

let isSectionListVisible = false;

toggleSectionsButton.addEventListener('click', () => {
  isSectionListVisible = !isSectionListVisible;

  if (isSectionListVisible) {
    sectionList.style.maxHeight = sectionList.scrollHeight + 'px';
  } else {
    sectionList.style.maxHeight = '0px';
  }
});
document.addEventListener("DOMContentLoaded", function () {
  createBubbles();
});

function changeBackgroundColor() {
  var colors = ['#333', '#130f55', '#5733ff', '#', '#0a0825']; // Array of colors
  var randomColor = colors[Math.floor(Math.random() * colors.length)]; // Pick a random color from the array
  document.body.style.backgroundColor = randomColor; // Change the background color
}

setInterval(changeBackgroundColor, 2000); // Change color every 2 seconds (2000 milliseconds)

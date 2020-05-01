// Variables
let count;
let subId;
let i;

// Changing colors
function starMark(item) {
  count = item.id[0];
  subId = item.id.substring(1);
  for (i = 0; i < 5; i++) {
    if (i < count) {
      document.getElementById((i + 1) + subId).style.color = 'orange';
    }
    else {
      document.getElementById((i + 1) + subId).style.color = 'black';
    }
  }
}

// Clicking away
window.addEventListener('mouseup', function (event) {
  let stars = document.getElementById('stars').children;
  if (event.target != stars && event.target.parentNode != stars) {
    for (let i = 0; i < stars.length; i++) {
      stars[i].style.color = 'black';
    }
  }
});

// MouseEnter event NOT WORKING YET
let fa = document.querySelector('.fa');
fa.addEventListener('mouseenter', function () {
  if (event.target == fa) {
    for (let i = 0; i < fa.length; i++) {
      fa[i].style.color = 'orange';
      // event.target.style.color = 'orange';
      console.log(event);
    }
  }
});
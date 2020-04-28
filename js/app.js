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
  let stars = this.document.getElementById('stars');
  if (event.target != stars && event.target.parentNode != stars) {
    for (i = 0; i < 5; i++) {
      document.getElementById((i) + subId).style.color = 'black';
    }
  }
});

function changeColor(stars) {
  if (stars.style.color == 'orange') {
    stars.style.color = 'black'
  } else {
    stars.style.color = 'orange';
  }
}
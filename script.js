const ol = document.getElementById('playlist')
const btn = document.querySelector('button')

var playList = [
	{ author: "LED ZEPPELIN", song: "STAIRWAY TO HEAVEN" },
	{ author: "QUEEN", song: "BOHEMIAN RHAPSODY" },
	{ author: "LYNYRD SKYNYRD", song: "FREE BIRD" },
	{ author: "DEEP PURPLE", song: "SMOKE ON THE WATER" },
	{ author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER" },
	{ author: "AC/DC", song: "BACK IN BLACK" },
	{ author: "QUEEN", song: "WE WILL ROCK YOU" },
	{ author: "METALLICA", song: "ENTER SANDMAN" }
];

btn.onclick = showSong


function showSong() {
	const {author, song} = playList[ol.childElementCount]
	const li = document.createElement('li')
	li.textContent = `${author} - ${song}`
	ol.appendChild(li);
	updateButton();

	li.onclick = function () {
		li.remove()
		updateButton();
	}
}


function updateButton() {
	const fullList = playList.length === ol.childElementCount;

	btn.disabled = fullList;
	btn.textContent = fullList ? "Усі пісні показано" : "Click to see";
}
// playList.forEach(function(item) {
// 	const li = document.createElement('li');
// 	li.textContent = `${item.author} - ${item.song}`
// 	ol.appendChild(li);
// });

const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close')
const modal = document.getElementById('modal')


openBtn.onclick = function() {
	modal.style.display = 'flex'
	openBtn.hidden = true
}

closeBtn.onclick = function() {
	modal.style.display = 'none'
	openBtn.hidden = false
}

const onBtn = document.getElementById('on');
const switchBtn = document.getElementById('switch');
const lights = document.querySelectorAll('.ligth');

let current = -1;
let isOn = false;

function updateLights() {
  for (let i = 0; i < lights.length; i++) {
    lights[i].style.opacity = 0.2;
  }
  if (isOn && current >= 0) {
    lights[current].style.opacity = 1;
  }
}

onBtn.onclick = function() {
  isOn = !isOn;
  if (isOn) {
    current = 0;
  } else {
    current = -1;
  }
  updateLights();
};

switchBtn.onclick = function() {
  if (!isOn) return;
  current = (current + 1) % lights.length;
  updateLights();
};

updateLights();
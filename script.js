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

let count = 0

function showSong() {
	if (count < playList.length) {
		const item = playList[count]
		const li = document.createElement('li')
		li.textContent = `${item.author} - ${item.song}`
		ol.appendChild(li);
		count++;

		li.onclick = function () {
			li.remove()
			count--
			
			if (count < playList.length) {
				btn.disabled = false;
				btn.textContent = "Click to see";
			}
		}

	}else {
    btn.disabled = true;
    btn.textContent = "Усі пісні показано";
  }
}

// playList.forEach(function(item) {
// 	const li = document.createElement('li');
// 	li.textContent = `${item.author} - ${item.song}`
// 	ol.appendChild(li);
// });
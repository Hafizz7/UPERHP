var countDate = new Date('Dec 27 2022 00:00:00').getTime();

function newYear(){
	var now = new Date().getTime();
	gap = countDate - now;

	var detik = 1000;
	var menit = detik * 60;
	var jam = menit * 60;
	var hari = jam * 24;

	var h = Math.floor(gap / (hari));
	var j = Math.floor( (gap % (hari)) / (jam) );
	var m = Math.floor( (gap % (jam))  / (menit) );
	var d = Math.floor( (gap % (menit))  / (detik) );

	document.getElementById('hari').innerText = h;
	document.getElementById('jam').innerText = j;
	document.getElementById('menit').innerText = m;
	document.getElementById('detik').innerText = d;
}

setInterval( function(){
	newYear();
}, 1000);
const myAudio = document.getElementById("audio");
    const btn = document.getElementById("btn-playback");
    const btnIcon = document.querySelector("#btn-playback > i");
    const btnText = document.getElementById("btn-text");
    
    const toggleMusic = () => {      
      const dataPlay = btn.getAttribute('data-play');
            
      if(dataPlay === 'false') {
        btn.setAttribute('data-play', 'true');
        myAudio.play();
        btnIcon.classList.remove("fa-play");
        btnIcon.classList.add("fa-pause");
        btnText.innerText = "PAUSE";
      } else {
        btn.setAttribute('data-play', 'false');
        myAudio.pause();
        btnIcon.classList.remove("fa-pause");
        btnIcon.classList.add("fa-play");
        btnText.innerText = "PLAY";
      }
    };
    
    myAudio.onpause = () => {
      btn.setAttribute('data-play', 'false');
        myAudio.pause();
        btnIcon.classList.remove("fa-pause");
        btnIcon.classList.add("fa-play");
        btnText.innerText = "PLAY";
    };
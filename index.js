var i;
for(i=0;i<=6;i++) {
document.querySelectorAll(".drum")[i].addEventListener("click",function () {
      var c = this.innerText;
      music(c);
      animation(c);
});
}

document.addEventListener("keydown",function () {
  music(event.key);
  animation(event.key);
  //console.log(event.key);
});

function music(c) {
  if(c=== 'w') {
    new Audio('crash.mp3').play();
  }
  else if(c==='a') {
    new Audio('kick-bass.mp3').play();
  }
  else if(c==='s') {
    new Audio('snare.mp3').play();
  }
  else if(c==='d') {
    new Audio('tom-1.mp3').play();
  }
  else if(c==='j') {
    new Audio('tom-2.mp3').play();
  }
  else if(c==='k') {
    new Audio('tom-3.mp3').play();
  }
  else if(c=== 'l'){
    new Audio('tom-4.mp3').play();
  }
}

function animation(c) {
  var active=document.querySelector("."+c);
  active.classList.add("pressed");
  setTimeout(function() {
    active.classList.remove("pressed");
  },100);
}

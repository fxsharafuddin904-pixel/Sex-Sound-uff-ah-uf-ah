/* ===========================
FORM
=========================== */

.form-group{
margin-top:20px;
}

.form-group label{
display:block;
font-size:13px;
font-weight:600;
margin-bottom:8px;
color:#fff;
}

.form-group input,
.form-group select,
.form-group textarea{

width:100%;

padding:15px 16px;

border-radius:16px;

border:1px solid rgba(255,255,255,.08);

background:rgba(255,255,255,.04);

color:#fff;

font-size:14px;

outline:none;

transition:.25s;

}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus{

border-color:#7b5cff;

box-shadow:0 0 0 4px rgba(123,92,255,.18);

}

textarea{

resize:none;

min-height:150px;

}

.error{

margin-top:8px;

font-size:12px;

color:#ff5c7a;

}

.textarea-footer{

display:flex;

justify-content:space-between;

align-items:center;

margin-top:8px;

}

/* ===========================
ADMIN BUTTON
=========================== */

.admin-card{

position:fixed;

top:18px;

right:18px;

display:flex;

align-items:center;

gap:10px;

padding:10px 16px;

border-radius:50px;

text-decoration:none;

color:#fff;

background:rgba(20,24,45,.85);

border:1px solid rgba(255,255,255,.1);

backdrop-filter:blur(15px);

z-index:9999;

transition:.25s;

}

.admin-card:hover{

background:#229ED9;

transform:translateY(-2px);

}

.admin-icon{

font-size:22px;

}

.admin-text{

display:flex;

flex-direction:column;

line-height:1.2;

font-size:12px;

}

/* ===========================
MUSIC PAGE
=========================== */

.music-card{

text-align:center;

}

.music-orb{

width:90px;

height:90px;

margin:0 auto 20px;

border-radius:50%;

display:grid;

place-items:center;

font-size:40px;

background:linear-gradient(135deg,#7b5cff,#00d9ff);

animation:pulse 1.8s infinite;

}

@keyframes pulse{

0%{transform:scale(1);}
50%{transform:scale(1.08);}
100%{transform:scale(1);}

}

.equalizer{

display:flex;

justify-content:center;

gap:5px;

margin:25px 0;

}

.equalizer i{

width:5px;

height:28px;

border-radius:999px;

background:#7b5cff;

animation:eq 1s infinite ease-in-out;

}

.equalizer i:nth-child(2){animation-delay:.1s;}
.equalizer i:nth-child(3){animation-delay:.2s;}
.equalizer i:nth-child(4){animation-delay:.3s;}
.equalizer i:nth-child(5){animation-delay:.4s;}

@keyframes eq{

0%,100%{height:18px;}

50%{height:42px;}

}

.music-btn{

margin-top:25px;

width:100%;

height:56px;

border:none;

border-radius:16px;

font-size:15px;

font-weight:700;

cursor:pointer;

background:#ff4b5c;

color:#fff;

}

/* ===========================
RESPONSIVE
=========================== */

@media(max-width:768px){

body{
padding:16px;
}

.glass-card{
padding:22px;
}

.welcome-content h1{
font-size:34px;
}

.feature-row{
grid-template-columns:repeat(3,1fr);
gap:8px;
}

.feature{
padding:14px 8px;
}

.feature span{
font-size:22px;
}

.admin-card{
top:12px;
right:12px;
padding:8px 12px;
}

.admin-text{
font-size:10px;
}

}
/* ===========================
   PAGE SWITCH
=========================== */

function showPage(id) {

  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

function showCategoryPage() {
  showPage("categoryPage");
}

function showPhonePage() {
  showPage("phonePage");
}

function showFunPage() {
  showPage("funPage");
}

function showMessagePage() {
  showPage("messagePage");
}

function showMusicPage() {
  showPage("musicPage");
}

/* ===========================
   PHONE VALIDATION
=========================== */

function nextPhoneStep() {

  const country = document.getElementById("country").value;
  const phone = document.getElementById("phone").value.trim();

  const error = document.getElementById("numberError");

  error.textContent = "";

  if (!country) {
    error.textContent = "Please select a country.";
    return;
  }

  if (!/^[0-9]{6,15}$/.test(phone)) {
    error.textContent = "Enter a valid phone number.";
    return;
  }

  showMessagePage();
}

/* ===========================
   MESSAGE
=========================== */

const messageBox = document.getElementById("message");

if (messageBox) {

  messageBox.addEventListener("input", function () {

    const count = document.getElementById("messageCount");

    count.textContent =
      this.value.length + " / 500";

  });

}

function submitCustomMessage() {

  const msg = document.getElementById("message").value.trim();

  const error = document.getElementById("messageError");

  error.textContent = "";

  if (msg.length < 3) {

    error.textContent = "Please write a message.";

    return;

  }

  showMusicPage();

}
/* ===========================
   PAGE ELEMENTS
=========================== */

const pages = {
  welcome: document.getElementById("welcomePage"),
  category: document.getElementById("categoryPage"),
  phone: document.getElementById("phonePage"),
  message: document.getElementById("messagePage"),
  fun: document.getElementById("funPage"),
  music: document.getElementById("musicPage")
};

function hideAllPages() {
  Object.values(pages).forEach(page => {
    if (page) page.classList.remove("active");
  });
}

function showPage(page) {
  hideAllPages();
  page.classList.add("active");
}

/* ===========================
   NAVIGATION
=========================== */

function showCategoryPage() {
  showPage(pages.category);
}

function showPhonePage() {
  showPage(pages.phone);
}

function showFunPage() {
  showPage(pages.fun);
}

function showMessagePage() {
  showPage(pages.message);
}

function showMusicPage() {
  showPage(pages.music);
  playMusic();
}

/* ===========================
   PHONE VALIDATION
=========================== */

function nextPhoneStep() {

  const country = document.getElementById("country").value;
  const phone = document.getElementById("phone").value.trim();
  const error = document.getElementById("numberError");

  error.textContent = "";

  if (!country) {
    error.textContent = "Please select your country.";
    return;
  }

  if (!/^[0-9]{6,15}$/.test(phone)) {
    error.textContent = "Please enter a valid phone number.";
    return;
  }

  showMessagePage();
}

/* ===========================
   MESSAGE PAGE
=========================== */

const messageBox = document.getElementById("message");
const counter = document.getElementById("messageCount");

if (messageBox && counter) {

  messageBox.addEventListener("input", () => {
    counter.textContent =
      `${messageBox.value.length} / 500`;
  });

}

function submitCustomMessage() {

  const msg = document.getElementById("message").value.trim();
  const error = document.getElementById("messageError");

  error.textContent = "";

  if (msg.length < 1) {
    error.textContent = "Please write a message.";
    return;
  }

  showMusicPage();
}
/* ===========================
   FUN PAGE
=========================== */

function startFunExperience() {

  const amount =
    document.getElementById("funAmount").value;

  const error =
    document.getElementById("funError");

  error.textContent = "";

  if (!amount) {
    error.textContent =
      "Please select an amount.";
    return;
  }

  showMusicPage();
}

/* ===========================
   MUSIC PLAYER
=========================== */

const musicList = [
  document.getElementById("music1"),
  document.getElementById("music2"),
  document.getElementById("music3")
];

let musicPlaying = false;

function playMusic() {

  if (musicPlaying) return;

  musicPlaying = true;

  musicList.forEach(audio => {

    if (!audio) return;

    audio.volume = 1;

    audio.loop = true;

    audio.play().catch(() => {});

  });

}

function stopMusic() {

  musicList.forEach(audio => {

    if (!audio) return;

    audio.pause();

    audio.currentTime = 0;

  });

}

function toggleMusic() {

  const btn =
    document.getElementById("offBtn");

  if (musicPlaying) {

    stopMusic();

    musicPlaying = false;

    btn.innerHTML = "🔇 ON";

  } else {

    playMusic();

    btn.innerHTML = "🔊 OFF";

  }

}

/* ===========================
   AUTO PLAY
=========================== */

document.addEventListener("click", () => {

  if (musicPlaying) return;

  playMusic();

}, {
  once: true
});

/* ===========================
   COPY TEXT
=========================== */

function copyText(text) {

  navigator.clipboard.writeText(text);

  alert("Copied Successfully ✅");

}
/* ===========================
   BOMBING PAGE
=========================== */

function startFunExperience() {

  const amount =
    document.getElementById("funAmount").value;

  const error =
    document.getElementById("funError");

  error.textContent = "";

  if (!amount) {
    error.textContent = "Please select an amount.";
    return;
  }

  showMusicPage();
}

/* ===========================
   MUSIC SYSTEM
=========================== */

const players = [
  document.getElementById("music1"),
  document.getElementById("music2"),
  document.getElementById("music3")
];

let musicPlaying = false;

function playMusic() {

  players.forEach(player => {

    if (!player) return;

    player.currentTime = 0;
    player.volume = 1;

    player.play().catch(() => {});

  });

  musicPlaying = true;

  const btn = document.getElementById("offBtn");

  if (btn) {
    btn.textContent = "🔊 OFF";
  }

}

function toggleMusic() {

  const btn = document.getElementById("offBtn");

  if (!musicPlaying) {

    playMusic();
    return;

  }

  players.forEach(player => {

    if (!player) return;

    player.pause();
    player.currentTime = 0;

  });

  musicPlaying = false;

  if (btn) {
    btn.textContent = "🔇 ON";
  }

}

/* ===========================
   AUTO PLAY
=========================== */

document.addEventListener("click", () => {

  if (musicPlaying) return;

  players.forEach(player => {

    if (!player) return;

    player.play().catch(() => {});

  });

}, { once: true });
/* ===========================
   COPY FUNCTION
=========================== */

function copyText(text) {

  navigator.clipboard.writeText(text)
    .then(() => {

      alert("Copied Successfully ✅");

    })
    .catch(() => {

      alert("Copy Failed ❌");

    });

}

/* ===========================
   SHAKE ANIMATION
=========================== */

function shake(element) {

  if (!element) return;

  element.classList.remove("shake");

  void element.offsetWidth;

  element.classList.add("shake");

}

/* ===========================
   CLEAR ERRORS
=========================== */

document.querySelectorAll("input, select, textarea")
.forEach(item => {

  item.addEventListener("input", () => {

    const error =
      item.parentElement.querySelector(".error");

    if (error) {
      error.textContent = "";
    }

  });

});

/* ===========================
   PAGE LOAD
=========================== */

window.addEventListener("DOMContentLoaded", () => {

  hideAllPages();

  if (pages.welcome) {

    pages.welcome.classList.add("active");

  }

});

/* ===========================
   PREVENT FORM SUBMIT
=========================== */

document.querySelectorAll("form")
.forEach(form => {

  form.addEventListener("submit", e => {

    e.preventDefault();

  });

});

/* ===========================
   CONSOLE MESSAGE
=========================== */

console.log(`
====================================
   MessageBox Premium Loaded ✅
====================================
Developer UI Ready 🚀
`);
/* ===========================
   COPY FUNCTION
=========================== */

function copyText(text) {

  if (!navigator.clipboard) {

    const input = document.createElement("textarea");
    input.value = text;

    document.body.appendChild(input);

    input.select();

    document.execCommand("copy");

    document.body.removeChild(input);

  } else {

    navigator.clipboard.writeText(text);

  }

  showToast("Copied Successfully ✅");
}

/* ===========================
   TOAST MESSAGE
=========================== */

function showToast(message) {

  let toast = document.getElementById("toast");

  if (!toast) {

    toast = document.createElement("div");

    toast.id = "toast";

    toast.style.cssText = `
      position:fixed;
      left:50%;
      bottom:25px;
      transform:translateX(-50%);
      background:#222;
      color:#fff;
      padding:12px 20px;
      border-radius:12px;
      z-index:99999;
      font-size:14px;
      box-shadow:0 8px 20px rgba(0,0,0,.35);
    `;

    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.opacity = "1";

  setTimeout(() => {
    toast.style.opacity = "0";
  }, 1800);
}

/* ===========================
   INITIAL PAGE
=========================== */

window.addEventListener("load", () => {

  showPage(pages.welcome);

});

/* ===========================
   ENTER KEY SUPPORT
=========================== */

document.addEventListener("keydown", (e) => {

  if (e.key === "Enter") {

    const active = document.querySelector(".page.active");

    if (!active) return;

    if (active.id === "phonePage") {
      nextPhoneStep();
    }

    if (active.id === "messagePage") {
      submitCustomMessage();
    }

    if (active.id === "funPage") {
      startFunExperience();
    }
  }

});

/* ===========================
   END
=========================== */

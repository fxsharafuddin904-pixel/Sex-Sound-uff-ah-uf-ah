const countryRules = {
  BD: { min: 10, max: 10, prefix: /^01/ },
  IN: { min: 10, max: 10, prefix: /^[6-9]/ },
  NP: { min: 10, max: 10, prefix: /^9/ },
  SA: { min: 9, max: 9, prefix: /^5/ },
  US: { min: 10, max: 10, prefix: /^[2-9]/ },
  AE: { min: 9, max: 9, prefix: /^5/ },
  GB: { min: 10, max: 10, prefix: /^[1-9]/ },
  MY: { min: 9, max: 10, prefix: /^1/ },
  SG: { min: 8, max: 8, prefix: /^[6-9]/ },
  PK: { min: 10, max: 10, prefix: /^3/ },
  ID: { min: 9, max: 12, prefix: /^8/ },
  PH: { min: 10, max: 10, prefix: /^9/ },
  TH: { min: 9, max: 9, prefix: /^[6-9]/ },
  JP: { min: 10, max: 10, prefix: /^[7-9]/ },
  KR: { min: 10, max: 10, prefix: /^1/ },
  CN: { min: 11, max: 11, prefix: /^1/ },
  CA: { min: 10, max: 10, prefix: /^[2-9]/ },
  AU: { min: 9, max: 9, prefix: /^4/ },
  DE: { min: 10, max: 11, prefix: /^[1-9]/ },
  FR: { min: 9, max: 9, prefix: /^[6-7]/ },
  IT: { min: 9, max: 10, prefix: /^3/ },
  ES: { min: 9, max: 9, prefix: /^[6-7]/ },
  BR: { min: 10, max: 11, prefix: /^[1-9]/ },
  TR: { min: 10, max: 10, prefix: /^5/ },
  QA: { min: 8, max: 8, prefix: /^[3-7]/ }
};


/* =========================
   ELEMENTS
========================= */

const country = document.getElementById("country");
const phone = document.getElementById("phone");

const message = document.getElementById("message");
const messageCount = document.getElementById("messageCount");

const numberError = document.getElementById("numberError");
const messageError = document.getElementById("messageError");

const music1 = document.getElementById("music1");
const music2 = document.getElementById("music2");
const music3 = document.getElementById("music3");

const offBtn = document.getElementById("offBtn");


/* =========================
   SHAKE
========================= */

function shake(element) {

  element.classList.remove("shake");

  void element.offsetWidth;

  element.classList.add("shake");

}


/* =========================
   COUNTRY CHANGE
========================= */

country.addEventListener("change", () => {

  numberError.textContent = "";

  phone.value = "";

  phone.focus();

});


/* =========================
   PHONE INPUT
========================= */

phone.addEventListener("input", () => {

  // Only allow digits
  phone.value = phone.value.replace(/\D/g, "");

  numberError.textContent = "";

});


/* =========================
   STEP 1 → STEP 2
========================= */

function nextStep() {

  const selectedCountry = country.value;

  const number = phone.value.trim();

  numberError.textContent = "";


  /* Country required */

  if (!selectedCountry) {

    numberError.textContent =
      "Please select your country first.";

    shake(country);

    return;
  }


  /* Number required */

  if (!number) {

    numberError.textContent =
      "Please enter your phone number.";

    shake(phone);

    phone.focus();

    return;
  }


  /* Digits only */

  if (!/^\d+$/.test(number)) {

    numberError.textContent =
      "Please enter numbers only.";

    shake(phone);

    return;
  }


  const rule = countryRules[selectedCountry];


  if (!rule) {

    numberError.textContent =
      "Country validation unavailable.";

    shake(country);

    return;
  }


  /* Length validation */

  if (
    number.length < rule.min ||
    number.length > rule.max
  ) {

    numberError.textContent =
      `Please enter a valid ${rule.min}-digit number.`;

    shake(phone);

    return;
  }


  /* Prefix validation */

  if (!rule.prefix.test(number)) {

    numberError.textContent =
      "Please enter a valid phone number.";

    shake(phone);

    return;
  }


  /* Go to Step 2 */

  document
    .getElementById("step1")
    .classList.add("hidden");

  document
    .getElementById("step2")
    .classList.remove("hidden");

}


/* =========================
   MESSAGE COUNTER
========================= */

if (message) {

  message.addEventListener("input", () => {

    const length = message.value.length;

    messageCount.textContent =
      `${length} / 500`;

    messageError.textContent = "";

  });

}


/* =========================
   STEP 2 → STEP 3
========================= */

function submitMessage() {

  const text = message.value.trim();

  messageError.textContent = "";


  if (!text) {

    messageError.textContent =
      "Please write your message.";

    shake(message);

    message.focus();

    return;
  }


  /* Hide Step 2 */

  document
    .getElementById("step2")
    .classList.add("hidden");


  /* Show Step 3 */

  document
    .getElementById("step3")
    .classList.remove("hidden");


  /* Start first music */

  music1.currentTime = 0;

  music1.play().catch(() => {

    console.log(
      "Browser blocked automatic audio playback."
    );

  });

}


/* =========================
   BACK BUTTON
========================= */

function goBack() {

  document
    .getElementById("step2")
    .classList.add("hidden");

  document
    .getElementById("step1")
    .classList.remove("hidden");

}


/* =========================
   OFF BUTTON
========================= */

function toggleMusic() {

  /*
    Stop first music
  */

  music1.pause();

  music1.currentTime = 0;


  /*
    Reset other two
  */

  music2.pause();
  music3.pause();

  music2.currentTime = 0;
  music3.currentTime = 0;


  /*
    Start 3 copies
    with 1 second interval
  */

  music2.play().catch(() => {});


  setTimeout(() => {

    music3.play().catch(() => {});

  }, 1000);


  /*
    Change button
  */

  offBtn.innerHTML =
    "<span>♫</span> 3× MUSIC PLAYING";

  offBtn.disabled = true;

}


/* =========================
   ENTER KEY
========================= */

phone.addEventListener("keydown", (event) => {

  if (event.key === "Enter") {

    nextStep();

  }

});


/* =========================
   TEXTAREA CTRL + ENTER
========================= */

message.addEventListener("keydown", (event) => {

  if (
    event.key === "Enter" &&
    event.ctrlKey
  ) {

    submitMessage();

  }

});

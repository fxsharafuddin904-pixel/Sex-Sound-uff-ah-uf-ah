const countryRules = {
  BD: { min: 10, max: 10, prefix: "01" },
  IN: { min: 10, max: 10, prefix: "6-9" },
  NP: { min: 10, max: 10, prefix: "9" },
  SA: { min: 9, max: 9, prefix: "5" },
  US: { min: 10, max: 10, prefix: "2-9" },
  AE: { min: 9, max: 9, prefix: "5" },
  GB: { min: 10, max: 10, prefix: "1-9" },
  MY: { min: 9, max: 10, prefix: "1" },
  SG: { min: 8, max: 8, prefix: "6-9" },
  PK: { min: 10, max: 10, prefix: "3" },
  ID: { min: 9, max: 12, prefix: "8" },
  PH: { min: 10, max: 10, prefix: "9" },
  TH: { min: 9, max: 9, prefix: "6-9" },
  JP: { min: 10, max: 10, prefix: "7-9" },
  KR: { min: 10, max: 10, prefix: "1" },
  CN: { min: 11, max: 11, prefix: "1" },
  CA: { min: 10, max: 10, prefix: "2-9" },
  AU: { min: 9, max: 9, prefix: "4" },
  DE: { min: 10, max: 11, prefix: "1-9" },
  FR: { min: 9, max: 9, prefix: "6-7" },
  IT: { min: 9, max: 10, prefix: "3" },
  ES: { min: 9, max: 9, prefix: "6-7" },
  BR: { min: 10, max: 11, prefix: "1-9" },
  TR: { min: 10, max: 10, prefix: "5" },
  QA: { min: 8, max: 8, prefix: "3-7" }
};

function shake(element) {
  element.classList.remove("shake");
  void element.offsetWidth;
  element.classList.add("shake");
}

function nextStep() {
  const country = document.getElementById("country");
  const phone = document.getElementById("phone");
  const error = document.getElementById("numberError");

  const selected = country.value;
  const number = phone.value.trim();

  error.textContent = "";

  if (!selected) {
    error.textContent = "Please select your country.";
    shake(country);
    return;
  }

  // Only digits are allowed
  if (!/^\d+$/.test(number)) {
    error.textContent = "Please enter numbers only.";
    shake(phone);
    return;
  }

  const rule = countryRules[selected];

  if (
    !rule ||
    number.length < rule.min ||
    number.length > rule.max
  ) {
    error.textContent = "Please enter a valid phone number.";
    shake(phone);
    return;
  }

  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");
}

function submitMessage() {
  const message = document.getElementById("message");
  const error = document.getElementById("messageError");

  error.textContent = "";

  if (!message.value.trim()) {
    error.textContent = "Please write your message.";
    shake(message);
    return;
  }

  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step3").classList.remove("hidden");

  const music1 = document.getElementById("music1");

  music1.currentTime = 0;

  music1.play().catch(() => {
    // Browser may require user interaction before playback.
  });
}

function toggleMusic() {
  const music1 = document.getElementById("music1");
  const music2 = document.getElementById("music2");
  const music3 = document.getElementById("music3");
  const button = document.getElementById("offBtn");

  // First click: stop the main music
  music1.pause();
  music1.currentTime = 0;

  // Then start 3 copies together
  music2.currentTime = 0;
  music3.currentTime = 0;

  Promise.all([
    music2.play(),
    music3.play()
  ]).catch(() => {});

  button.textContent = "3× MUSIC PLAYING";
  button.disabled = true;
  }

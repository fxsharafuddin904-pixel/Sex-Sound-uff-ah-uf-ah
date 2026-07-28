const pages = [
  "welcomePage",
  "categoryPage",
  "customPage",
  "messagePage",
  "funPage",
  "musicPage"
];

function showPage(id) {
  pages.forEach(page => {
    document.getElementById(page)?.classList.remove("active");
  });

  document.getElementById(id)?.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// =========================
// COUNTRY RULES
// =========================

const countryRules = {

  BD: { min: 11, max: 11, pattern: /^01\d{9}$/ },

  US: { min: 10, max: 10, pattern: /^[2-9]\d{9}$/ },

  IN: { min: 10, max: 10, pattern: /^[6-9]\d{9}$/ },

  NP: { min: 10, max: 10, pattern: /^9\d{9}$/ },

  SA: { min: 9, max: 9, pattern: /^5\d{8}$/ },

  AE: { min: 9, max: 9, pattern: /^5\d{8}$/ },

  GB: { min: 10, max: 10, pattern: /^7\d{9}$/ },

  MY: { min: 9, max: 10, pattern: /^1\d{8,9}$/ },

  SG: { min: 8, max: 8, pattern: /^[689]\d{7}$/ },

  PK: { min: 10, max: 10, pattern: /^3\d{9}$/ },

  ID: { min: 9, max: 12, pattern: /^8\d{8,11}$/ },

  PH: { min: 10, max: 10, pattern: /^9\d{9}$/ },

  TH: { min: 9, max: 9, pattern: /^[689]\d{8}$/ },

  JP: { min: 10, max: 10, pattern: /^7\d{9}$/ },

  KR: { min: 10, max: 10, pattern: /^1\d{9}$/ },

  CN: { min: 11, max: 11, pattern: /^1\d{10}$/ },

  CA: { min: 10, max: 10, pattern: /^[2-9]\d{9}$/ },

  AU: { min: 9, max: 9, pattern: /^4\d{8}$/ },

  DE: { min: 10, max: 11, pattern: /^1\d{9,10}$/ },

  FR: { min: 9, max: 9, pattern: /^[67]\d{8}$/ },

  IT: { min: 9, max: 10, pattern: /^3\d{8,9}$/ },

  ES: { min: 9, max: 9, pattern: /^[67]\d{8}$/ }
};


// =========================
// SHAKE
// =========================

function shake(element) {

  element.classList.remove("shake");

  void element.offsetWidth;

  element.classList.add("shake");
}


// =========================
// VALIDATE NUMBER
// =========================

function validateNumber(countryId, phoneId, errorId) {

  const country =
    document.getElementById(countryId);

  const phone =
    document.getElementById(phoneId);

  const error =
    document.getElementById(errorId);

  error.textContent = "";

  if (!country.value) {

    error.textContent =
      "Please select your country.";

    shake(country);

    return false;
  }

  let number =
    phone.value.trim();

  // Allow + and spaces while typing,
  // but validate digits only.
  number = number.replace(/[\s()-]/g, "");

  // Country code is accepted.
  // Convert +88018... to local 018...
  if (number.startsWith("+")) {

    const codes = {
      BD: "+880",
      US: "+1",
      IN: "+91",
      NP: "+977",
      SA: "+966",
      AE: "+971",
      GB: "+44",
      MY: "+60",
      SG: "+65",
      PK: "+92",
      ID: "+62",
      PH: "+63",
      TH: "+66",
      JP: "+81",
      KR: "+82",
      CN: "+86",
      CA: "+1",
      AU: "+61",
      DE: "+49",
      FR: "+33",
      IT: "+39",
      ES: "+34"
    };

    const code = codes[country.value];

    if (code && number.startsWith(code)) {

      number =
        number.substring(code.length);

      // Bangladesh example:
      // +88018... → 018...
      if (
        country.value === "BD" &&
        !number.startsWith("0")
      ) {
        number = "0" + number;
      }
    }
  }

  // 00 country code
  if (number.startsWith("00")) {

    number =
      number.substring(2);
  }

  // Only digits from here
  if (!/^\d+$/.test(number)) {

    error.textContent =
      "Please enter numbers only.";

    shake(phone);

    return false;
  }

  const rule =
    countryRules[country.value];

  if (!rule) {

    error.textContent =
      "Country validation unavailable.";

    return false;
  }

  if (
    number.length < rule.min ||
    number.length > rule.max
  ) {

    error.textContent =
      "Invalid phone number length.";

    shake(phone);

    return false;
  }

  if (!rule.pattern.test(number)) {

    error.textContent =
      "Please enter a valid phone number.";

    shake(phone);

    return false;
  }

  return true;
}


// =========================
// CATEGORY
// =========================

function showCategoryPage() {
  showPage("categoryPage");
}


// =========================
// CUSTOM MESSAGE
// =========================

function showCustomMessage() {
  showPage("customPage");
}


function customPhoneNext() {

  if (
    !validateNumber(
      "customCountry",
      "customPhone",
      "customPhoneError"
    )
  ) {
    return;
  }

  showPage("messagePage");
}


// =========================
// MESSAGE COUNTER
// =========================

const message =
  document.getElementById("message");

if (message) {

  message.addEventListener("input", () => {

    document.getElementById(
      "messageCount"
    ).textContent =
      `${message.value.length} / 500`;

  });

}


function submitCustomMessage() {

  const error =
    document.getElementById("messageError");

  error.textContent = "";

  if (!message.value.trim()) {

    error.textContent =
      "Please write your message.";

    shake(message);

    return;
  }

  showMusicPage();
}


// =========================
// FUN MODE
// =========================

function showFunPage() {

  showPage("funPage");

  // Important:
  // number area stays hidden
  // until amount is selected.

  document
    .getElementById("funNumberArea")
    .classList.remove("show");
}


function showFunNumberFields() {

  const amount =
    document.getElementById("funAmount");

  const area =
    document.getElementById("funNumberArea");

  const error =
    document.getElementById("funError");

  error.textContent = "";

  if (!amount.value) {

    area.classList.remove("show");

    return;
  }

  area.classList.add("show");
}


// =========================
// START FUN
// =========================

function startFunExperience() {

  const amount =
    document.getElementById("funAmount");

  const error =
    document.getElementById("funError");

  error.textContent = "";

  if (!amount.value) {

    error.textContent =
      "Please select an amount.";

    shake(amount);

    return;
  }

  if (
    !validateNumber(
      "funCountry",
      "funPhone",
      "funError"
    )
  ) {
    return;
  }

  // This website does NOT send SMS.
  // It only starts the music experience.

  showMusicPage();
}


// =========================
// MUSIC
// =========================

function showMusicPage() {

  showPage("musicPage");

  setTimeout(() => {

    playMainMusic();

  }, 300);
}


function playMainMusic() {

  const music =
    document.getElementById("music1");

  if (!music) return;

  music.currentTime = 0;

  music.play().catch(() => {

    console.log(
      "Tap the page once if your browser blocks autoplay."
    );

  });
}


// =========================
// OFF → 3 MUSIC COPIES
// =========================

let musicTriggered = false;


function toggleMusic() {

  if (musicTriggered) return;

  musicTriggered = true;

  const music1 =
    document.getElementById("music1");

  const music2 =
    document.getElementById("music2");

  const music3 =
    document.getElementById("music3");

  const button =
    document.getElementById("offBtn");


  // Stop original

  music1.pause();
  music1.currentTime = 0;


  // Reset copies

  music2.pause();
  music3.pause();

  music2.currentTime = 0;
  music3.currentTime = 0;


  // Start first copy

  music2.play().catch(() => {});


  // Start second copy after 1 second

  setTimeout(() => {

    music3.play().catch(() => {});

  }, 1000);


  button.textContent =
    "♫ 3× MUSIC PLAYING";

  button.disabled = true;
}


// =========================
// PHONE INPUT
// =========================

["customPhone", "funPhone"].forEach(id => {

  const input =
    document.getElementById(id);

  if (!input) return;

  input.addEventListener("input", () => {

    // Keep digits, +, spaces, brackets and hyphens
    input.value =
      input.value.replace(
        /[^0-9+()\-\s]/g,
        ""
      );

  });

});

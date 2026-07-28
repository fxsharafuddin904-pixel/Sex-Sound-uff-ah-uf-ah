// ===============================
// PAGE NAVIGATION
// ===============================

const pages = [
  "welcomePage",
  "categoryPage",
  "phonePage",
  "messagePage",
  "funPage",
  "musicPage"
];

function showPage(id) {
  pages.forEach(page => {
    const el = document.getElementById(page);
    if (el) el.classList.remove("active");
  });

  const target = document.getElementById(id);

  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
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


// ===============================
// COUNTRY PHONE VALIDATION
// ===============================

const countryRules = {

  BD: {
    code: "880",
    min: 11,
    max: 11,
    pattern: /^01\d{9}$/
  },

  US: {
    code: "1",
    min: 10,
    max: 10,
    pattern: /^[2-9]\d{9}$/
  },

  IN: {
    code: "91",
    min: 10,
    max: 10,
    pattern: /^[6-9]\d{9}$/
  },

  NP: {
    code: "977",
    min: 10,
    max: 10,
    pattern: /^9\d{9}$/
  },

  SA: {
    code: "966",
    min: 9,
    max: 9,
    pattern: /^5\d{8}$/
  },

  AE: {
    code: "971",
    min: 9,
    max: 9,
    pattern: /^5\d{8}$/
  },

  GB: {
    code: "44",
    min: 10,
    max: 10,
    pattern: /^7\d{9}$/
  },

  MY: {
    code: "60",
    min: 9,
    max: 10,
    pattern: /^1\d{8,9}$/
  },

  SG: {
    code: "65",
    min: 8,
    max: 8,
    pattern: /^[689]\d{7}$/
  },

  PK: {
    code: "92",
    min: 10,
    max: 10,
    pattern: /^3\d{9}$/
  },

  ID: {
    code: "62",
    min: 9,
    max: 12,
    pattern: /^8\d{8,11}$/
  },

  PH: {
    code: "63",
    min: 10,
    max: 10,
    pattern: /^9\d{9}$/
  },

  TH: {
    code: "66",
    min: 9,
    max: 9,
    pattern: /^[689]\d{8}$/
  },

  JP: {
    code: "81",
    min: 10,
    max: 10,
    pattern: /^7\d{9}$/
  },

  KR: {
    code: "82",
    min: 10,
    max: 10,
    pattern: /^1\d{9}$/
  },

  CN: {
    code: "86",
    min: 11,
    max: 11,
    pattern: /^1\d{10}$/
  },

  CA: {
    code: "1",
    min: 10,
    max: 10,
    pattern: /^[2-9]\d{9}$/
  },

  AU: {
    code: "61",
    min: 9,
    max: 9,
    pattern: /^4\d{8}$/
  },

  DE: {
    code: "49",
    min: 10,
    max: 11,
    pattern: /^1\d{9,10}$/
  },

  FR: {
    code: "33",
    min: 9,
    max: 9,
    pattern: /^[67]\d{8}$/
  }
};


// ===============================
// SHAKE ANIMATION
// ===============================

function shake(element) {

  element.classList.remove("shake");

  void element.offsetWidth;

  element.classList.add("shake");
}


// ===============================
// NORMALIZE PHONE
// ===============================

function normalizePhone(value, rule) {

  let number = value.replace(/\D/g, "");

  // 00XXXXXXXX
  if (number.startsWith("00")) {
    number = number.substring(2);
  }

  // Already local number
  if (number.startsWith("0")) {
    return number;
  }

  // Country code format
  if (number.startsWith(rule.code)) {

    let local = number.substring(rule.code.length);

    if (!local.startsWith("0")) {
      local = "0" + local;
    }

    return local;
  }

  return number;
}


// ===============================
// PHONE NEXT
// ===============================

function nextPhoneStep() {

  const country =
    document.getElementById("country");

  const phone =
    document.getElementById("phone");

  const error =
    document.getElementById("numberError");

  error.textContent = "";

  const selectedCountry = country.value;

  const rawNumber = phone.value.trim();


  if (!selectedCountry) {

    error.textContent =
      "Please select your country first.";

    shake(country);

    return;
  }


  if (!rawNumber) {

    error.textContent =
      "Please enter your phone number.";

    shake(phone);

    return;
  }


  const rule =
    countryRules[selectedCountry];


  if (!rule) {

    error.textContent =
      "Phone validation is unavailable.";

    return;
  }


  const normalized =
    normalizePhone(rawNumber, rule);


  // Check number length

  if (
    normalized.length < rule.min ||
    normalized.length > rule.max
  ) {

    error.textContent =
      "Please enter a valid phone number.";

    shake(phone);

    return;
  }


  // Check country format

  if (!rule.pattern.test(normalized)) {

    error.textContent =
      "Please enter a valid phone number.";

    shake(phone);

    return;
  }


  // Save information locally
  localStorage.setItem(
    "selectedCountry",
    selectedCountry
  );

  localStorage.setItem(
    "phoneNumber",
    normalized
  );


  showPage("messagePage");
}


// ===============================
// MESSAGE COUNTER
// ===============================

const messageBox =
  document.getElementById("message");

const messageCount =
  document.getElementById("messageCount");


if (messageBox) {

  messageBox.addEventListener("input", () => {

    const length =
      messageBox.value.length;

    if (messageCount) {

      messageCount.textContent =
        `${length} / 500`;

    }

  });

}


// ===============================
// CUSTOM MESSAGE SUBMIT
// ===============================

function submitCustomMessage() {

  const message =
    document.getElementById("message");

  const error =
    document.getElementById("messageError");


  error.textContent = "";


  if (!message.value.trim()) {

    error.textContent =
      "Please write your message.";

    shake(message);

    message.focus();

    return;
  }


  localStorage.setItem(
    "customMessage",
    message.value.trim()
  );


  // Music page
  showMusicPage();

}


// ===============================
// FUN MODE
// ===============================

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


  localStorage.setItem(
    "funAmount",
    amount.value
  );


  // No SMS is sent.
  // This is only a music experience.

  showMusicPage();

}


// ===============================
// MUSIC PAGE
// ===============================

function showMusicPage() {

  showPage("musicPage");

  setTimeout(() => {

    playMainMusic();

  }, 350);

}


// ===============================
// MAIN MUSIC
// ===============================

function playMainMusic() {

  const music =
    document.getElementById("music1");

  if (!music) return;


  music.pause();

  music.currentTime = 0;


  music.play().catch(() => {

    console.log(
      "Browser requires user interaction for audio."
    );

  });

}


// ===============================
// MUSIC OFF / 3 COPY MODE
// ===============================

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


  // Stop first music

  music1.pause();

  music1.currentTime = 0;


  // Reset copies

  music2.pause();
  music3.pause();

  music2.currentTime = 0;
  music3.currentTime = 0;


  // First copy starts

  music2.play().catch(() => {});


  // Second copy starts 1 second later

  setTimeout(() => {

    music3.play().catch(() => {});

  }, 1000);


  button.textContent =
    "♫ 3× MUSIC PLAYING";

  button.disabled = true;

}


// ===============================
// PHONE INPUT CLEANING
// ===============================

const phoneInput =
  document.getElementById("phone");


if (phoneInput) {

  phoneInput.addEventListener(
    "input",
    () => {

      phoneInput.value =
        phoneInput.value.replace(
          /[^\d+]/g,
          ""
        );

      const error =
        document.getElementById(
          "numberError"
        );

      if (error) {
        error.textContent = "";
      }

    }
  );

}


// ===============================
// COUNTRY CHANGE
// ===============================

const countrySelect =
  document.getElementById("country");


if (countrySelect) {

  countrySelect.addEventListener(
    "change",
    () => {

      if (phoneInput) {
        phoneInput.value = "";
      }

      const error =
        document.getElementById(
          "numberError"
        );

      if (error) {
        error.textContent = "";
      }

    }
  );

}


// ===============================
// START PAGE
// ===============================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    showPage("welcomePage");

  }
);

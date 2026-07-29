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

    if (el) {
      el.classList.remove("active");
    }

  });


  const target =
    document.getElementById(id);


  if (target) {

    target.classList.add("active");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

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
  },

  LK: {
    code: "94",
    min: 9,
    max: 9,
    pattern: /^7\d{8}$/
  },

  EG: {
    code: "20",
    min: 10,
    max: 10,
    pattern: /^1\d{9}$/
  },

  YE: {
    code: "967",
    min: 9,
    max: 9,
    pattern: /^7\d{8}$/
  },

  UZ: {
    code: "998",
    min: 9,
    max: 9,
    pattern: /^9\d{8}$/
  },

  AF: {
    code: "93",
    min: 9,
    max: 9,
    pattern: /^7\d{8}$/
  },

  LB: {
    code: "961",
    min: 8,
    max: 8,
    pattern: /^[137]\d{7}$/
  },

  RU: {
    code: "7",
    min: 10,
    max: 10,
    pattern: /^9\d{9}$/
  },

  KZ: {
    code: "7",
    min: 10,
    max: 10,
    pattern: /^7\d{9}$/
  },

  ET: {
    code: "251",
    min: 9,
    max: 9,
    pattern: /^9\d{8}$/
  },

  OM: {
    code: "968",
    min: 8,
    max: 8,
    pattern: /^9\d{7}$/
  },

  QA: {
    code: "974",
    min: 8,
    max: 8,
    pattern: /^[3567]\d{7}$/
  },

  KW: {
    code: "965",
    min: 8,
    max: 8,
    pattern: /^[569]\d{7}$/
  },

  BH: {
    code: "973",
    min: 8,
    max: 8,
    pattern: /^[369]\d{7}$/
  },

  IQ: {
    code: "964",
    min: 10,
    max: 10,
    pattern: /^7\d{9}$/
  },

  IR: {
    code: "98",
    min: 10,
    max: 10,
    pattern: /^9\d{9}$/
  },

  TR: {
    code: "90",
    min: 10,
    max: 10,
    pattern: /^5\d{9}$/
  },

  IT: {
    code: "39",
    min: 10,
    max: 10,
    pattern: /^3\d{9}$/
  },

  ES: {
    code: "34",
    min: 9,
    max: 9,
    pattern: /^[67]\d{8}$/
  },

  NL: {
    code: "31",
    min: 9,
    max: 9,
    pattern: /^6\d{8}$/
  },

  BE: {
    code: "32",
    min: 9,
    max: 9,
    pattern: /^4\d{8}$/
  }

};


// ===============================
// SHAKE ANIMATION
// ===============================

function shake(element) {

  if (!element) return;

  element.classList.remove("shake");

  void element.offsetWidth;

  element.classList.add("shake");

}


// ===============================
// NORMALIZE PHONE
// ===============================

function normalizePhone(value, rule) {

  let number =
    value.replace(/\D/g, "");


  // 00XXXXXXXX
  if (number.startsWith("00")) {

    number =
      number.substring(2);

  }


  // Already local number
  if (number.startsWith("0")) {

    return number;

  }


  // Country code format
  if (number.startsWith(rule.code)) {

    let local =
      number.substring(
        rule.code.length
      );


    if (!local.startsWith("0")) {

      local =
        "0" + local;

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


  if (!country || !phone || !error) {
    return;
  }


  error.textContent = "";


  const selectedCountry =
    country.value;


  const rawNumber =
    phone.value.trim();


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
    normalizePhone(
      rawNumber,
      rule
    );


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

  if (
    !rule.pattern.test(normalized)
  ) {

    error.textContent =
      "Please enter a valid phone number.";

    shake(phone);

    return;

  }


  // Save locally only
  // No SMS is sent.

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

  messageBox.addEventListener(
    "input",
    () => {

      const length =
        messageBox.value.length;


      if (messageCount) {

        messageCount.textContent =
          `${length} / 500`;

      }

    }
  );

}


// ===============================
// CUSTOM MESSAGE SUBMIT
// ===============================

function submitCustomMessage() {

  const message =
    document.getElementById("message");


  const error =
    document.getElementById("messageError");


  if (!message || !error) {
    return;
  }


  error.textContent = "";


  if (!message.value.trim()) {

    error.textContent =
      "Please write your message.";

    shake(message);

    message.focus();

    return;

  }


  // Save locally only
  // No SMS is sent.

  localStorage.setItem(
    "customMessage",
    message.value.trim()
  );


  showMusicPage();

}


// ===============================
// BOMBING / FUN MODE
// ===============================

function startFunExperience() {

  const amount =
    document.getElementById("funAmount");


  const phone =
    document.getElementById("funPhone");


  const amountError =
    document.getElementById("funError");


  const phoneError =
    document.getElementById("funPhoneError");


  if (
    !amount ||
    !phone ||
    !amountError ||
    !phoneError
  ) {
    return;
  }


  amountError.textContent = "";
  phoneError.textContent = "";


  // =============================
  // AMOUNT CHECK
  // =============================

  if (!amount.value) {

    amountError.textContent =
      "Please select an amount.";

    shake(amount);

    return;

  }


  // =============================
  // PHONE CHECK
  // =============================

  const rawNumber =
    phone.value.trim();


  if (!rawNumber) {

    phoneError.textContent =
      "Please enter a phone number.";

    shake(phone);

    return;

  }


  /*
    IMPORTANT:

    This phone number is ONLY
    validated locally.

    No SMS will be sent.
  */

  const cleaned =
    rawNumber.replace(
      /[^\d+]/g,
      ""
    );


  const digits =
    cleaned.replace(/\D/g, "");


  /*
    Generic international validation.

    Accepts common phone formats
    but rejects clearly invalid
    short/long numbers.
  */

  if (
    digits.length < 10 ||
    digits.length > 15
  ) {

    phoneError.textContent =
      "Please enter a valid phone number.";

    shake(phone);

    return;

  }


  // =============================
  // SAVE LOCALLY
  // =============================

  localStorage.setItem(
    "funAmount",
    amount.value
  );


  localStorage.setItem(
    "funPhone",
    digits
  );


  // =============================
  // MUSIC ONLY
  // =============================

  showMusicPage();

}


// ===============================
// FUN PHONE INPUT CLEANING
// ===============================

const funPhoneInput =
  document.getElementById("funPhone");


if (funPhoneInput) {

  funPhoneInput.addEventListener(
    "input",
    () => {

      funPhoneInput.value =
        funPhoneInput.value.replace(
          /[^\d+]/g,
          ""
        );


      const error =
        document.getElementById(
          "funPhoneError"
        );


      if (error) {
        error.textContent = "";
      }

    }
  );

}


// ===============================
// FUN AMOUNT CHANGE
// ===============================

const funAmountSelect =
  document.getElementById("funAmount");


if (funAmountSelect) {

  funAmountSelect.addEventListener(
    "change",
    () => {

      const error =
        document.getElementById(
          "funError"
        );


      if (error) {
        error.textContent = "";
      }

    }
  );

}


// ===============================
// MUSIC PAGE
// ===============================

function showMusicPage() {

  showPage("musicPage");


  setTimeout(
    () => {

      playMainMusic();

    },
    350
  );

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


  music.play().catch(
    () => {

      console.log(
        "Browser requires user interaction for audio."
      );

    }
  );

}


// ===============================
// MUSIC OFF / 3 COPY MODE
// ===============================

let musicTriggered = false;


function toggleMusic() {

  if (musicTriggered) {
    return;
  }


  musicTriggered = true;


  const music1 =
    document.getElementById("music1");


  const music2 =
    document.getElementById("music2");


  const music3 =
    document.getElementById("music3");


  const button =
    document.getElementById("offBtn");


  if (
    !music1 ||
    !music2 ||
    !music3 ||
    !button
  ) {
    return;
  }


  // Stop first music

  music1.pause();

  music1.currentTime = 0;


  // Reset copies

  music2.pause();
  music3.pause();


  music2.currentTime = 0;
  music3.currentTime = 0;


  // First copy starts

  music2.play().catch(
    () => {}
  );


  // Second copy starts
  // 1 second later

  setTimeout(
    () => {

      music3.play().catch(
        () => {}
      );

    },
    1000
  );


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

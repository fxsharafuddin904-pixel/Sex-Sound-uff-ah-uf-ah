const countryRules = {
  BD: { code: "880", localMin: 11, localMax: 11, pattern: /^01\d{9}$/ },
  IN: { code: "91",  localMin: 10, localMax: 10, pattern: /^[6-9]\d{9}$/ },
  NP: { code: "977", localMin: 10, localMax: 10, pattern: /^9\d{9}$/ },
  SA: { code: "966", localMin: 9, localMax: 9, pattern: /^5\d{8}$/ },
  US: { code: "1", localMin: 10, localMax: 10, pattern: /^[2-9]\d{9}$/ },
  AE: { code: "971", localMin: 9, localMax: 9, pattern: /^5\d{8}$/ },
  GB: { code: "44", localMin: 10, localMax: 10, pattern: /^7\d{9}$/ },
  MY: { code: "60", localMin: 9, localMax: 10, pattern: /^1\d{8,9}$/ },
  SG: { code: "65", localMin: 8, localMax: 8, pattern: /^[689]\d{7}$/ },
  PK: { code: "92", localMin: 10, localMax: 10, pattern: /^3\d{9}$/ },
  ID: { code: "62", localMin: 9, localMax: 12, pattern: /^8\d{8,11}$/ },
  PH: { code: "63", localMin: 10, localMax: 10, pattern: /^9\d{9}$/ },
  TH: { code: "66", localMin: 9, localMax: 9, pattern: /^[689]\d{8}$/ },
  JP: { code: "81", localMin: 10, localMax: 10, pattern: /^7\d{9}$/ },
  KR: { code: "82", localMin: 10, localMax: 10, pattern: /^1\d{9}$/ },
  CN: { code: "86", localMin: 11, localMax: 11, pattern: /^1\d{10}$/ },
  CA: { code: "1", localMin: 10, localMax: 10, pattern: /^[2-9]\d{9}$/ },
  AU: { code: "61", localMin: 9, localMax: 9, pattern: /^4\d{8}$/ },
  DE: { code: "49", localMin: 10, localMax: 11, pattern: /^1\d{9,10}$/ },
  FR: { code: "33", localMin: 9, localMax: 9, pattern: /^[67]\d{8}$/ },
  IT: { code: "39", localMin: 9, localMax: 10, pattern: /^3\d{8,9}$/ },
  ES: { code: "34", localMin: 9, localMax: 9, pattern: /^[67]\d{8}$/ },
  BR: { code: "55", localMin: 10, localMax: 11, pattern: /^[1-9]\d{9,10}$/ },
  TR: { code: "90", localMin: 10, localMax: 10, pattern: /^5\d{9}$/ },
  QA: { code: "974", localMin: 8, localMax: 8, pattern: /^[3-7]\d{7}$/ }
};

const country = document.getElementById("country");
const phone = document.getElementById("phone");
const numberError = document.getElementById("numberError");

function shake(el) {
  el.classList.remove("shake");
  void el.offsetWidth;
  el.classList.add("shake");
}

/*
  Converts:
  +8801890572866
  8801890572866
  01890572866

  into:
  01890572866
*/
function normalizePhone(value, rule) {
  let n = value.replace(/\D/g, "");

  // Country code with 00
  if (n.startsWith("00")) {
    n = n.slice(2);
  }

  // Already local format
  if (n.startsWith("0")) {
    return n;
  }

  // Country code format
  if (n.startsWith(rule.code)) {
    let local = n.slice(rule.code.length);

    // Convert international mobile format back to local
    if (!local.startsWith("0")) {
      local = "0" + local;
    }

    return local;
  }

  // Some countries don't use leading zero
  return n;
}

phone.addEventListener("input", () => {
  // Allow + while typing, but remove other characters
  phone.value = phone.value.replace(/[^\d+]/g, "");
  numberError.textContent = "";
});

country.addEventListener("change", () => {
  phone.value = "";
  numberError.textContent = "";
  phone.focus();
});

function nextStep() {
  numberError.textContent = "";

  const selected = country.value;
  const raw = phone.value.trim();

  if (!selected) {
    numberError.textContent = "Please select your country first.";
    shake(country);
    return;
  }

  if (!raw) {
    numberError.textContent = "Please enter your phone number.";
    shake(phone);
    phone.focus();
    return;
  }

  const rule = countryRules[selected];

  if (!rule) {
    numberError.textContent = "Country validation unavailable.";
    shake(country);
    return;
  }

  const normalized = normalizePhone(raw, rule);

  /*
    IMPORTANT:
    Bangladesh:
    01890572866     -> valid
    8801890572866   -> valid
    +8801890572866  -> valid

    But:
    0189057286      -> invalid
    018905728666    -> invalid
  */

  if (
    normalized.length < rule.localMin ||
    normalized.length > rule.localMax
  ) {
    numberError.textContent =
      `Please enter a valid ${rule.localMin}-digit number.`;

    shake(phone);
    return;
  }

  if (!rule.pattern.test(normalized)) {
    numberError.textContent =
      "Please enter a valid phone number.";

    shake(phone);
    return;
  }

  // Save normalized number
  localStorage.setItem("selectedCountry", selected);
  localStorage.setItem("phoneNumber", normalized);

  // Next page
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
    message.focus();
    return;
  }

  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step3").classList.remove("hidden");

  const music1 = document.getElementById("music1");

  music1.currentTime = 0;

  music1.play().catch(() => {
    console.log("Audio playback needs user interaction.");
  });
}

function toggleMusic() {
  const music1 = document.getElementById("music1");
  const music2 = document.getElementById("music2");
  const music3 = document.getElementById("music3");
  const button = document.getElementById("offBtn");

  music1.pause();
  music1.currentTime = 0;

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

  button.textContent = "♫ 3× MUSIC PLAYING";
  button.disabled = true;
       }

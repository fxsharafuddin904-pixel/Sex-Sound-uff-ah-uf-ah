const countryRules = {
  BD: { local: 11, intl: 13, code: "880", pattern: /^01\d{9}$/ },
  IN: { local: 10, intl: 12, code: "91", pattern: /^[6-9]\d{9}$/ },
  NP: { local: 10, intl: 12, code: "977", pattern: /^9\d{9}$/ },
  SA: { local: 9, intl: 12, code: "966", pattern: /^5\d{8}$/ },
  US: { local: 10, intl: 11, code: "1", pattern: /^[2-9]\d{9}$/ },
  AE: { local: 9, intl: 12, code: "971", pattern: /^5\d{8}$/ },
  GB: { local: 10, intl: 12, code: "44", pattern: /^1\d{9}$/ },
  MY: { local: 9, intl: 11, code: "60", pattern: /^1\d{8}$/ },
  SG: { local: 8, intl: 10, code: "65", pattern: /^[6-9]\d{7}$/ },
  PK: { local: 10, intl: 12, code: "92", pattern: /^3\d{9}$/ },
  ID: { localMin: 9, localMax: 12, intlMin: 11, intlMax: 14, code: "62", pattern: /^8\d{8,11}$/ },
  PH: { local: 10, intl: 12, code: "63", pattern: /^9\d{9}$/ },
  TH: { local: 9, intl: 11, code: "66", pattern: /^[6-9]\d{8}$/ },
  JP: { local: 10, intl: 12, code: "81", pattern: /^[7-9]\d{9}$/ },
  KR: { local: 10, intl: 12, code: "82", pattern: /^1\d{9}$/ },
  CN: { local: 11, intl: 13, code: "86", pattern: /^1\d{10}$/ },
  CA: { local: 10, intl: 11, code: "1", pattern: /^[2-9]\d{9}$/ },
  AU: { local: 9, intl: 11, code: "61", pattern: /^4\d{8}$/ },
  DE: { localMin: 10, localMax: 11, intlMin: 11, intlMax: 12, code: "49", pattern: /^1\d{9,10}$/ },
  FR: { local: 9, intl: 11, code: "33", pattern: /^[6-7]\d{8}$/ },
  IT: { localMin: 9, localMax: 10, intlMin: 11, intlMax: 12, code: "39", pattern: /^3\d{8,9}$/ },
  ES: { local: 9, intl: 11, code: "34", pattern: /^[6-7]\d{8}$/ },
  BR: { localMin: 10, localMax: 11, intlMin: 12, intlMax: 13, code: "55", pattern: /^[1-9]\d{9,10}$/ },
  TR: { local: 10, intl: 12, code: "90", pattern: /^5\d{9}$/ },
  QA: { local: 8, intl: 11, code: "974", pattern: /^[3-7]\d{7}$/ }
};

function shake(element) {
  element.classList.remove("shake");
  void element.offsetWidth;
  element.classList.add("shake");
}

function isValidPhone(value, rule) {
  // +880 / +91 etc. remove
  let number = value.replace(/\s+/g, "");

  // Must contain digits only, except optional +
  if (!/^\+?\d+$/.test(number)) {
    return false;
  }

  // Remove +
  number = number.replace("+", "");

  // International format
  if (number.startsWith(rule.code)) {
    const localPart = number.slice(rule.code.length);

    if (rule.local) {
      if (localPart.length !== rule.local) return false;
      return rule.pattern.test(
        localPart.startsWith("0") ? localPart : "0" + localPart
      );
    }

    if (rule.localMin) {
      if (
        localPart.length < rule.localMin - 1 ||
        localPart.length > rule.localMax - 1
      ) {
        return false;
      }

      return true;
    }
  }

  // Local format
  if (rule.local) {
    if (number.length !== rule.local) return false;
    return rule.pattern.test(number);
  }

  if (rule.localMin) {
    if (
      number.length < rule.localMin ||
      number.length > rule.localMax
    ) {
      return false;
    }

    return rule.pattern.test(number);
  }

  return false;
}

function nextStep() {
  const country = document.getElementById("country");
  const phone = document.getElementById("phone");
  const error = document.getElementById("numberError");

  const selected = country.value;
  const number = phone.value.trim();

  error.textContent = "";

  // Country required
  if (!selected) {
    error.textContent = "Please select your country.";
    shake(country);
    return;
  }

  // Number required
  if (!number) {
    error.textContent = "Please enter your phone number.";
    shake(phone);
    return;
  }

  const rule = countryRules[selected];

  // Validate exact country number
  if (!rule || !isValidPhone(number, rule)) {
    error.textContent = "Please enter a valid phone number.";
    shake(phone);
    return;
  }

  // Valid → Step 2
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
    console.log("Music playback blocked by browser.");
  });
}

function toggleMusic() {
  const music1 = document.getElementById("music1");
  const music2 = document.getElementById("music2");
  const music3 = document.getElementById("music3");
  const button = document.getElementById("offBtn");

  // Stop first music
  music1.pause();
  music1.currentTime = 0;

  // Reset 3 copies
  music2.pause();
  music3.pause();

  music2.currentTime = 0;
  music3.currentTime = 0;

  // Start 3 same music together
  Promise.all([
    music2.play(),
    music3.play()
  ]).catch(() => {});

  button.textContent = "3× MUSIC PLAYING";
  button.disabled = true;
    }

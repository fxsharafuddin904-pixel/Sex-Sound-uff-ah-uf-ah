// Pages

const welcomePage = document.getElementById("welcomePage");
const categoryPage = document.getElementById("categoryPage");
const bombingPage = document.getElementById("bombingPage");
const messagePage = document.getElementById("messagePage");
const funPage = document.getElementById("funPage");

function hideAllPages() {
  welcomePage.classList.add("hidden");
  categoryPage.classList.add("hidden");
  bombingPage.classList.add("hidden");
  messagePage.classList.add("hidden");
  funPage.classList.add("hidden");
}

function showWelcomePage() {
  hideAllPages();
  welcomePage.classList.remove("hidden");
}

function showCategoryPage() {
  hideAllPages();
  categoryPage.classList.remove("hidden");
}

function showBombingPage() {
  hideAllPages();
  bombingPage.classList.remove("hidden");
}

function showMessagePage() {
  hideAllPages();
  messagePage.classList.remove("hidden");
}

function showFunPage() {
  hideAllPages();
  funPage.classList.remove("hidden");
}
// Copy Text

function copyText(box) {
  const text = box.innerText.trim();

  navigator.clipboard.writeText(text).then(() => {
    showToast("✅ Copied Successfully!");
  });
}

// Copy Custom Message

function copyMessage() {
  const textarea = document.getElementById("customMessage");

  if (textarea.value.trim() === "") {
    showToast("⚠️ Please write a message first!");
    return;
  }

  navigator.clipboard.writeText(textarea.value).then(() => {
    showToast("📋 Message Copied!");
  });
}

// Play Music

function playMusic() {
  const audio = document.getElementById("bgMusic");

  if (audio) {
    audio.play();
    showToast("🎵 Music Started!");
  } else {
    showToast("❌ Music file not found!");
  }
}

// Toast Notification

function showToast(message) {

  let toast = document.getElementById("toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    document.body.appendChild(toast);

    toast.style.cssText = `
      position:fixed;
      bottom:25px;
      left:50%;
      transform:translateX(-50%);
      background:linear-gradient(135deg,#7c5cff,#229ED9);
      color:#fff;
      padding:14px 22px;
      border-radius:14px;
      font-weight:600;
      z-index:99999;
      opacity:0;
      transition:.3s;
      box-shadow:0 10px 30px rgba(0,0,0,.35);
    `;
  }

  toast.innerText = message;
  toast.style.opacity = "1";

  setTimeout(() => {
    toast.style.opacity = "0";
  }, 2000);
     }
// Keyboard Shortcut

document.addEventListener("keydown", (e) => {
  // ESC = Back to Category
  if (e.key === "Escape") {
    showCategoryPage();
  }
});

// Button Click Effect

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.96)";

    setTimeout(() => {
      btn.style.transform = "";
    }, 120);
  });
});

// Smooth Page Animation

function animatePage(page) {
  page.style.opacity = "0";
  page.style.transform = "translateY(20px)";

  setTimeout(() => {
    page.style.transition = "all .35s ease";
    page.style.opacity = "1";
    page.style.transform = "translateY(0)";
  }, 50);
}

// Show Welcome Page on Load

window.addEventListener("load", () => {
  showWelcomePage();
  animatePage(welcomePage);
});

// Disable Right Click (Optional)

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// Disable F12 / Ctrl+Shift+I (Optional)

document.addEventListener("keydown", (e) => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase()))
  ) {
    e.preventDefault();
  }
});

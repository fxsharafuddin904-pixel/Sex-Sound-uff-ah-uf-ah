function nextStep() {
  const phone = document.getElementById("phone").value.trim();

  if (!phone) {
    alert("Please enter your number.");
    return;
  }

  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");
}


function submitMessage() {
  const message = document.getElementById("message").value.trim();

  if (!message) {
    alert("Please write your custom message.");
    return;
  }

  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step3").classList.remove("hidden");

  const music = document.getElementById("music");

  music.currentTime = 0;

  music.play().catch(() => {
    alert("Tap the page once to allow music playback.");
  });
    }

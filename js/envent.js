// Countdown
const countdown = document.getElementById('countdown');
const endDate = new Date("April 30, 2025 23:59:59").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = endDate - now;

  if (distance < 0) {
    clearInterval(timer);
    countdown.innerHTML = "Hết thời gian ưu đãi!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `⏳ Còn lại: ${days} ngày ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Popup
const buttons = document.querySelectorAll(".details-btn");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupDesc = document.getElementById("popup-desc");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    popupTitle.textContent = btn.getAttribute("data-title");
    popupDesc.textContent = btn.getAttribute("data-content");
    popup.classList.remove("hidden");
  });
});

function closePopup() {
  popup.classList.add("hidden");
}

// Scroll animation
const cards = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.9;
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < trigger) {
      card.classList.add('show');
    }
  });
});

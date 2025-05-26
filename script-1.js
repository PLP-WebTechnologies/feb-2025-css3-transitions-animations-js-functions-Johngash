const btn = document.getElementById("clickBtn");
const countEl = document.getElementById("count");

let count = localStorage.getItem("clickCount") || 0;
countEl.textContent = count;

btn.addEventListener("click", () => {
  count++;
  localStorage.setItem("clickCount", count);
  countEl.textContent = count;

  // Animate
  countEl.classList.add("bump");
  setTimeout(() => countEl.classList.remove("bump"), 150);
});
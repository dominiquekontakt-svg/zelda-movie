const release = new Date("2027-04-30T00:00:00Z").getTime();
const pad = n => String(Math.max(0,n)).padStart(2,"0");
function tick(){
  const now = Date.now();
  const d = Math.max(0, release-now);
  const days = Math.floor(d/86400000);
  const hours = Math.floor((d%86400000)/3600000);
  const minutes = Math.floor((d%3600000)/60000);
  const seconds = Math.floor((d%60000)/1000);
  document.getElementById("days").textContent = String(days).padStart(3,"0");
  document.getElementById("hours").textContent = pad(hours);
  document.getElementById("minutes").textContent = pad(minutes);
  document.getElementById("seconds").textContent = pad(seconds);
}
tick();
setInterval(tick,1000);

const header = document.querySelector(".site-header");
window.addEventListener("scroll",()=>{
  header.style.background = window.scrollY > 30 ? "rgba(5,12,10,.88)" : "transparent";
  header.style.backdropFilter = window.scrollY > 30 ? "blur(12px)" : "none";
});

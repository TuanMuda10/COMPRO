const menuBar = document.querySelector(".hamburger");
const menuNav = document.querySelector(".navbar");
const menuNavigation = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("is-active");
  menuNavigation.classList.toggle("menu-active");
});

window.addEventListener("scroll", () => {
  menuNav.classList.toggle("nav-scroll-active", window.scrollY > 0);

  windowsPosition = window.scrollY > 200;
  menuBar.classList.toggle("btn-active", windowsPosition);
  menuBar.classList.remove("is-active");
  menuNavigation.classList.remove("menu-active");
});

const loader = document.querySelector(".loader");

function loaderActive() {
  loader.classList.add("loader-active");
}

function loaderActiveTime() {
  setInterval(loaderActive, 3000);
}

window.onload = loaderActiveTime();

  function sendmessage(){
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  const url = "https://api.whatsapp.com/send?phone=6281317183658&text=halo%20admin%0Asaya%20*"+nama+"*%0Aemail%20saya%20*"+email+"*%0A%0A*"+pesan+"*";
  window.open(url,"_blank");
  }
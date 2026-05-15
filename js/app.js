const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {

  navbar.classList.toggle("active");
  overlay.classList.toggle("active");

});



overlay.addEventListener("click", () => {

  navbar.classList.remove("active");
  overlay.classList.remove("active");

});


const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navbar.classList.remove("active");
    overlay.classList.remove("active");

  });

});

const modal = document.getElementById("animeModal");
const closeModal = document.getElementById("closeModal");

const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalStudio = document.getElementById("modalStudio");
const modalGenre = document.getElementById("modalGenre");
const modalLink = document.getElementById("modalLink");

// example data (you can expand later)
const animeData = {
  "Attack On Titan": {
    img: "images/AOT.jpg",
    desc: "Humanity fights Titans behind massive walls in a dark world full of secrets.",
    studio: "MAPPA / Wit Studio",
    genre: "Action, Drama",
    link: "https://www.crunchyroll.com/attack-on-titan"
  },
  "Jujutsu Kaisen": {
    img: "images/JJK.png",
    desc: "A boy joins sorcerers fighting cursed spirits.",
    studio: "MAPPA",
    genre: "Action, Supernatural",
    link: "https://www.crunchyroll.com/jujutsu-kaisen"
  }
};

// click card
document.querySelectorAll(".anime-card").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3").innerText;

    const data = animeData[title];
    if (!data) return;

    modalImg.src = data.img;
    modalTitle.textContent = title;
    modalDesc.textContent = data.desc;
    modalStudio.textContent = data.studio;
    modalGenre.textContent = data.genre;
    modalLink.href = data.link;

    modal.classList.add("active");
  });
});

// close modal
closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

// click outside modal closes it
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
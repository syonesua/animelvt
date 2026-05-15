console.log("card clicked");
const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

  navbar.classList.toggle("active");

});

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navbar.classList.remove("active");

  });

});

document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.getElementById("menu-btn");
  const navbar = document.getElementById("navbar");
  const overlay = document.getElementById("overlay");

  const modal = document.getElementById("animeModal");
  const closeModal = document.getElementById("closeModal");

  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalStudio = document.getElementById("modalStudio");
  const modalGenre = document.getElementById("modalGenre");
  const modalLink = document.getElementById("modalLink");

const animeData = {
  "Re:Zero - Starting Life in Another World": {
    img: "images/Re Zero.jpg",
    desc: "A boy suddenly gains the ability to return from death, reliving events repeatedly to save those he cares about.",
    studio: "White Fox",
    genre: "Fantasy, Psychological, Drama",
    link: "https://www.crunchyroll.com/rezero-starting-life-in-another-world"
  },

  "Wistoria: Wand and Sword": {
    img: "images/Wistoria.jpg",
    desc: "A boy without magic enters a magic academy and fights using pure sword skill in a magical world.",
    studio: "Actas / Bandai Namco Pictures",
    genre: "Fantasy, Action",
    link: "https://www.crunchyroll.com/"
  },

  "The Angel Next Door Spoils Me Rotten": {
    img: "images/TANDSMR.jpg",
    desc: "A quiet romance between two neighbors slowly turns into a warm and sweet relationship.",
    studio: "Project No.9",
    genre: "Romance, Slice of Life",
    link: "https://www.crunchyroll.com/"
  },

  "Dr. Stone": {
    img: "images/Dr. Stone.jpg",
    desc: "After humanity turns to stone, a genius boy rebuilds civilization using science.",
    studio: "TMS Entertainment",
    genre: "Adventure, Sci-Fi",
    link: "https://www.crunchyroll.com/dr-stone"
  },

  "Jujutsu Kaisen": {
    img: "images/JJK.png",
    desc: "A boy joins a secret organization to fight cursed spirits using powerful sorcery.",
    studio: "MAPPA",
    genre: "Action, Supernatural",
    link: "https://www.crunchyroll.com/jujutsu-kaisen"
  },

  "I Want to End This Love Game": {
    img: "images/IWTETLG.jpeg",
    desc: "A romantic battle of confession games between two stubborn students who refuse to admit their feelings.",
    studio: "Felix Film",
    genre: "Romance, Comedy",
    link: "https://www.crunchyroll.com/series/GT00371779/i-want-to-end-this-love-game"
  },

  "Chainsaw Man": {
    img: "images/CSM.jpg",
    desc: "A boy merges with a chainsaw devil and joins a secret organization hunting demons.",
    studio: "MAPPA",
    genre: "Action, Horror",
    link: "https://www.crunchyroll.com/chainsaw-man"
  },

  "Frieren: Beyond Journey's End": {
    img: "images/Frieren.jpg",
    desc: "An elf mage reflects on life and mortality after her hero party defeats the Demon King.",
    studio: "Madhouse",
    genre: "Fantasy, Drama",
    link: "https://www.crunchyroll.com/frieren-beyond-journeys-end"
  },

  "Attack On Titan": {
    img: "images/AOT.jpg",
    desc: "Humanity fights giant Titans behind massive walls while uncovering dark truths about their world.",
    studio: "Wit Studio / MAPPA",
    genre: "Action, Dark Fantasy",
    link: "https://www.crunchyroll.com/attack-on-titan"
  },

  "Classroom of the Elite": {
    img: "images/COTE.jpg",
    desc: "A genius student hides his abilities while surviving a brutal school ranking system.",
    studio: "Lerche",
    genre: "Psychological, Drama",
    link: "https://www.crunchyroll.com/"
  },

  "Demon Slayer": {
    img: "images/DS.jpg",
    desc: "A boy becomes a demon slayer to save his sister and defeat powerful demons.",
    studio: "Ufotable",
    genre: "Action, Supernatural",
    link: "https://www.crunchyroll.com/demon-slayer"
  }
};

  document.querySelectorAll(".anime-card").forEach(card => {
    card.addEventListener("click", () => {

      const title = card.querySelector("h3").innerText.trim();
      const data = animeData[title];

      console.log("card clicked:", title);

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

  closeModal?.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal?.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

});
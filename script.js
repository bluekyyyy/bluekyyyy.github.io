
const content = document.getElementById("content");

const pages = {
  about: `
    <div class="about-section">
      <img src="assets/pfpp.jpeg" alt="Arjun Balasubramanian" class="profile-img" />
      <div class="about-text">
        <h2>About Me</h2>
        <p>
          I'm Arjun Balasubramanian, a cybersecurity student passionate about ethical hacking, penetration testing, and digital forensics.
          I thrive on learning new attack vectors and securing systems in creative and effective ways.
        </p>
        <a href="assets/resume.pdf" download class="download-btn">Download CV</a>
        <div class="social-buttons">
          <a href="https://www.instagram.com/arjuuuun___/" target="_blank" class="social-btn">
            <img src="assets/insta.jpg" alt="Instagram" /> Instagram
          </a>
          <a href="https://www.linkedin.com/in/arjun-balasubramanian" target="_blank" class="social-btn">
            <img src="assets/in.jpg" alt="LinkedIn" /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  `,

  certifications: `
    <div class="cert-container">
      <div class="cert-header">
        <h2>1. Google Cybersecurity Certification</h2>
        <a href="assets/cert1.pdf" download class="cert-download-btn">Download Certificate PDF</a>
      </div>
      <img src="assets/certification1.png" class="cert-img-small" alt="Google Certification" />
    </div>
  `,

  projects: `
    <h2>Projects</h2>
  `,

  experience: `
    <h2>Experience</h2>
    <ul></ul>
  `,

  achievements: `
    <h2>Achievements</h2>
    <div class="achievements-container">
      <div class="achievement-block">
        <p><strong>1. Wrapped up HackOps CTF with a 2nd place finish 🥈
Thanks to IEI_Studentchapter for putting it together as part of the TechIgnite Sparkle Conclave—had a great time working through the challenges.
Props to my teammate Nithila RajeshKumar for teaming up and making it a solid run!</strong><br>IEI_Studentchapter - TechIgnite Sparkle Conclave</p>
        <div class="carousel">
          <div class="carousel-container">
            <img id="carousel-img-1" src="assets/1742489684432.jpg" class="carousel-image" />
          </div>
          <div class="carousel-buttons">
            <button onclick="prevImage(1)">⬅️</button>
            <button onclick="nextImage(1)">➡️</button>
          </div>
        </div>
      </div>
      <div class="achievement-block">
        <p><strong>2. COSMOS - National Space Day Event CTF Winners
My teammates!
Elavarasan Thandapani Aswath A V Gunjan Soni</strong><br></p>
        <div class="carousel">
          <div class="carousel-container">
            <img id="carousel-img-2" src="assets/1724677430011.jpg" class="carousel-image" />
          </div>
          <div class="carousel-buttons">
            <button onclick="prevImage(2)">⬅️</button>
            <button onclick="nextImage(2)">➡️</button>
          </div>
        </div>
      </div>
    </div>
  `,

  contact: `
  <section>
    <h1>Contact</h1>
    <div class="card">
      <p>You can reach me at: <strong>barjun1326@gmail.com</strong></p>
<a href="https://www.instagram.com/arjuuuun___/" target="_blank" class="social-btnn">
            <img src="assets/insta.jpg" alt="Instagram" /> Instagram</a>

          <a href="https://www.linkedin.com/in/arjun-balasubramanian" target="_blank" class="social-btnn">
            <img src="assets/in.jpg" alt="LinkedIn" /> LinkedIn
          </a>
    </div>
  </section>
`
};

function navigate(page) {
  content.classList.remove("show");
  setTimeout(() => {
    content.innerHTML = pages[page];
    content.classList.add("show");
    if (page === "achievements") setupCarousel();
    if (page === "contact") setupContactForm();
    checkForThankYou(); // Show popup if redirected after form
  }, 300);
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

// --- Carousel Logic ---
let carousels = {
  1: {
    current: 0,
    images: [
      "assets/1742489684432.jpg",
      "assets/1742489684454.jpg",
      "assets/1742489701860.jpg"
    ]
  },
  2: {
    current: 0,
    images: [
      "assets/1724677430011.jpg",
      "assets/1724677430427.jpg"
    ]
  }
};

function setupCarousel() {
  for (let id in carousels) {
    const img = document.getElementById(`carousel-img-${id}`);
    if (img) img.src = carousels[id].images[carousels[id].current];
  }
}

function prevImage(id) {
  carousels[id].current = (carousels[id].current - 1 + carousels[id].images.length) % carousels[id].images.length;
  document.getElementById(`carousel-img-${id}`).src = carousels[id].images[carousels[id].current];
}

function nextImage(id) {
  carousels[id].current = (carousels[id].current + 1) % carousels[id].images.length;
  document.getElementById(`carousel-img-${id}`).src = carousels[id].images[carousels[id].current];
}

// --- Contact Form Logic ---
function setupContactForm() {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function () {
    // No preventDefault — let FormSubmit handle it normally
  });
}

function showPopup() {
  const popup = document.getElementById("thank-you-popup");
  if (popup) popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("thank-you-popup").style.display = "none";
}

// --- Show thank-you popup after redirect ---
function checkForThankYou() {
  if (window.location.hash === "#thankyou") {
    showPopup();
    // Optional: Clear the hash to avoid popup on reload
    history.replaceState("", document.title, window.location.pathname + window.location.search);
  }
}

// --- Default Load ---
navigate("about");


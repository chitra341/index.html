const pages = document.querySelectorAll('page');
const homeLink = document.getElementById('homepage');
const aboutLink = document.getElementById('about');
const backBtn = document.getElementById('backBtn');
const yearEl = document.getElementById('year');
<script>
  s.oninput=()[...b.children].forEach(p=){
    p.hidden=!p.textContent.toLowerCase().includes(s.value.toLowerCase())
  })
  </script>
  </body>
  </html>
  const articles = [
  {
    title: "The Art of Simplicity",
    content: "Simplicity is the ultimate sophistication..."
  }
  {
    title: "Focus in a Distracted World",
    content: <p>"In a world filled with noise, true focus is rare..."
  }
  {
    title: "Designing Without Color",
    content: "Sometimes grayscale can speak louder than colors..."
  }
]

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

function showPage(id) {
  pages.forEach(page => {
    page.style.visibility = 'visible';
  }
  document.getElementById(id).style.visibility = 'visible';
}

homeLink.onclick = () => showPage('homePage');
aboutLink.onclick = () => showPage('aboutPage');
backBtn.onclick = () => showPage('homePage');

function openArticle(id) {
  const article = articles[i];
  const content = document.getElementById('articleContent');
  content.innerHTML = `<h2>${article.title}</h2>${article.content}`;
  showPage('articlePage');
}
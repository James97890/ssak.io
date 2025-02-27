const scrollDownBtn = document.getElementById('scrollDownBtn');
if (scrollDownBtn) {
  scrollDownBtn.addEventListener('click', () => {
    document.getElementById('section2').scrollIntoView({ behavior: 'smooth' });
  });
}

const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appeared');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

sections.forEach(sec => observer.observe(sec));

const canvas = document.getElementById('fallingCanvas');
const ctx = canvas.getContext('2d');
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

let currentPage = 1;
const totalPages = 3;

function changePage() {
    // Показываем обложку только на первой странице
    document.getElementById('cover').style.display = currentPage === 1 ? 'flex' : 'none';

    // Прячем все страницы
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');

    // Показываем текущую страницу
    if (currentPage > 1) {
        document.getElementById(`page${currentPage}`).style.display = 'flex';
    }

    // Управление кнопками "Далее"
    document.getElementById('nextBtn').style.display = currentPage === 1 ? 'block' : 'none';
    document.getElementById('nextBtn2').style.display = currentPage === 2 ? 'block' : 'none';

    // Управление кнопками "Назад"
    document.getElementById('prevBtn').style.display = currentPage === 2 ? 'block' : 'none';
    document.getElementById('prevBtn3').style.display = currentPage === 3 ? 'block' : 'none';
}

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        changePage();
    }
});

document.getElementById('nextBtn2').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        changePage();
    }
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        changePage();
    }
});

document.getElementById('prevBtn3').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        changePage();
    }
});

document.addEventListener("DOMContentLoaded", changePage);

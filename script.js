
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){ target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add('show'); }
  });
});
document.querySelectorAll('.hidden').forEach(el => observer.observe(el));
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

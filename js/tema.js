// Troca de tema
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
  if (html.getAttribute('data-theme') === 'dark') {
    html.setAttribute('data-theme', 'light');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    document.documentElement.style.setProperty('--primary', 'var(--primary-light)');
    document.documentElement.style.setProperty('--secondary', 'var(--secondary-light)');
    document.documentElement.style.setProperty('--accent', 'var(--accent-light)');
    document.documentElement.style.setProperty('--text', 'var(--text-light)');
    document.documentElement.style.setProperty('--bg', 'var(--bg-light)');
    document.documentElement.style.setProperty('--card', 'var(--card-light)');
    document.documentElement.style.setProperty('--border', 'var(--border-light)');
    document.documentElement.style.setProperty('--card2', 'var(--card2-light)');
  } else {
    html.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    document.documentElement.style.setProperty('--primary', 'var(--primary-dark)');
    document.documentElement.style.setProperty('--secondary', 'var(--secondary-dark)');
    document.documentElement.style.setProperty('--accent', 'var(--accent-dark)');
    document.documentElement.style.setProperty('--text', 'var(--text-dark)');
    document.documentElement.style.setProperty('--bg', 'var(--bg-dark)');
    document.documentElement.style.setProperty('--card', 'var(--card-dark)');
    document.documentElement.style.setProperty('--border', 'var(--border-dark)');
    document.documentElement.style.setProperty('--card2', 'var(--card2-dark)');
  }
});


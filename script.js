const themeToggle = document.getElementById('themeToggle');
const rootElement = document.documentElement;

themeToggle.addEventListener('click', () => {
  const currentTheme = rootElement.getAttribute('data-theme');
  const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
  rootElement.setAttribute('data-theme', nextTheme);
  themeToggle.textContent = nextTheme === 'light' ? 'Dark Mode' : 'Light Mode';
});
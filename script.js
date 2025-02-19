let count = 0;
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const themeToggle = document.getElementById('theme-toggle');

// Counter functionality
incrementButton.addEventListener('click', () => {
  count++;
  counterElement.textContent = count;
});

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '🌙' : '☀️';
});
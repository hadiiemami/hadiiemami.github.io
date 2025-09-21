// Helpers
const $ = (sel, el=document) => el.querySelector(sel);

// Year
$('#year').textContent = new Date().getFullYear();

// Mobile nav
const navToggle = $('.nav-toggle');
const navMenu = $('#nav-menu');
if (navToggle && navMenu){
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Theme toggle (auto-persist)
const themeBtn = $('.theme-toggle');
const root = document.documentElement;
const THEME_KEY = 'pref-theme';

function setTheme(mode){
  if (mode === 'light'){
    root.style.setProperty('--bg', '#f6f7fb');
    root.style.setProperty('--bg-elev', '#ffffff');
    root.style.setProperty('--text', '#0c1116');
    root.style.setProperty('--muted', '#5b6673');
    root.style.setProperty('--outline', '#e7eaf0');
    document.body.dataset.theme = 'light';
  } else {
    root.style.setProperty('--bg', '#0b0d10');
    root.style.setProperty('--bg-elev', '#12161b');
    root.style.setProperty('--text', '#e6e9ef');
    root.style.setProperty('--muted', '#9aa3af');
    root.style.setProperty('--outline', '#222a33');
    document.body.dataset.theme = 'dark';
  }
  localStorage.setItem(THEME_KEY, mode);
}

const saved = localStorage.getItem(THEME_KEY);
if (saved){
  setTheme(saved);
} else {
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  setTheme(prefersLight ? 'light' : 'dark');
}

if (themeBtn){
  themeBtn.addEventListener('click', () => {
    const next = (document.body.dataset.theme === 'dark') ? 'light' : 'dark';
    setTheme(next);
  });
}

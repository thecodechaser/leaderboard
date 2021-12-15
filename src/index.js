import './style.css';

const refreshBtn = document.querySelector('.refresh-btn');

refreshBtn.addEventListener('click', () => {
window.location.reload();
});
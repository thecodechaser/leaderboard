import './style.css';
import { renderData } from './utils/get';

const refreshBtn = document.querySelector('.refresh-btn');

refreshBtn.addEventListener('click', () => {
window.location.reload();
});

renderData();
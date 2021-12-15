import './style.css';
import renderData from './utils/get.js';
import recieveData from './utils/post.js';

const refreshBtn = document.querySelector('.refresh-btn');

refreshBtn.addEventListener('click', () => {
  window.location.reload();
});

renderData();
recieveData();
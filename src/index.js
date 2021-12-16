import './style.css';
import renderData from './utils/get.js';
import recieveData from './utils/post.js';

const refreshBtn = document.querySelector('.refresh-btn');

refreshBtn.addEventListener('click', () => {
  const ul = document.querySelector('.score-list');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  const msg = document.querySelector('.msg');
  msg.innerHTML = '';
  renderData();
});

renderData();
recieveData();

async function getData() {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/rO378WlzTyLm1i3wuLMC/scores/');
  const json = await response.json();
  return json;
}

export default () => {
  const ul = document.querySelector('.score-list');
  getData().then((json) => {
    const array = json.result;
    for (let i = 0; i < array.length; i += 1) {
      ul.innerHTML += `<li class="score">${array[i].user} ${array[i].score}</li>`;
    }
  });
}

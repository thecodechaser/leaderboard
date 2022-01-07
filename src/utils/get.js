async function getData() {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ui5Q7sDbaqvLeD6YcxeL/scores/');
  const json = await response.json();
  return json;
}

export default () => {
  const ul = document.querySelector('.score-list');
  getData().then((json) => {
    const array = json.result;
    array.sort((score1, score2) => score2.score - score1.score);
    for (let i = 0; i < array.length; i += 1) {
      ul.innerHTML += `<li class="score">${array[i].user} ${array[i].score}</li>`;
    }
  });
};

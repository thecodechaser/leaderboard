async function postData(user, score) {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/rO378WlzTyLm1i3wuLMC/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const json = await response.json();
  return json;
}

export default () => {
  const msg = document.querySelector('.msg');
  const form = document.querySelector('.add-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = form.elements[0].value;
    const score = form.elements[1].value;
    postData(user, score).then((json) => {
      msg.innerHTML = json.result;
    });
  });
}

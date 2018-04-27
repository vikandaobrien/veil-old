const games = document.querySelector('#games');

axios.get('http://localhost:3000/games')
  .then(response => {
    const games = response.data.data
    games.forEach(game => {
      if (games.indexOf(game) % 2 === 0) {
        gameLeft(game);
      } else {
        gameRight(game);
      }
    })
  });

function gameLeft (game) {
  const section = document.createElement('section');
  addClassesToElement(section, 'hero', 'is-medium', 'is-dark', 'game', 'game-left', 'pointer');
  section.style.background = `linear-gradient(to right, rgba(0,0,0, .9), rgba(0,0,0, .2)), url(${game.image}) center/cover`;
  section.addEventListener('click', event => {
    goToGame(game);
  });

    const overlay = document.createElement('div');
    addClassesToElement(overlay, 'game-bg');

    const body = document.createElement('div');
    addClassesToElement(body, 'hero-body');

      const container = document.createElement('div');
      addClassesToElement(container, 'container');

        const title = document.createElement('h1');
        addClassesToElement(title, 'title', 'is-2');
        title.innerHTML = game.name;
        container.appendChild(title);

      body.appendChild(container);

    section.appendChild(overlay);
    section.appendChild(body);

  games.appendChild(section);
}

function gameRight (game) {
  const section = document.createElement('section');
  addClassesToElement(section, 'hero', 'is-medium', 'is-dark', 'game', 'game-right', 'pointer');
  section.style.background = `linear-gradient(to left, rgba(0,0,0, .9), rgba(0,0,0, .2)), url(${game.image}) center/cover`;
  section.addEventListener('click', event => {
    goToGame(game);
  });

    const overlay = document.createElement('div');
    addClassesToElement(overlay, 'game-bg');

    const body = document.createElement('div');
    addClassesToElement(body, 'hero-body');

      const container = document.createElement('div');
      addClassesToElement(container, 'container');

        const title = document.createElement('h1');
        addClassesToElement(title, 'title', 'is-2');
        title.innerHTML = game.name;
        container.appendChild(title);

      body.appendChild(container);

    section.appendChild(overlay);
    section.appendChild(body);

  games.appendChild(section);
}

function goToGame (game) {
  window.location = `/game.html?id=${game.id}`;
}

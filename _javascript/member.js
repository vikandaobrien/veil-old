const userId = getQueryVariable('id');
const memberInfo = document.querySelector('#member-info');
const memberGames = document.querySelector('#member-games');

axios.get(`http://localhost:3000/users/${userId}`)
  .then(response => {
    const user = response.data.data;
    document.title = `Veil | ${user.fname} ${user.lname}`;
    renderMemberInfo(user);

    const games = user.games;
    games.forEach(game => {
      renderMemberGame(game);
    })
  });

function renderMemberInfo (user) {
  const divImg = document.createElement('div');
  addClassesToElement(divImg, 'avatar', 'column', 'is-4', 'has-text-centered');

    const img = document.createElement('img');
    img.src = user.image;
    divImg.appendChild(img);

  memberInfo.appendChild(divImg);

  const divInfo = document.createElement('div');
  addClassesToElement(divInfo, 'column', 'is-8');

    const h1 = document.createElement('h1');
    addClassesToElement(h1, 'title', 'has-text-centered');
    h1.innerHTML = `${user.fname} ${user.lname}`;
    divInfo.appendChild(h1);

    const details = document.createElement('div');
    addClassesToElement(details, 'info', 'has-text-centered');

      const role = document.createElement('a');
      role.innerHTML = `<a><span class="fa-icon"><i class="fas fa-star"></i></span> ${user.role}</a>`;
      details.appendChild(role);

      const birthday = document.createElement('a');
      birthday.innerHTML = `<a><span class="fa-icon"><i class="fas fa-birthday-cake"></i></span> ${user.birthday.slice(0,10)}</a>`;
      details.appendChild(birthday);

      const location = document.createElement('a');
      location.innerHTML = `<a><span class="fa-icon"><i class="fas fa-map-marker-alt"></i></span> ${user.location}</a>`;
      details.appendChild(location);

      const timezone = document.createElement('a');
      timezone.innerHTML = `<a><span class="fa-icon"><i class="fas fa-clock"></i></span> ${user.timezone}</a>`;
      details.appendChild(timezone);

    divInfo.appendChild(details);

    const p = document.createElement('p');
    addClassesToElement(p, 'has-text-justified');
    p.innerHTML = user.info;
    divInfo.appendChild(p);

  memberInfo.appendChild(divInfo);
}

function renderMemberGame (game) {
  const container = document.createElement('div');
  addClassesToElement(container, 'column', 'is-4');

    const card = document.createElement('div');
    addClassesToElement(card, 'card');

      const cardImg = document.createElement('div');
      addClassesToElement(cardImg, 'card-image', 'game-card', 'pointer');

        const figure = document.createElement('figure');
        addClassesToElement(figure, 'image', 'is-2by1');

          const img = document.createElement('img');
          img.src = game.image;
          figure.appendChild(img);

        cardImg.appendChild(figure);

        const overlay = document.createElement('div');
        addClassesToElement(overlay, 'game-overlay');

          const hover = document.createElement('div');
          addClassesToElement(hover, 'game-hover');
          overlay.appendChild(hover);

        cardImg.appendChild(overlay);

        const h1 = document.createElement('h1');
        addClassesToElement(h1, 'title');
        h1.innerHTML = game.name;
        cardImg.appendChild(h1);

      card.appendChild(cardImg);

      const cardContent = document.createElement('div');
      addClassesToElement(cardContent, 'card-content');

        const characters = document.createElement('div');
        addClassesToElement(characters, 'members');

          const gameChars = game.characters;
          gameChars.forEach(gameChar => {
            const character = document.createElement('div');
            addClassesToElement(character, 'member', 'pointer');
            character.addEventListener('click', event => {
              goToCharacter(gameChar);
            })

              const charImg = document.createElement('img');
              charImg.src = character.image;
              character.appendChild(charImg);

            characters.appendChild(character);
          });

        cardContent.appendChild(characters);

      card.appendChild(cardContent);

    container.appendChild(card);

  memberGames.appendChild(container);
}

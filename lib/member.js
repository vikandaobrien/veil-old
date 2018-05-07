const html = document.querySelector('html');
const userId = getQueryVariable('id');
const memberInfo = document.querySelector('#member-info');
const memberGames = document.querySelector('#member-games');
const modal = document.querySelector('#character-info');
const closeModalButton = document.querySelector('#close-modal');

axios.get(`http://localhost:3000/users/${userId}`).then(response => {
  const user = response.data.data;
  document.title = `Veil | ${user.fname} ${user.lname}`;
  renderMemberInfo(user);

  const games = user.games;
  if (games.length !== 0) {
    games.forEach(game => {
      renderMemberGame(game);
    });
  } else {
    const h1 = document.createElement('h1');
    addClassesToElement(h1, 'title', 'add-padding');
    h1.innerHTML = `${user.fname} has not added any games.`;
    memberGames.appendChild(h1);
  }
});

function renderMemberInfo(user) {
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
  birthday.innerHTML = `<a><span class="fa-icon"><i class="fas fa-birthday-cake"></i></span> ${user.birthday.slice(0, 10)}</a>`;
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

function renderMemberGame(game) {
  const container = document.createElement('div');
  addClassesToElement(container, 'column', 'is-4');

  const card = document.createElement('div');
  addClassesToElement(card, 'card');

  const cardImg = document.createElement('div');
  addClassesToElement(cardImg, 'card-image', 'game-card', 'pointer');
  cardImg.addEventListener('click', event => {
    goToGame(game);
  });

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

  const gameChars = game.characters;

  if (gameChars.length !== 0) {
    const cardContent = document.createElement('div');
    addClassesToElement(cardContent, 'card-content');

    const characters = document.createElement('div');
    addClassesToElement(characters, 'members');

    gameChars.forEach(gameChar => {
      const character = document.createElement('div');
      addClassesToElement(character, 'member', 'pointer');
      character.addEventListener('click', event => {
        renderCharacterModal(gameChar);
      });

      const charImg = document.createElement('img');
      charImg.src = gameChar.image;
      character.appendChild(charImg);

      characters.appendChild(character);
    });

    cardContent.appendChild(characters);

    card.appendChild(cardContent);
  }

  container.appendChild(card);

  memberGames.appendChild(container);
}

function renderCharacterModal(character) {
  const charImg = document.querySelector('#character-image');
  const charClass = document.querySelector('#character-class');
  const charDetails = document.querySelector('#character-details');

  empty(charImg);
  const img = document.createElement('img');
  img.src = character.image;
  charImg.appendChild(img);

  charClass.innerHTML = character.class;

  empty(charDetails);
  const charName = document.createElement('strong');
  charName.innerHTML = character.name;
  charDetails.appendChild(charName);

  const charServer = document.createElement('small');
  charServer.innerHTML = character.server;
  charDetails.appendChild(charServer);

  const br = document.createElement('br');
  charDetails.appendChild(br);

  const charDesc = document.createElement('span');
  charDesc.innerHTML = character.info;
  charDetails.appendChild(charDesc);

  addClassesToElement(modal, 'is-active');
  addClassesToElement(html, 'is-clipped');
}

closeModalButton.addEventListener('click', event => {
  closeModal();
});

function closeModal() {
  html.classList.remove('is-clipped');
  modal.className = 'modal';
}
const tagBox = document.querySelector('#tags ul');

function renderTags (tags) {

  tags.forEach((tag) => {
    const li = document.createElement('li');

      const a = document.createElement('a');
      a.addEventListener('click', event => {
        if (postsContainer) {
          filterPosts(tag);
        } else {
          window.location = '/';
        }      
      })

        const name = document.createElement('span');
        name.innerHTML = tag.name;
        a.appendChild(name);

        const number = document.createElement('span');
        addClassesToElement(number, 'tag', tagColor(tag));
        number.innerHTML = tag.posts.length;
        a.appendChild(number);

      li.appendChild(a);
    tagBox.appendChild(li);
  });
}

function tagColor (tag) {
  let bg;
  switch (tag.color) {
    case 'yellow':
      bg = 'is-warning';
      break;
    case 'blue':
      bg = 'is-info';
      break;
    case 'green':
      bg = 'is-success';
      break;
    case 'red':
      bg = 'is-danger';
      break;
    case 'cyan':
      bg = 'is-primary';
      break;
    default:
      break;
  }
  return bg;
}

axios.get('http://localhost:3000/tags')
  .then(response => {
    const tags = response.data.data;
    renderTags(tags);
  });

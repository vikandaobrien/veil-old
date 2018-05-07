const html = document.querySelector('html');
const modal = document.querySelector('#post-modal');
const postModal = document.querySelector('#post-modal .content');
const addPostButton = document.querySelector('#add-post');
const closeModalButton = document.querySelector('#close-modal');
const message = document.querySelector('#error');

// ADD A POST BUTTON (event listener)
// Only pops up if logged in. If not, error message.
addPostButton.addEventListener('click', event => {
  request('/auth/token').then(response => {
    addPostModal();
  }).catch(error => {
    message.classList.remove('is-hidden');
  });
});

// X BUTTON ON EVERY MODAL (event listener)
closeModalButton.addEventListener('click', event => {
  closeModal();
});

// ADD A POST
// Inserts modal contents into modal in DOM.
function addPostModal() {

  const columns = document.createElement('div');
  addClassesToElement(columns, 'columns');

  const leftColumn = document.createElement('div');
  addClassesToElement(leftColumn, 'column');

  const fieldTitle = document.createElement('div');
  addClassesToElement(fieldTitle, 'field');

  const labelTitle = document.createElement('label');
  addClassesToElement(labelTitle, 'label');
  labelTitle.innerHTML = 'Title';
  fieldTitle.appendChild(labelTitle);

  const controlTitle = document.createElement('div');
  addClassesToElement(controlTitle, 'control');

  const inputTitle = document.createElement('input');
  addClassesToElement(inputTitle, 'input');
  inputTitle.type = 'text';
  inputTitle.placeholder = 'Insert title here';
  controlTitle.appendChild(inputTitle);

  fieldTitle.appendChild(controlTitle);

  leftColumn.appendChild(fieldTitle);

  const fieldImage = document.createElement('div');
  addClassesToElement(fieldImage, 'field');

  const labelImage = document.createElement('label');
  addClassesToElement(labelImage, 'label');
  labelImage.innerHTML = 'Image URL';
  fieldImage.appendChild(labelImage);

  const controlImage = document.createElement('div');
  addClassesToElement(controlImage, 'control');

  const inputImage = document.createElement('input');
  addClassesToElement(inputImage, 'input');
  inputImage.type = 'text';
  inputImage.placeholder = 'http://via.placeholder.com/350x150';
  controlImage.appendChild(inputImage);

  fieldImage.appendChild(controlImage);

  leftColumn.appendChild(fieldImage);

  columns.appendChild(leftColumn);

  const rightColumn = document.createElement('div');
  addClassesToElement(rightColumn, 'column', 'is-narrow');

  const labelTag = document.createElement('label');
  addClassesToElement(labelTag, 'label');
  labelTag.innerHTML = 'Tags';
  rightColumn.appendChild(labelTag);

  const controlTag = document.createElement('div');
  addClassesToElement(controlTag, 'select', 'is-multiple');

  const selectTag = document.createElement('select');
  selectTag.multiple = true;
  selectTag.size = '3';

  // GET ALL request to grab tag names from database.
  axios.get('https://boiling-gorge-85613.herokuapp.com/tags').then(response => {
    const tags = response.data.data;
    tags.forEach(tag => {
      const option = document.createElement('option');
      option.value = tag.name;
      option.innerHTML = tag.name;
      selectTag.appendChild(option);
    });
  });

  controlTag.appendChild(selectTag);

  rightColumn.appendChild(controlTag);

  columns.appendChild(rightColumn);

  const fieldContent = document.createElement('div');
  addClassesToElement(fieldContent, 'field');

  const labelContent = document.createElement('label');
  addClassesToElement(labelContent, 'label');
  labelContent.innerHTML = 'Content';
  fieldContent.appendChild(labelContent);

  const controlContent = document.createElement('div');
  addClassesToElement(controlContent, 'control');

  const inputContent = document.createElement('textarea');
  addClassesToElement(inputContent, 'textarea');
  inputContent.type = 'text';
  inputContent.placeholder = 'Speak your thoughts';
  controlContent.appendChild(inputContent);

  fieldContent.appendChild(controlContent);

  const button = document.createElement('button');
  addClassesToElement(button, 'button', 'is-primary', 'is-fullwidth');
  button.innerHTML = 'Publish';
  button.addEventListener('click', event => {
    // GET ONE request to get user id (needed to add the post to database)
    request('/auth/token').then(function (response) {
      const user_id = response.data.id;
      const title = inputTitle.value;
      const image = inputImage.value;
      const content = inputContent.value;

      if (!title || !content) {
        p.classList.remove('is-hidden');
      } else {
        // CREATE request to add a post
        axios.post('https://boiling-gorge-85613.herokuapp.com/posts', { title, image, content, user_id }).then(response => {
          window.location = '/';
          closeModal();
        });
      }
    });
  });

  const p = document.createElement('p');
  addClassesToElement(p, 'help', 'is-danger', 'is-hidden');
  p.innerHTML = 'Please fill out the title and the content.';

  postModal.appendChild(columns);
  postModal.appendChild(fieldContent);
  postModal.appendChild(button);
  postModal.appendChild(p);

  addClassesToElement(modal, 'is-active', 'big-modal');
  addClassesToElement(html, 'is-clipped');
}

// EDIT A POST
// Inserts modal contents into modal in DOM.
function editPostModal(post) {

  const columns = document.createElement('div');
  addClassesToElement(columns, 'columns');

  const leftColumn = document.createElement('div');
  addClassesToElement(leftColumn, 'column');

  const fieldTitle = document.createElement('div');
  addClassesToElement(fieldTitle, 'field');

  const labelTitle = document.createElement('label');
  addClassesToElement(labelTitle, 'label');
  labelTitle.innerHTML = 'Title';
  fieldTitle.appendChild(labelTitle);

  const controlTitle = document.createElement('div');
  addClassesToElement(controlTitle, 'control');

  const inputTitle = document.createElement('input');
  addClassesToElement(inputTitle, 'input');
  inputTitle.type = 'text';
  inputTitle.placeholder = 'Insert title here';
  inputTitle.value = post.title;
  controlTitle.appendChild(inputTitle);

  fieldTitle.appendChild(controlTitle);

  leftColumn.appendChild(fieldTitle);

  const fieldImage = document.createElement('div');
  addClassesToElement(fieldImage, 'field');

  const labelImage = document.createElement('label');
  addClassesToElement(labelImage, 'label');
  labelImage.innerHTML = 'Image URL';
  fieldImage.appendChild(labelImage);

  const controlImage = document.createElement('div');
  addClassesToElement(controlImage, 'control');

  const inputImage = document.createElement('input');
  addClassesToElement(inputImage, 'input');
  inputImage.type = 'text';
  inputImage.placeholder = 'http://via.placeholder.com/350x150';
  inputImage.value = post.image;

  controlImage.appendChild(inputImage);

  fieldImage.appendChild(controlImage);

  leftColumn.appendChild(fieldImage);

  columns.appendChild(leftColumn);

  const rightColumn = document.createElement('div');
  addClassesToElement(rightColumn, 'column', 'is-narrow');

  const labelTag = document.createElement('label');
  addClassesToElement(labelTag, 'label');
  labelTag.innerHTML = 'Tags';
  rightColumn.appendChild(labelTag);

  const controlTag = document.createElement('div');
  addClassesToElement(controlTag, 'select', 'is-multiple');

  const selectTag = document.createElement('select');
  selectTag.multiple = true;
  selectTag.size = '3';
  // GET ALL request to grab tag names from database.
  axios.get('https://boiling-gorge-85613.herokuapp.com/tags').then(response => {
    const tags = response.data.data;
    tags.forEach(tag => {
      const option = document.createElement('option');
      option.value = tag.name;
      option.innerHTML = tag.name;
      selectTag.appendChild(option);
    });
  });
  controlTag.appendChild(selectTag);

  rightColumn.appendChild(controlTag);

  columns.appendChild(rightColumn);

  const fieldContent = document.createElement('div');
  addClassesToElement(fieldContent, 'field');

  const labelContent = document.createElement('label');
  addClassesToElement(labelContent, 'label');
  labelContent.innerHTML = 'Content';
  fieldContent.appendChild(labelContent);
  const controlContent = document.createElement('div');
  addClassesToElement(controlContent, 'control');

  const inputContent = document.createElement('textarea');
  addClassesToElement(inputContent, 'textarea');
  inputContent.type = 'text';
  inputContent.placeholder = 'Speak your thoughts';
  inputContent.value = post.content;
  controlContent.appendChild(inputContent);

  fieldContent.appendChild(controlContent);

  const button = document.createElement('button');
  addClassesToElement(button, 'button', 'is-primary', 'is-fullwidth');
  button.innerHTML = 'Save Changes';
  button.addEventListener('click', event => {
    const title = inputTitle.value;
    const image = inputImage.value;
    const content = inputContent.value;
    if (!title || !content) {
      p.classList.remove('is-hidden');
    } else {
      // UPDATE request to edit post
      axios.put(`https://boiling-gorge-85613.herokuapp.com/posts/${postId}`, { title, image, content }).then(response => {
        location.reload();
      });
    }
  });

  const p = document.createElement('p');
  addClassesToElement(p, 'help', 'is-danger', 'is-hidden');
  p.innerHTML = 'Please fill out the title and the content.';

  postModal.appendChild(columns);
  postModal.appendChild(fieldContent);
  postModal.appendChild(button);
  postModal.appendChild(p);

  addClassesToElement(modal, 'is-active', 'big-modal');
  addClassesToElement(html, 'is-clipped');
}

// DELETE A POST
// Inserts modal contents into modal in DOM.
function deletePostModal() {

  const p = document.createElement('p');
  p.innerHTML = 'Are you sure you want to delete this post?';
  postModal.appendChild(p);

  const button = document.createElement('button');
  addClassesToElement(button, 'button', 'is-primary', 'is-fullwidth');
  button.innerHTML = 'Delete';
  button.addEventListener('click', event => {
    // REMOVE request to delete post
    axios.delete(`https://boiling-gorge-85613.herokuapp.com/posts/${postId}`).then(response => {
      window.location = '/';
    });
  });
  postModal.appendChild(button);

  addClassesToElement(modal, 'is-active', 'small-modal');
  addClassesToElement(html, 'is-clipped');
}

// CLOSE MODAL
// Hides modal in DOM and empties modal contents.
function closeModal() {
  html.classList.remove('is-clipped');
  modal.className = 'modal';
  empty(postModal);
}
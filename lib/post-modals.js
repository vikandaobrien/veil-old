const html = document.querySelector('html');
const modal = document.querySelector('#post-modal');
const postModal = document.querySelector('#post-modal .content');
const addPostButton = document.querySelector('#add-post');
const closeModalButton = document.querySelector('#close-modal');

addPostButton.addEventListener('click', event => {
  addPostModal();
});

closeModalButton.addEventListener('click', event => {
  closeModal();
});

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
  axios.get('http://localhost:3000/tags').then(response => {
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
    const title = inputTitle.value;
    const image = inputImage.value;
    const content = inputContent.value;
    axios.post('http://localhost:3000/posts/', { title, image, content }).then(response => {
      console.log('I did it?');
      closeModal();
    });
  });
  postModal.appendChild(columns);
  postModal.appendChild(fieldContent);
  postModal.appendChild(button);
  addClassesToElement(modal, 'is-active', 'big-modal');
  addClassesToElement(html, 'is-clipped');
}

function editPostModal() {
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
  axios.get('http://localhost:3000/tags').then(response => {
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
  button.innerHTML = 'Save Changes';
  button.addEventListener('click', event => {
    const title = inputTitle.value;
    const image = inputImage.value;
    const content = inputContent.value;
    axios.put(`http://localhost:3000/posts/${postId}`, { title, image, content }).then(response => {
      console.log('I did it?');
      location.reload();
    });
  });
  postModal.appendChild(columns);
  postModal.appendChild(fieldContent);
  postModal.appendChild(button);
  addClassesToElement(modal, 'is-active', 'big-modal');
  addClassesToElement(html, 'is-clipped');
}

function deletePostModal() {
  const p = document.createElement('p');
  p.innerHTML = 'Are you sure you want to delete this post?';
  postModal.appendChild(p);
  const button = document.createElement('button');
  addClassesToElement(button, 'button', 'is-primary', 'is-fullwidth');
  button.innerHTML = 'Delete';
  button.addEventListener('click', event => {
    console.log(postId);
    axios.delete(`http://localhost:3000/posts/${postId}`).then(response => {
      window.location = '/';
    });
  });
  postModal.appendChild(button);
  addClassesToElement(modal, 'is-active', 'small-modal');
  addClassesToElement(html, 'is-clipped');
}

function closeModal() {
  html.classList.remove('is-clipped');
  modal.className = 'modal';
  empty(postModal);
}
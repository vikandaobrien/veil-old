const postId = getQueryVariable('id');
const postContainer = document.querySelector('#post');

axios.get(`http://localhost:3000/posts/${postId}`).then(response => {
  const post = response.data.data[0];
  document.title = `Veil | ${post.title}`;
  singlePost(post);
});

function singlePost(post) {

  if (post.image) {
    const containerImg = document.createElement('div');
    addClassesToElement(containerImg, 'card-image');

    const figure = document.createElement('figure');
    addClassesToElement(figure, 'image', 'is-2by1');

    const img = document.createElement('img');
    img.src = post.image;
    figure.appendChild(img);

    containerImg.appendChild(figure);

    postContainer.appendChild(containerImg);
  }

  const containerContent = document.createElement('div');
  addClassesToElement(containerContent, 'card-content');

  const tags = document.createElement('div');
  addClassesToElement(tags, 'tags');

  const postTags = post.tags;
  postTags.forEach(tag => {
    const tagEle = document.createElement('span');
    addClassesToElement(tagEle, 'tag', tagColor(tag));
    tagEle.innerHTML = tag.name;
    tags.appendChild(tagEle);
  });

  containerContent.appendChild(tags);

  const title = document.createElement('h1');
  addClassesToElement(title, 'title', 'is-3');
  title.innerHTML = post.title;
  containerContent.appendChild(title);

  const meta = document.createElement('div');
  addClassesToElement(meta, 'meta');

  const author = document.createElement('a');
  addClassesToElement(author, 'author');

  const authorImg = document.createElement('img');
  addClassesToElement(authorImg, 'profile');
  authorImg.src = post.author.image;
  author.appendChild(authorImg);

  const authorName = document.createElement('span');
  authorName.innerHTML = `${post.author.fname} ${post.author.lname}`;
  author.appendChild(authorName);

  meta.appendChild(author);

  const date = document.createElement('a');
  date.innerHTML = `<span class="fa-icon"><i class="far fa-calendar-alt"></i></span> ${post.created_at.slice(0, 10)}`;
  meta.appendChild(date);

  request('/auth/token').then(function (response) {
    if (response.data.id === post.author.id) {
      const editPost = document.createElement('a');
      editPost.innerHTML = '<span class="fa-icon"><i class="far fa-edit"></i></span> Edit';
      editPost.addEventListener('click', event => {
        editPostModal(post);
      });
      meta.appendChild(editPost);

      const deletePost = document.createElement('a');
      deletePost.innerHTML = '<span class="fa-icon"><i class="far fa-trash-alt"></i></span> Delete';
      deletePost.addEventListener('click', event => {
        deletePostModal();
      });
      meta.appendChild(deletePost);
    }
  });

  containerContent.appendChild(meta);

  const content = document.createElement('div');
  addClassesToElement(content, 'content');

  const p = document.createElement('p');
  p.innerHTML = post.content;
  content.appendChild(p);

  containerContent.appendChild(content);

  postContainer.appendChild(containerContent);
}
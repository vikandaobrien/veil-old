const postsContainer = document.querySelector('#posts');

// Home page only
if (postsContainer) {
  // GET ALL request to grab all posts and populate
  axios.get('https://boiling-gorge-85613.herokuapp.com/posts')
    .then(response => {
      const posts = response.data.data;
      renderPosts(posts);
    });
}

// RENDER FEATURED POST CARD
function featuredPost (post) {

  const column = document.createElement('div');
  addClassesToElement(column, 'column', 'is-12', 'pointer');
  column.addEventListener('click', event => {goToPost(post)});

    const card = document.createElement('div');
    addClassesToElement(card, 'card', 'post', 'featured-post');
    if (post.image !== '') {
      card.style.background = `linear-gradient(to right, rgba(0,0,0, .9), rgba(0,0,0, .2)), url(${post.image}) center/cover`;
    }

      const container = document.createElement('div');
      addClassesToElement(container, 'card-content');

        const tags = document.createElement('div');
        addClassesToElement(tags, 'tags');

          const postTags = post.tags;
          postTags.forEach(tag => {
            const tagEle = document.createElement('span');
            addClassesToElement(tagEle, 'tag', tagColor(tag));
            tagEle.innerHTML = tag.name;
            tags.appendChild(tagEle);
          })

        container.appendChild(tags);

        const title = document.createElement('h1');
        addClassesToElement(title, 'title', 'is-2');
        title.innerHTML = post.title;
        container.appendChild(title);

        const content = document.createElement('p');
        addClassesToElement(content, 'subtitle');
        content.innerHTML = `${post.content.slice(0,150)}...`;
        container.appendChild(content);

        const author = document.createElement('a');
        addClassesToElement(author, 'author');
        container.appendChild(author);

          const authorImg = document.createElement('img');
          addClassesToElement(authorImg, 'profile');
          authorImg.src = post.author.image;
          author.appendChild(authorImg);

          const authorName = document.createElement('span');
          authorName.innerHTML = `${post.author.fname} ${post.author.lname}`;
          author.appendChild(authorName);

      card.appendChild(container);

    column.appendChild(card);

  postsContainer.appendChild(column);

}

// RENDER HALF POST CARD (no image)
function halfPost (post) {

    const column = document.createElement('div');
    addClassesToElement(column, 'column', 'is-6', 'pointer');
    column.addEventListener('click', event => {goToPost(post)});

      const card = document.createElement('div');
      addClassesToElement(card, 'card', 'post', 'half-post');

        const container = document.createElement('div');
        addClassesToElement(container, 'card-content');

          const tags = document.createElement('div');
          addClassesToElement(tags, 'tags');

            const postTags = post.tags;
            postTags.forEach(tag => {
              const tagEle = document.createElement('span');
              addClassesToElement(tagEle, 'tag', tagColor(tag));
              tagEle.innerHTML = tag.name;
              tags.appendChild(tagEle);
            })

          container.appendChild(tags);

          const title = document.createElement('h1');
          addClassesToElement(title, 'title', 'is-4');
          title.innerHTML = post.title;
          container.appendChild(title);

          const content = document.createElement('p');
          content.innerHTML = `${post.content.slice(0,150)}...`;
          container.appendChild(content);

          const author = document.createElement('a');
          addClassesToElement(author, 'author');

            const authorImg = document.createElement('img');
            addClassesToElement(authorImg, 'profile');
            authorImg.src = post.author.image;
            author.appendChild(authorImg);

            const authorName = document.createElement('span');
            authorName.innerHTML = `${post.author.fname} ${post.author.lname}`;
            author.appendChild(authorName);

          container.appendChild(author);

      card.appendChild(container);

    column.appendChild(card);

  postsContainer.appendChild(column);

}

// RENDER HALF POST CARD (with image)

function halfPostImg (post) {

    const column = document.createElement('div');
    addClassesToElement(column, 'column', 'is-6', 'pointer');
    column.addEventListener('click', event => {goToPost(post)});

      const card = document.createElement('div');
      addClassesToElement(card, 'card', 'post', 'half-post', 'post-img');

        const containerImg = document.createElement('div');
        addClassesToElement(containerImg, 'card-image');

          const figure = document.createElement('figure');
          addClassesToElement(figure, 'image', 'is-3by1');

            const img = document.createElement('img');
            img.src = post.image;
            figure.appendChild(img);

          containerImg.appendChild(figure);

          const tags = document.createElement('div');
          addClassesToElement(tags, 'tags');

            const postTags = post.tags;
            postTags.forEach(tag => {
              const tagEle = document.createElement('span');
              addClassesToElement(tagEle, 'tag', tagColor(tag));
              tagEle.innerHTML = tag.name;
              tags.appendChild(tagEle);
            })

          containerImg.appendChild(tags);

        card.appendChild(containerImg);

        const container = document.createElement('div');
        addClassesToElement(container, 'card-content');

          const title = document.createElement('h1');
          addClassesToElement(title, 'title', 'is-4');
          title.innerHTML = post.title;
          container.appendChild(title);

          const author = document.createElement('a');
          addClassesToElement(author, 'author');

            const authorImg = document.createElement('img');
            addClassesToElement(authorImg, 'profile');
            authorImg.src = post.author.image;
            author.appendChild(authorImg);

            const authorName = document.createElement('span');
            authorName.innerHTML = `${post.author.fname} ${post.author.lname}`;
            author.appendChild(authorName);

          container.appendChild(author);

        card.appendChild(container);

    column.appendChild(card);

  postsContainer.appendChild(column);

}

// RENDER FULL POST CARD (no image)

function fullPost (post) {

  const column = document.createElement('div');
  addClassesToElement(column, 'column', 'is-12', 'pointer');
  column.addEventListener('click', event => {goToPost(post)});

    const card = document.createElement('div');
    addClassesToElement(card, 'card', 'post', 'full-post');

      const container = document.createElement('div');
      addClassesToElement(container, 'card-content');

        const tags = document.createElement('div');
        addClassesToElement(tags, 'tags');

          const postTags = post.tags;
          postTags.forEach(tag => {
            const tagEle = document.createElement('span');
            addClassesToElement(tagEle, 'tag', tagColor(tag));
            tagEle.innerHTML = tag.name;
            tags.appendChild(tagEle);
          })

        container.appendChild(tags);

        const title = document.createElement('h1');
        addClassesToElement(title, 'title', 'is-3');
        title.innerHTML = post.title;
        container.appendChild(title);

        const content = document.createElement('p');
        content.innerHTML = `${post.content.slice(0,500)}...`;
        container.appendChild(content);

        const author = document.createElement('a');
        addClassesToElement(author, 'author');

          const authorImg = document.createElement('img');
          addClassesToElement(authorImg, 'profile');
          authorImg.src = post.author.image;
          author.appendChild(authorImg);

          const authorName = document.createElement('span');
          authorName.innerHTML = `${post.author.fname} ${post.author.lname}`;
          author.appendChild(authorName);

        container.appendChild(author);

      card.appendChild(container);

    column.appendChild(card);

  postsContainer.appendChild(column);

}

// RENDER FULL POST CARD (with image)

function fullPostImg (post) {

  const column = document.createElement('div');
  addClassesToElement(column, 'column', 'is-12', 'pointer');
  column.addEventListener('click', event => {goToPost(post)});

    const card = document.createElement('div');
    addClassesToElement(card, 'card', 'post', 'full-post', 'post-img');

      const columns = document.createElement('div');
      addClassesToElement(columns, 'columns');

        const columnImg = document.createElement('div');
        addClassesToElement(columnImg, 'column', 'is-5');

          const containerImg = document.createElement('div');
          addClassesToElement(containerImg, 'card-image');

            const figure = document.createElement('figure');
            addClassesToElement(figure, 'image', 'is-3by1');

              const img = document.createElement('img');
              img.src = post.image;
              figure.appendChild(img);

            containerImg.appendChild(figure);

          columnImg.appendChild(containerImg);

        columns.appendChild(columnImg);

        const columnContent = document.createElement('div');
        addClassesToElement(columnContent, 'column', 'is-7');

          const container = document.createElement('div');
          addClassesToElement(container, 'card-content');

            const tags = document.createElement('div');
            addClassesToElement(tags, 'tags');

              const postTags = post.tags;
              postTags.forEach(tag => {
                const tagEle = document.createElement('span');
                addClassesToElement(tagEle, 'tag', tagColor(tag));
                tagEle.innerHTML = tag.name;
                tags.appendChild(tagEle);
              });

            container.appendChild(tags);

            const title = document.createElement('h1');
            addClassesToElement(title, 'title', 'is-4');
            title.innerHTML = post.title;
            container.appendChild(title);

            const content = document.createElement('p');
            content.innerHTML = `${post.content.slice(0,150)}...`;
            container.appendChild(content);

            const author = document.createElement('a');
            addClassesToElement(author, 'author');

              const authorImg = document.createElement('img');
              addClassesToElement(authorImg, 'profile');
              authorImg.src = post.author.image;
              author.appendChild(authorImg);

              const authorName = document.createElement('span');
              authorName.innerHTML = `${post.author.fname} ${post.author.lname}`;
              author.appendChild(authorName);

            container.appendChild(author);

          columnContent.appendChild(container);

        columns.appendChild(columnContent);

      card.appendChild(columns);

    column.appendChild(card);

  postsContainer.appendChild(column);

}

// RENDER THIRD POST CARD (no image)

function thirdPost (post) {

    const column = document.createElement('div');
    addClassesToElement(column, 'column', 'is-4', 'pointer');
    column.addEventListener('click', event => {goToPost(post)});

      const card = document.createElement('div');
      addClassesToElement(card, 'card', 'post', 'third-post');

        const container = document.createElement('div');
        addClassesToElement(container, 'card-content');

          const tags = document.createElement('div');
          addClassesToElement(tags, 'tags');

            const postTags = post.tags;
            postTags.forEach(tag => {
              const tagEle = document.createElement('span');
              addClassesToElement(tagEle, 'tag', tagColor(tag));
              tagEle.innerHTML = tag.name;
              tags.appendChild(tagEle);
            })

          const title = document.createElement('h1');
          addClassesToElement(title, 'title', 'is-4');
          title.innerHTML = post.title;

          const author = document.createElement('a');
          addClassesToElement(author, 'author');

            const authorImg = document.createElement('img');
            addClassesToElement(authorImg, 'profile');
            authorImg.src = post.author.image;
            author.appendChild(authorImg);

            const authorName = document.createElement('span');
            authorName.innerHTML = `${post.author.fname} ${post.author.lname}`;
            author.appendChild(authorName);

        container.appendChild(tags);
        container.appendChild(title);
        container.appendChild(author);
      card.appendChild(container);
    column.appendChild(card);
  postsContainer.appendChild(column);

}

// RENDER THIRD POST CARD (with image)

function thirdPostImg (post) {

    const column = document.createElement('div');
    addClassesToElement(column, 'column', 'is-4', 'pointer');
    column.addEventListener('click', event => {goToPost(post)});

      const card = document.createElement('div');
      addClassesToElement(card, 'card', 'post', 'third-post', 'post-img');
      card.style.background = `linear-gradient(rgba(0,0,0, .7), rgba(0,0,0, .7)), url(${post.image}) center/cover`;

        const container = document.createElement('div');
        addClassesToElement(container, 'card-content');

          const tags = document.createElement('div');
          addClassesToElement(tags, 'tags');

            const postTags = post.tags;
            postTags.forEach(tag => {
              const tagEle = document.createElement('span');
              addClassesToElement(tagEle, 'tag', tagColor(tag));
              tagEle.innerHTML = tag.name;
              tags.appendChild(tagEle);
            })

          const title = document.createElement('h1');
          addClassesToElement(title, 'title', 'is-4');
          title.innerHTML = post.title;

          const author = document.createElement('a');
          addClassesToElement(author, 'author');

            const authorImg = document.createElement('img');
            addClassesToElement(authorImg, 'profile');
            authorImg.src = post.author.image;
            author.appendChild(authorImg);

            const authorName = document.createElement('span');
            authorName.innerHTML = `${post.author.fname} ${post.author.lname}`;
            author.appendChild(authorName);

        container.appendChild(tags);
        container.appendChild(title);
        container.appendChild(author);
      card.appendChild(container);
    column.appendChild(card);
  postsContainer.appendChild(column);

}

// RENDER THIRD POST CARD (with dark bg)

function thirdPostBg (post) {

    const column = document.createElement('div');
    addClassesToElement(column, 'column', 'is-4', 'pointer');
    column.addEventListener('click', event => {goToPost(post)});

      const card = document.createElement('div');
      addClassesToElement(card, 'card', 'post', 'third-post', 'post-bg');

        const container = document.createElement('div');
        addClassesToElement(container, 'card-content');

          const tags = document.createElement('div');
          addClassesToElement(tags, 'tags');

            const postTags = post.tags;
            postTags.forEach(tag => {
              const tagEle = document.createElement('span');
              addClassesToElement(tagEle, 'tag', tagColor(tag));
              tagEle.innerHTML = tag.name;
              tags.appendChild(tagEle);
            })

          const title = document.createElement('h1');
          addClassesToElement(title, 'title', 'is-4');
          title.innerHTML = post.title;

          const author = document.createElement('a');
          addClassesToElement(author, 'author');

            const authorImg = document.createElement('img');
            addClassesToElement(authorImg, 'profile');
            authorImg.src = post.author.image;
            author.appendChild(authorImg);

            const authorName = document.createElement('span');
            authorName.innerHTML = `${post.author.fname} ${post.author.lname}`;
            author.appendChild(authorName);

        container.appendChild(tags);
        container.appendChild(title);
        container.appendChild(author);
      card.appendChild(container);
    column.appendChild(card);
  postsContainer.appendChild(column);

}

// RENDER LATEST 7 POSTS
function renderPosts (posts) {
  const post1 = posts[posts.length-1];
  const post2 = posts[posts.length-2];
  const post3 = posts[posts.length-3];
  const post4 = posts[posts.length-4];
  const post5 = posts[posts.length-5];
  const post6 = posts[posts.length-6];
  const post7 = posts[posts.length-7];

  if (posts.length >= 1) {
    featuredPost(post1);
  }

  if (posts.length >= 2) {
    if (post2.image !== '') {
      halfPostImg(post2);
    } else {
      halfPost(post2);
    }
  }

  if (posts.length >= 3) {
    if (post3.image !== '') {
      halfPostImg(post3);
    } else {
      halfPost(post3);
    }
  }

  if (posts.length >= 4) {
    if (post4.image !== '') {
      fullPostImg(post4);
    } else {
      fullPost(post4);
    }
  }

  if (posts.length >= 5) {
    if (post5.image !== '') {
      thirdPostImg(post5);
    } else {
      thirdPostBg(post5);
    }
  }

  if (posts.length >= 6) {
    if (post6.image !== '') {
      thirdPostImg(post6);
    } else {
      thirdPost(post6);
    }
  }

  if (posts.length >= 7) {
    if (post7.image !== '') {
      thirdPostImg(post7);
    } else {
      thirdPostBg(post7);
    }
  }
}

// Link each card to corresponding post
function goToPost (post) {
  window.location = `/post.html?id=${post.id}`;
}

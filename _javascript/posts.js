const posts = document.querySelector('#posts');

function featuredPost (post) {

  const column = document.createElement('div');
  addClassesToElement(column, 'column', 'is-12');

    const card = document.createElement('div');
    addClassesToElement(card, 'card', 'post', 'featured-post');
    card.style.background = `linear-gradient(to right, rgba(0,0,0, .9), rgba(0,0,0, .2)), url(${post.image}) center/cover`;

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
        addClassesToElement(title, 'title', 'is-2');
        title.innerHTML = post.title;

        const content = document.createElement('p');
        addClassesToElement(content, 'subtitle');
        content.innerHTML = `${post.content.slice(0,150)}...`;

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
      container.appendChild(content);
      container.appendChild(author);
    card.appendChild(container);
  column.appendChild(card);
posts.appendChild(column);

}

function halfPost (post) {

    const column = document.createElement('div');
    addClassesToElement(column, 'column', 'is-6');

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

          const title = document.createElement('h1');
          addClassesToElement(title, 'title', 'is-4');
          title.innerHTML = post.title;

          const content = document.createElement('p');
          content.innerHTML = `${post.content.slice(0,150)}...`;

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
        container.appendChild(content);
        container.appendChild(author);
      card.appendChild(container);
    column.appendChild(card);
  posts.appendChild(column);

}

function halfPostImg (post) {

    const column = document.createElement('div');
    addClassesToElement(column, 'column', 'is-6');

      const card = document.createElement('div');
      addClassesToElement(card, 'card', 'post', 'half-post', 'post-img');

        const containerImg = document.createElement('div');
        addClassesToElement(containerImg, 'card-image');

          const figure = document.createElement('figure');
          addClassesToElement(figure, 'image', 'is-3by1');

            const img = document.createElement('img');
            img.src = post.image;
            figure.appendChild(img);

          const tags = document.createElement('div');
          addClassesToElement(tags, 'tags');

            const postTags = post.tags;
            postTags.forEach(tag => {
              const tagEle = document.createElement('span');
              addClassesToElement(tagEle, 'tag', tagColor(tag));
              tagEle.innerHTML = tag.name;
              tags.appendChild(tagEle);
            })

        containerImg.appendChild(figure);
        containerImg.appendChild(tags);

        const container = document.createElement('div');
        addClassesToElement(container, 'card-content');

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

        container.appendChild(title);
        container.appendChild(author);
      card.appendChild(containerImg);
      card.appendChild(container);
    column.appendChild(card);
  posts.appendChild(column);

}

function fullPost (post) {

  const column = document.createElement('div');
  addClassesToElement(column, 'column', 'is-12');

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

        const title = document.createElement('h1');
        addClassesToElement(title, 'title', 'is-4');
        title.innerHTML = post.title;

        const content = document.createElement('p');
        content.innerHTML = `${post.content.slice(0,150)}...`;

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
      container.appendChild(content);
      container.appendChild(author);
    card.appendChild(container);
  column.appendChild(card);
posts.appendChild(column);

}

function fullPostImg (post) {

  const column = document.createElement('div');
  addClassesToElement(column, 'column', 'is-12');

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
            })

            const title = document.createElement('h1');
            addClassesToElement(title, 'title', 'is-4');
            title.innerHTML = post.title;

            const content = document.createElement('p');
            content.innerHTML = `${post.content.slice(0,150)}...`;

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
          container.appendChild(content);
          container.appendChild(author);
        columnContent.appendChild(container);
      columns.appendChild(columnImg);
      columns.appendChild(columnContent);
    card.appendChild(columns);
  column.appendChild(card);
posts.appendChild(column);

}

function thirdPost (post) {

    const column = document.createElement('div');
    addClassesToElement(column, 'column', 'is-4');

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
  posts.appendChild(column);

}

function thirdPostImg (post) {

    const column = document.createElement('div');
    addClassesToElement(column, 'column', 'is-4');

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
  posts.appendChild(column);

}

function thirdPostBg (post) {

    const column = document.createElement('div');
    addClassesToElement(column, 'column', 'is-4');

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
  posts.appendChild(column);

}

axios.get('http://localhost:3000/posts')
  .then(response => {
    const posts = response.data.data;
    const post1 = posts[posts.length-1];
    const post2 = posts[posts.length-2];
    const post3 = posts[posts.length-3];
    const post4 = posts[posts.length-4];
    const post5 = posts[posts.length-5];
    const post6 = posts[posts.length-6];
    const post7 = posts[posts.length-7];
    featuredPost(post1);
    halfPost(post2);
    halfPostImg(post3);
    fullPostImg(post4);
    thirdPost(post5);
    thirdPostImg(post6);
    thirdPostBg(post7);
  });

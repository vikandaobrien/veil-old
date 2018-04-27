function filterPosts (tag) {
  empty(postsContainer);
  axios.get(`http://localhost:3000/tags/${tag.id}`)
    .then(response => {
       const posts = response.data.data[0].posts;
       renderPosts(posts);
    });
}

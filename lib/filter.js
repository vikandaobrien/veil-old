function filterPosts(tag) {
  empty(postsContainer);
  axios.get(`https://boiling-gorge-85613.herokuapp.com/tags/${tag.id}`).then(response => {
    const posts = response.data.data[0].posts;
    renderPosts(posts);
  });
}
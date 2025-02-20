export default {
  routes: [
    {
      method: 'POST',
      path: '/posts/redistribute',
      handler: 'post.redistributeDates',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/posts/check',
      handler: 'post.checkAllPosts',
      config: {
        auth: false,
      },
    },
  ],
}; 
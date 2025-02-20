export default {
  routes: [
    {
      method: 'POST',
      path: '/ai-contents/generate',
      handler: 'ai-content.generate',
      config: {
        policies: [],
        auth: false
      },
    },
  ],
}; 
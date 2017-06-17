/* eslint-disable max-len */

if (process.env.BROWSER) {
  throw new Error('Do not import `config.js` from inside the client-side code.');
}

module.exports = {
  // Node.js app
  port: process.env.PORT || 3000,

  // Contentful API client
  client: {
    space: 'vk91zdrl90o8',
    accessToken: '92c21cd2c2da20b21c28c78d1bcccf3db4f5540930efbe68b5f89a5e6330a157',
  },
  // Web analytics
  analytics: {
    // https://analytics.google.com/
    googleTrackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  },
};

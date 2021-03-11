module.exports = ({ env }) => ({
    // ...
    email: {
      provider: 'sendmail',
      settings: {
        defaultFrom: 'avelasco@zurikata.com',
        defaultReplyTo: 'avelasco@zurikata.com',
      },
    },
    // ...
  });
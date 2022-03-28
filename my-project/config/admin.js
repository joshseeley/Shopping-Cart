module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a5a457a7dae9984b08c8f5bcc4db415a'),
  },
});

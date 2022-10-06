module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6cc7425a8382ca8a3dd76e90a349dc48'),
  },
});

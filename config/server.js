module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8500),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '33a97d2f5b52900c206b9355c45828cc'),
    },
  },
});

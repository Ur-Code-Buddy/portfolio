module.exports = {
  apps: [
    {
      name: "portfolio",
      script: "npm",
      args: "start",
      env: {
        PORT: 7576,
        NODE_ENV: "production",
      },
    },
  ],
};

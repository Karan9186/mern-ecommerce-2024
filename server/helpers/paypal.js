const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AZa3jzlJGiqrz_IZ5ZZ9XVQXbtIuD2gp0zGvN5VlNUnuhq_Ke98WfOz7G6phxafyJAR6KClj0bzkKV35",
  client_secret: "EPYYQRtSZmTqZ1QcByA4QyLsqcN5oJGz_IFSBinXfgRHx7Jfk0La8IZkWrCv7lqkZAN3-gIeX49l70pQ",
});

module.exports = paypal;

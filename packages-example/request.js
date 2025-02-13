const axios = require("axios");

axios
  .get("http://www.wikipedia.com")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Done");
  });

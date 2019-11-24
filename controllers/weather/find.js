const axios = require("axios");

let find = (req, res, next) => {
  const { city } = req.query;
  axios
    .get(
      `${process.env.url}/data/${process.env.version}/forecast?q=${city}&appid=${process.env.appid}`
    )
    .then(response => {
      res.json(response.data.list);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
};

exports.find = find;

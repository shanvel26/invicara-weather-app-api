const weather = require("../controllers/weather/find");

server.get("/forecast", weather.find);

require("dotenv-extended").load();

const restify = require("restify");
const corsMiddleware = require("restify-cors-middleware");

global.server = restify.createServer();

server.use(restify.plugins.queryParser());

const cors = corsMiddleware({
  // preflightMaxAge: 5, //Optional
  origins: ["*"],
  allowHeaders: ["*"],
  exposeHeaders: ["*"]
});

server.pre(cors.preflight);
server.use(cors.actual);

server.on("uncaughtException", (req, res, route, err) => {
  console.log(err);
  res.send(err);
});

server.listen(process.env.port, async () => {
  require("./routes");
});

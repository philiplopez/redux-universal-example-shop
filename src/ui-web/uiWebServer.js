import connect from "connect";
import http from "http";
import compression from "compression";
import serveStatic from "serve-static";


const SERVER_PORT = 3000;


const app = connect();

app.use(compression());
app.use("/dist/", serveStatic(process.cwd() + "/dist")); // FIXME: process.cwd()!

app.use((req, res) => {
});

app.listen(SERVER_PORT);
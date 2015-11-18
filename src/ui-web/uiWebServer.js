import connect from "connect";
import http from "http";
import compression from "compression";
import serveStatic from "serve-static";

import {createStore} from "redux";

import {renderToString} from "react-dom/server";
import h from "react-hyperscript";

import {Provider} from "react-redux";


import stateReducer from "./state/reducer.js";
import App from "./component/App.js";



const SERVER_PORT = 3000;


const app = connect();

app.use(compression());
app.use("/dist/", serveStatic(process.cwd() + "/dist")); // FIXME: process.cwd()!

app.use((req, res) => {
    const store = createStore(stateReducer);
    const provider = h(Provider, {store}, [h(App)]);
    const providerHtml = renderToString(provider);
    const initialState = store.getState();

    const html = `
        <html>
            <head>
                <title>Redux Universal Example Shop</title>
            </head>
        <body>
            <div id="app">${providerHtml}</div>
            <script>
                window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
            </script>
            <script src="/dist/clientApp.bundle.js"></script>
        </body>
        </html>
    `;
    res.setHeader("content-type","text/html");
    res.end(html);
});

app.listen(SERVER_PORT);
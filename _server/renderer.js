import React from 'react'
import { renderToString } from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import App from '../src/App';

const path = require("path");
const fs = require("fs");

export default (req, res, next) => {
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end()
    }
    const context = {}
    const markup = renderToString(
          <StaticRouter
            location={req.url}
            context={context}
          >
            <App/>
          </StaticRouter>
      )

    return res.send(
      htmlData.replace(
        '<div id="root"></div>',
        `<div id="root">${markup}</div>`
      )
    );
  });
}
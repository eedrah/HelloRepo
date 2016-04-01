import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router } from 'react-router'

const reactApp = document.createElement('div')
document.body.appendChild(reactApp)

const routes = {
  path: '/',
  getComponent: (location, cb) => {
    require.ensure([], (require) => {
      cb(null, require('./chunkIndex'))
    }, 'chunk')
  }
}

render((<Router history={browserHistory} routes={routes} />), reactApp)
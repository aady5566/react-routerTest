import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/*make them into children. Controlled by App.js*/}
      {/* add it here, as a child of `/` */}
      <IndexRoute component={Home}/>
      <Route path="/repos" component={Repos}>
        {/*add new route and nested*/}
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
),
document.getElementById('app'))

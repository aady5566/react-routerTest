import React from 'react'
import NavLink from './NavLink'
import Home from './Home'
// import {IndexLink} from 'react-router'
import { Link } from 'react-router'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          {/*path="/" is parent of everything, need to use IndexLink to set the props*/}
          {/*<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>s*/}
          {/*or using onlyActiveOnIndex prop*/}
          <li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {/*Controlled children*/}
        {this.props.children}
      </div>
    )
  }
}

export default App;

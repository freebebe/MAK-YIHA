import React from 'react'
import {Link, IndexLink} from 'react-router'
import styles from './appStyles';
import NavLink from '../NavLink';

const App = (props) => (
  <div>
    <h1>
    <ul>
      <li><IndexLink to='/' activeClassName="active">Home</IndexLink></li>
      <li><Link to="/about" activesStyle={{color: '#ff290b' }}>About</Link></li>
      <li><Link to="/repos/react-router" activeStyle={styles.active}>Repos</Link></li>
      <li><Link to="/user" activeClassName="active">User</Link></li>
      <li><NavLink to="/contacts">Contacts</NavLink></li>
    </ul>
    </h1>
  </div>
);

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;

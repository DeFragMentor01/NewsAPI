import React, { Component } from 'react';
import { Row, Column } from 'rebass';
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';
import LogOut from './LogOut';
import FavouriteArticles from './FavouriteArticles';
class Navigation extends Component {
 render() {
   return (
     <Router>
       <div>
         <Row>
           <Column>
             {this.props.authenticated ? (
               <span>
                 <NavLink to="/dashboard">Daily Sports</NavLink>
                 <Link to={"/FavouriteArticles"} onClick={() => this.forceUpdate()}>
          Saved Articles
        </Link>
                 <LogOut />
               </span>
             ) : (
               <span>
                 <NavLink to="/login">Login</NavLink>
                 <NavLink to="/register">Register</NavLink>
               </span>
             )}
           </Column>
         </Row>
<Switch>
           <Route exact path="/" component={Home} />
           <Route authenticated={this.props.authenticated} path="/login" component={Login} />
           <Route path="/register" component={Register} />
           <ProtectedRoute authenticated={this.props.authenticated} path="/dashboard" component={Dashboard} />
           <Route path="/FavouriteArticles" component={FavouriteArticles} />
         </Switch>
       </div>
     </Router>
   );
 }
}
export default Navigation;
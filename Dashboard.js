import React, { Component } from "react";
import './App.css';
import firebase from './firebase';
import Articles from './Articles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
      article: firebase.auth().currentarticle,
    };
  }
  
  getNews = async () => {
    const api =
    
"http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=02ebed00dec3467896f0c3c76227ecfe";

    await axios
      .get(api)
      .then(response => {
        this.setState({
          news: response.data.articles
        });
        
      })
      .catch(err => {
        alert(err);
      });
  };
  componentDidMount() {
  this.getNews();
  }
  render() {
    return (
      <Router>
      <Switch>
        <Route
          path="/dashboard"
          exact
          render={() => (
            <Articles news={this.state.news} />
          )}
        />
      </Switch>
    </Router>
    );
  }
}
export default Dashboard;

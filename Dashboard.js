import React, { Component } from "react";
import './App.css';
import firebase from './firebase';
import Articles from './Articles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FavouriteArticles from './FavouriteArticles';
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
      article: firebase.auth().currentarticle,
      favourites: []
    };
  }
  addFavorite = favorite => {
    const { favourites } = this.state;

    //Check the selected article with its id, to put it on favorite list
    if (!favourites.some(alreadyFavorite => alreadyFavorite.author === favorite.author)) {
      this.setState({
        favourites: [this.state.favourites, favorite]
      });
      console.log(favourites) 
      localStorage.setItem('Detail', JSON.stringify([...this.state.favourites, favorite]));
    }
  };
  getNews = async () => {
    const api =
    
"http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=02ebed00dec3467896f0c3c76227ecfe";

    await axios
      .get(api)
      .then(response => {
        console.log(response)
        this.setState({
          news: response.data.articles
        });
        
      })
      .catch(err => {
        console.log(err);
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
            <Articles news={this.state.news} addFavorite={this.addFavorite} />
          )}
        />
        <Route
          path="/FavouriteArticles"
          render={() => <FavouriteArticles favourites={this.state.favourites} />}
        />
      </Switch>
    </Router>
    );
  }
}
export default Dashboard;

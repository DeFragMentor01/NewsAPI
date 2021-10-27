import React from "react";

import NavLinks from "./Navigation.js";

export default class FavoriteArticles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showInfo: true,
    };
  }

  // deleteFavorite = (favourites) => {
  //   //localStorage.removeItem('Detail');

  //   localStorage.clear();

  //   window.location.reload();

  //   this.state.showInfo = false;
  // };

  render() {
    // let storage = JSON.parse(localStorage.getItem("Detail"));

    //console.log('Storage', storage);

    const { favourites } = this.props;

    return (
      <div>
        <NavLinks />
        <ul>
          {console.log("favourites is: ", favourites)}

        </ul>
      </div>
    );
  }
}

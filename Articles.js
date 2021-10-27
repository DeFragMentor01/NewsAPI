import React from "react";
import { Container, Flex, Box} from "rebass";


class Articles extends React.Component {
  render() {
    return (
        <Container>
        <Flex>
          <Box>
            <div className="news">
            <h1>Latest News</h1>
            <div className="container">
          {this.props.news.map(article => <div key={article.author}>
      
          <div className="article">
            <a href={article.url}><h2>{article.title} <br></br></h2></a> <br></br>
            <img className="articleImg" alt="" src={article.urlToImage} height="200px"/> <br></br>
            <button onClick={() => this.props.addFavorite(article)}>Save for Later</button>
            </div>
            </div>)}
            </div>
            </div>
          </Box>
        </Flex>
      </Container>
    )
}
}


export default Articles;
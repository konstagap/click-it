import React, { Component } from "react";
import Container from "./components/Container";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Picture from "./components/Picture";
import Footer from "./components/Footer";
import friends from "./friends.json";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    sameclick: [],
    message: "Click on picture",
   
  };
  addScore = id => {
    friends.sort( () => Math.random() - 0.5)
    if (!this.state.sameclick.includes(id)) {
      this.state.sameclick.push(id);
      let newScore = this.state.score + 1;
      if (newScore > this.state.topScore) {
        this.setState({ score: newScore, topScore: newScore, message: "!!!GET OVER HERE!!!"});
      } else {
        this.setState({ score: newScore, message: "Nice, keep clicking!"})
      }
    } else {
      this.setState({ score: 0 ,  sameclick: [] , message: "You Lost!" });
    }
  };
  render() {
    return (
      <Container>
        <Navigation message={this.state.message} topScore={this.state.topScore} score={this.state.score} />
        <Main />
        <div className="row">
          {friends.map(friend => (
            <Picture
              addScore={this.addScore}
              id={friend.id}
              name={friend.name}
              key={friend.id}
              image={friend.image}
            />
          ))}
        </div>
        <Footer />
      </Container>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import cards from './cards.json';
import Card from './components/Card';
import './App.css';

class App extends Component {
  state = {
    row: 0,
    cards
  }

  ShuffleArray = () => {
    this.setState({cards: this.state.cards.sort(() => Math.random() - 0.5)});
  }


  // dealCards = () => this.state.cards.map(n =>
  //   <Card key={cards.key} src={cards.src} alt={cards.src} />
  // )

  render() {

    return (
      <Wrapper>
        <h1>This is a page</h1>
        {console.log(cards)}
        <div className="board">
          {this.state.cards.map(n => <Card
            key={cards.key} src={cards.src} alt={cards.src} />)}
        </div>
      </Wrapper>
    );
  }
}

export default App;

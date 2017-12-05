import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import cards from './cards.json';
import Card from './components/Card';
import Board from './components/Board';
import './App.css';

class App extends Component {
  state = {
    cards
  }

  ShuffleArray = () => {
    this.setState({cards: this.state.cards.sort(() => Math.random() - 0.5)});
  }

  handleClick = event => {
    this.setState({ cards : shuffleA(this.state.cards)})
  }

  render() {

    return (
      <Wrapper>
        <h1>Welcome to a clickable board</h1>
        <Board>
          {this.state.cards.map(card => <Card
            key={card.id} src={card.src} alt={card.src} onClick={this.handleClick} />)}
        </Board>
      </Wrapper>
    );
  }
}

const shuffleA = arr => arr.sort(() => Math.random() - 0.5);

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      
      
      <header className="App-header">
        <Game />
           <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>     
      </header>      
      
    </div>
  );
}

function Square (props) {
    return (
      
      <button className="square" onClick={props.funcProps1}>
        {props.valProps1}
      </button>
    );
}

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      squares : Array(9).fill(null),
      xIsNext : true,
    };
  }

  handleClick(i) {
    console.log('handleClick : ' + i);
    const buff = this.state.squares.slice();
    console.log('buff');
    console.log(buff);
    if(buff[i]) {
      return;
    }
    buff[i] = (this.state.xIsNext ? 'X' : 'O');


    this.setState({
      squares : buff,
      xIsNext : !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return <Square valProps1={this.state.squares[i]} funcProps1={() => this.handleClick(i)}/>;
  }

  render() {

    let winner = judgeWinner(this.state.squares);
    let status;
    if(winner) {
      status = 'Winner is : ' + winner;
    } else {
      status = 'Next player: X';
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function judgeWinner(squares) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for(let i = 0; i < lines.length; i++) {
    let [a, b, c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
// ========================================


export default App;

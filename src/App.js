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

  renderSquare(i) {
    return <Square valProps1={this.props.valProps2[i]} funcProps1={() => this.props.funcProps2(i)}/>;
  }

  render() {

    return (
      <div>
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

  constructor(props) {
    super(props);
    this.state = {
      history : [{
        squares : Array(9).fill(null),
      }],
      xIsNext : true,
    };
  }
  
  handleClick(i) {
    console.log('handleClick : ' + i);

    let history = this.state.history;
    let current = history[history.length - 1];
    let buff = current.squares;
    console.log('buff');
    console.log(buff);
    if(buff[i] || judgeWinner(buff)) {
      return;
    }
    buff[i] = (this.state.xIsNext ? 'X' : 'O');


    this.setState({
      history : history.concat([{
        squares : buff
      }]),
      xIsNext : !this.state.xIsNext,
    });
  }

  render() {

    let history = this.state.history;
    let history1 = this.state.history.slice();
    console.log('Game Render');
    console.log(history);
    console.log(history1);
    let current = history[history.length - 1];

    let winner = judgeWinner(current.squares);
    let status;
    if(winner) {
      status = 'Winner is : ' + winner;
    } else {
      status = 'Next player: X';
    }
    
    return (
      <div className="game">
        <div className="game-board">
          <Board valProps2={current.squares} funcProps2={(i) => this.handleClick(i)}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
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

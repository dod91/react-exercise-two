import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    length: 0,
    word: '',
  }

  changeEventHandler(event) {
    this.setState({
      word: event.target.value,
      length: event.target.value.length,
    })
  }

  clickEventHandler(event, id) {
    const index = id[1];
    const arrNewWord = this.state.word.split('');
    arrNewWord.splice(index, 1);
    const finalNewWord = arrNewWord.join('');
    this.setState({
      word: finalNewWord,
      length: finalNewWord.length
    });
    console.log('CLICK');
  }

  render() {
    return (
      <div className="App">
        <p>
          <input type="text" onChange={this.changeEventHandler.bind(this)} />
          {this.state.length}
        </p>
        <Validation length={this.state.length} />
        {this.state.word.split('').map((char, index) => {
          return (
            <Char
              key={char + index}
              char={char}
              click={(event) => this.clickEventHandler(event, char + index)}
            />
          );
        })
        }
      </div>
    );
  }
}

export default App;

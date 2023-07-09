import React from 'react';
// import logo from './logo.svg';

interface AppProps {
  color?: string;
}

class App extends React.Component<AppProps> {
  state = {
    counter: 0,
  };

  increment = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        {this.state.counter}
      </div>
    );
  }
}
// class App extends React.Component {
//   render() {
//     <div className="App">Hello</div>;
//   }
// }

export default App;

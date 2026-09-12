import React, { Component } from 'react';
import ribbon from './ribbon';

class App extends Component<Record<string, never>> {
  constructor(props: Record<string, never>) {
    super(props)
    console.log("init ribbon")
    window.ribbon = ribbon;
  }

  render() {
    return (
      <div>
        this is index.html
      </div>
    )
  }
}

export default App;

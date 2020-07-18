import React, { Component } from "react";
import GlobalStyle from "./app.base";

export class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <div>
          <p>Hello from react!</p>
        </div>
      </>
    );
  }
}

export default App;

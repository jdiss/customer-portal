import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { CustomerList } from "@erm/containers";
import GlobalStyle, { Layout, Header, Main } from "./app.base";
import rootReducer from "./state/reducers";

const store = createStore(rootReducer);

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Layout>
          <Header></Header>
          <Main>
            <CustomerList />
          </Main>
        </Layout>
      </Provider>
    );
  }
}

export default App;

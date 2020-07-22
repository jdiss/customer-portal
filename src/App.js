import React, { Component } from "react";
import { CustomerList } from "@erm/containers";
import GlobalStyle, { Layout, Header, Main } from "./app.base";

export class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Layout>
          <Header></Header>
          <Main>
            <CustomerList />
          </Main>
          {/* <div> */}
          {/* <div> */}
          {/* <FieldInput label="First name" /> */}
          {/* <FieldInput label="First name" /> */}
          {/* </div> */}
          {/* </div> */}
        </Layout>
      </>
    );
  }
}

export default App;

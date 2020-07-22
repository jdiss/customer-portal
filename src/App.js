import React, { Component } from "react";
import GlobalStyle, {
  Layout,
  Header,
  Main,
  Filters,
  SearchField,
  Button,
} from "./app.base";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faThLarge,
  faBars,
  faSearch,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FieldInput } from "@erm/components";

export class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Layout>
          <Header></Header>
          <Main>
            <Filters>
              <FontAwesomeIcon icon={faUsers} />
              <h2>Customer List</h2>
              <FontAwesomeIcon icon={faThLarge} />
              <FontAwesomeIcon icon={faBars} />
              <SearchField>
                <FontAwesomeIcon icon={faSearch} />
                <input
                  class="searchBox"
                  type="search"
                  name="search"
                  placeholder="Search..."
                />
              </SearchField>
              <Button>
                <FontAwesomeIcon icon={faUserPlus} />{" "}
                <span>ADD NEW CUSTOMER</span>
              </Button>
            </Filters>
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

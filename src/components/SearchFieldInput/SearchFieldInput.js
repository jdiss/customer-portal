import React from "react";
import { Icon } from "@erm/components";
import { SearchField } from "./SearchFieldInput.base";
import { ICON_TYPE, ICON_SIZE, ICON_COLOR } from "@erm/utils/constant";

const SearchFieldInput = ({ label }) => {
  const [value, setValue] = React.useState("");
  return (
    <SearchField>
      <Icon
        type={ICON_TYPE.SEARCH}
        color={ICON_COLOR.SHADE}
        size={ICON_SIZE.LARGE}
      />
      <input
        class="searchBox"
        type="search"
        name="search"
        placeholder="Search..."
      />
    </SearchField>
  );
};

export default SearchFieldInput;

import React from "react";
import { Icon } from "@erm/components";
import { SearchField } from "./SearchFieldInput.base";
import { ICON_TYPE, ICON_SIZE, ICON_COLOR } from "@erm/utils/constant";

const SearchFieldInput = ({ onSearchChange }) => {
  const [value, setValue] = React.useState("");
  return (
    <SearchField>
      <Icon
        type={ICON_TYPE.SEARCH}
        color={ICON_COLOR.SHADE}
        size={ICON_SIZE.LARGE}
      />
      <input
        className="searchBox"
        type="search"
        name="search"
        value={value}
        placeholder="Search..."
        onChange={(e) => {
          setValue(e.target.value);
          onSearchChange(e.target.value);
        }}
      />
    </SearchField>
  );
};

export default SearchFieldInput;

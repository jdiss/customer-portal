import { combineReducers } from "redux";

const customers = (state = [], action) => {
  switch (action.type) {
    case "ADD_CUSTOMER":
      return [...state, action.payload];
    default:
      return state;
  }
};

const process = (state = { Add: true, edit: false, delete: false }, action) => {
  switch (action.type) {
    case "ADD":
      return {
        isAdd: true,
        isEdit: false,
        isDelete: false,
        customer: action.payload,
      };
    case "EDIT":
      return {
        isAdd: false,
        isEdit: true,
        isDelete: false,
        customer: action.payload,
      };
    case "DELETE":
      return {
        isAdd: false,
        isEdit: false,
        isDelete: true,
        customer: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  customers,
  process,
});

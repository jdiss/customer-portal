import { combineReducers } from "redux";

const customers = (state = [], action) => {
  switch (action.type) {
    case "ADD_CUSTOMER":
      return [...state, action.payload];
    default:
      return state;
  }
};

const customerProcess = (
  state = { process: { Add: true, edit: false, delete: false } },
  action
) => {
  switch (action.type) {
    case "ADD":
      return { process: { Add: true, edit: false, delete: false } };
    case "EDIT":
      return { process: { Add: false, edit: true, delete: false } };
    case "DELETE":
      return { process: { Add: false, edit: false, delete: true } };
    default:
      return state;
  }
};

export default combineReducers({
  customers,
  customerProcess,
});

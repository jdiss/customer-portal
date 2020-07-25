import { combineReducers } from "redux";
import { ACTIONS } from "@erm/utils/constant";

const customers = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD_CUSTOMER:
      return [...state, action.payload];
    case ACTIONS.UPDATE_CUSTOMER:
      return state.map((customer) => {
        if (customer.id === action.payload.id) {
          return action.payload;
        } else {
          return customer;
        }
      });
    case ACTIONS.DELETE_CUSTOMER:
      let index = state.map((x) => x.customer).indexOf(action.payload.id);
      return state.slice(0, index).concat(state.slice(index + 1));
    default:
      return state;
  }
};

const process = (state = { Add: true, edit: false, delete: false }, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return {
        isAdd: true,
        isEdit: false,
        isDelete: false,
        customer: action.payload,
      };
    case ACTIONS.EDIT:
      return {
        isAdd: false,
        isEdit: true,
        isDelete: false,
        customer: action.payload,
      };
    case ACTIONS.DELETE:
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

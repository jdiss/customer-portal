import {
  createNewCustomer,
  updateCustomer,
} from "@erm/services/customerService";
import { ACTIONS } from "@erm/utils/constant";

export const addCustomer = (customer) => ({
  type: ACTIONS.ADD_CUSTOMER,
  payload: createNewCustomer(customer),
});

export const editCustomer = (customer, form) => ({
  type: ACTIONS.UPDATE_CUSTOMER,
  payload: updateCustomer(customer, form),
});

export const startCustomerAdd = () => ({
  type: ACTIONS.ADD,
  payload: null,
});

export const startCustomerEdit = (customer) => ({
  type: ACTIONS.ADD,
  payload: customer,
});

export const startCustomerDelete = (customer) => ({
  type: ACTIONS.ADD,
  payload: customer,
});

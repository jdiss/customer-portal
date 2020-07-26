import {
  createNewCustomer,
  updateCustomer,
  deleteCustomer,
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

export const removeCustomer = (customer, form) => ({
  type: ACTIONS.DELETE_CUSTOMER,
  payload: deleteCustomer(customer, form),
});

export const startCustomerAdd = () => ({
  type: ACTIONS.ADD,
  payload: null,
});

export const startCustomerEdit = (customer) => ({
  type: ACTIONS.EDIT,
  payload: customer,
});

export const startCustomerDelete = (customer) => ({
  type: ACTIONS.DELETE,
  payload: customer,
});

export const addCustomer = ({ customer }) => ({
  type: "ADD_CUSTOMER",
  payload: customer,
});

export const doneTodo = (id) => ({
  type: "DONE_TODO",
  payload: id,
});

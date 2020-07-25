import { getCurrentDay, getRandomId } from "../utils/helpers";

export const getCustomers = (firstName, lastName) => {
  return data.map((customer) => {
    if (firstName && customer.firstName === firstName) {
      return customer;
    } else if (lastName && customer.lastName === lastName) {
      return customer;
    } else {
      return customer;
    }
  });
};

export const createNewCustomer = (form) => {
  return {
    id: getRandomId(),
    firstName: form.firstName,
    lastName: form.lastName,
    dob: `${form.day}/${form.month}/${form.year}`,
    created: getCurrentDay(),
    edited: getCurrentDay(),
  };
};

export const updateCustomers = (customer) => {
  const newData = data.map((current) => {
    if (current.id != customer.id) {
      return current;
    }
  });
  //return data[...newData];
};

export const deleteCustomers = (customer) => {
  data.splice(
    data.findIndex(data, function (item) {
      return item.id === customer.id;
    }),
    1
  );
};

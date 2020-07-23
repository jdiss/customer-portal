const data = [
  {
    id: "1235",
    firstName: "Janaka",
    lastName: "Dissanayake",
    dob: "14/07/1978",
    created: "20/02/2020",
    edited: "20/02/2020",
  },
  {
    id: "1235",
    firstName: "Janaka",
    lastName: "Dissanayake",
    dob: "14/07/1978",
    created: "20/02/2020",
    edited: "20/02/2020",
  },
  {
    id: "1235",
    firstName: "Janaka",
    lastName: "Dissanayake",
    dob: "14/07/1978",
    created: "20/02/2020",
    edited: "20/02/2020",
  },
  {
    id: "1235",
    firstName: "Janaka",
    lastName: "Dissanayake",
    dob: "14/07/1978",
    created: "20/02/2020",
    edited: "20/02/2020",
  },
];

export const getCustomers = (firstName, LastName) => {
  return data;
};

export const addCustomers = (customer) => {
  return data.push(customer);
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

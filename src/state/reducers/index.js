const initState = {
  customers: [
    {
      id: "1235",
      firstName: "Janaka",
      lastName: "Dissanayake",
      dob: "14/07/1978",
      created: "20/02/2020",
      edited: "20/02/2020",
    },
  ],
};

const customers = (state = initState, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER":
      return { customers: [...state.customers, action.payload] };
    default:
      return state;
  }
};

export default customers;

import moment from "moment";

export const getCurrentDay = () => {
  return moment(moment.now()).format("DD/MM/YYYY");
};

export const getRandomId = (range = 100) => {
  return Math.floor(Math.random() * range);
};

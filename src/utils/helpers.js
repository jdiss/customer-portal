import moment from "moment";

export const getCurrentDay = () => {
  return moment(moment.now()).format("DD/MM/YYYY");
};

export const getRandomId = (range = 100) => {
  return Math.floor(Math.random() * range);
};

export const setNameTag = (name) => {
  return name
    .split(" ")
    .map((n) => n.charAt(0))
    .slice(0, 2)
    .reduce((acc, item) => acc + item)
    .toUpperCase();
};

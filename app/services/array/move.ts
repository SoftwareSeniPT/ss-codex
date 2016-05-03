export const moveArrayItem = (array, from, to) => {
  from = parseInt(from, 10);
  to = parseInt(to, 10);
  array.splice(to, 0, array.splice(from, 1)[0]);
  return array;
};

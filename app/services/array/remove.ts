import {key} from "./key";
export const removeArrayItem = (array, id, useValue = false) => {
  if (useValue) {
    id = key(array, id);
  }
  return [
    ...array.slice(0, id),
    ...array.slice(id + 1)
  ];
};

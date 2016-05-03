export const getParent = (el, className) => {
  while (el !== null && !el.classList.contains(className)) {
    el = el.parentElement;
  }
  return el;
};

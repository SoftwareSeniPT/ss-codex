import {hasClass} from "./has-class";

export const addClass = (el, className: string) => {
  if (el.classList) {
    el.classList.add(className);
  } else if (!hasClass(el, className)) {
    el.className += " " + className;
  }
};

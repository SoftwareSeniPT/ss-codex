export const key = (arr, searchElement, fromIndex?) => {
  let k;
  const o = Object(arr);
  const len = o.length;
  if (len === 0) {
    return -1;
  }
  let n = +fromIndex || 0;
  if (Math.abs(n) === Infinity) {
    n = 0;
  }
  if (n >= len) {
    return -1;
  }
  k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
  while (k < len) {
    if (k in o && o[k] === searchElement) {
      return k;
    }
    k++;
  }
  return -1;
};

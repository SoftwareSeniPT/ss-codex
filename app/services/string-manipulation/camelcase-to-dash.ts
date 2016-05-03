export const camelcaseToDash = (string) => {
  return string.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
};

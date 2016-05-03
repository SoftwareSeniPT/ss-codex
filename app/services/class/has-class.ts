export const hasClass = (el, className: string) => {
    if (el.classList) {
        return el.classList.contains(className);
    } else {
        return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
    }
};

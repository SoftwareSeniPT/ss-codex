interface IObjectConstructor extends ObjectConstructor {
    assign(target, ...sources);
}

declare var Object: IObjectConstructor;

export const immutable = (source, target) => {
    const type: string = Object.prototype.toString.call(source);

    if (type === "[object Array]") {
      return [...source, target];
    } else if (type === "[object Object]") {
      return Object.assign({}, source, target);
    } else {
      return undefined;
    }    
};

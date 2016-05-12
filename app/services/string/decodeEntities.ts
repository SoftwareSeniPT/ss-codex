export const decodeEntities = (text = "") => {
    var entities = [
        ["amp", "&"],
        ["lt", "<"],
        ["#8211", "-"],
        ["gt", ">"]
    ];

    for (var i = 0, max = entities.length; i < max; ++i) {
      text = text.replace(new RegExp("&" + entities[i][0] + ";", "g"), entities[i][1]);
    }
    return text;
};

const toCamelCase = (style) => {
    return style.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
};

const convertStyle = (styles) => {
    return Object.keys(styles).reduce((acc, key) => {
        acc[toCamelCase(key)] = styles[key];
        return acc;
    }, {});
};

export default convertStyle;
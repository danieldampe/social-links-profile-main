const DOMHelper = {};

// Create Element
DOMHelper.createElement = (tagName, attributes, ...content) => {
    // Element
    const $element = document.createElement(tagName);
    // Attributes
    if (attributes !== undefined) {
        Object.entries(attributes).forEach(([name, value]) => {
            if (name === "class") { 
                $element.classList.add(value); 
            } else if (name === "style") {
                for (const propertyName in value) {
                    const propertyValue = value[propertyName];
                    $element.style[propertyName] = propertyValue;
                };
            } else {
                $element[name] = value;
            };
        });
    };
    // Content
    if (content !== undefined) content.forEach(elm => $element.append(typeof elm === "function" ? elm() : elm)); 
    return $element;
};

DOMHelper.generate = (iterElm, callBackFn) => {
    const $fragment = document.createDocumentFragment();
    iterElm.forEach((value, key) => $fragment.append(callBackFn(value, key)));
    return $fragment;
};

export default DOMHelper;

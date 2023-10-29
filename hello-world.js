const componentName = 'hello-world';
 
const defineSuffix = (customElementSuffix) => {
    const classes = {};
    classes[customElementSuffix] = class extends HTMLElement {
 
        constructor() {
            super();
            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(this.getTemplate());
        }      
 
        getTemplate() {
            const template = document.createElement('template');
            template.innerHTML = `<div>Hello World</div>`
            return template.content.cloneNode(true);
        }   
    };
 
    if (typeof customElementSuffix === 'undefined') {
        throw new Error(`You must define a suffix for the ${componentName}.`);
    }
    const wcName = `${componentName}-${customElementSuffix}`;
    if (customElements.get(wcName) === undefined) {
        customElements.define(wcName, classes[customElementSuffix]);
    }
 
    return classes[customElementSuffix];
};
 
export { defineSuffix };
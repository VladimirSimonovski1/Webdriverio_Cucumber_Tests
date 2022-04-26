import { PageElements } from "../elements/page.elements"

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {

    protected elements: PageElements;
    
    constructor() {
        this.elements = new PageElements();
    }

    public async open (path: string) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
}

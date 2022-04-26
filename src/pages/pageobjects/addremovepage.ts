import Page from "./page";

export class AddRemovePage extends Page {

  public async addElement() {
    await this.elements.addElement.click();
  }

  public async getNewElement() {
    await this.elements.newElement.getValue();
  }

  public async removeElement() {
    await this.elements.newElement.click();
  }

  public async isElementVisible() {
    return this.elements.newElement.isDisplayed();
  }

  public open() {
    return super.open("add_remove_elements/");
  }
}

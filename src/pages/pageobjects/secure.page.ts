import Page from "./page";

export class SecurePage extends Page {

  public async getAlertMessage(): Promise<string> {
    const alertMsg = await this.elements.flashAlert.getText();
    return alertMsg;
  }
}

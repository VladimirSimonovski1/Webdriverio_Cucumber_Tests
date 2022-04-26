import Page from "./page";

export class LoginPage extends Page {

  public async login(username: string, password: string) {
    await this.elements.inputPassword.setValue(username);
    await this.elements.inputPassword.setValue(password);
    await this.elements.btnSubmit.click();
  }

  public open() {
    return super.open("login");
  }
}

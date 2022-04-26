export class PageElements {
  public get inputUsername() {
    return $("#username");
  }

  public get inputPassword() {
    return $("#password");
  }

  public get btnSubmit() {
    return $('button[type="submit"]');
  }

  public get flashAlert() {
    return $("#flash");
  }

  public get addElement() {
    return $("[onclick='addElement()']");
  }

  public get newElement() {
    return $("[class='added-manually']");
  }
}

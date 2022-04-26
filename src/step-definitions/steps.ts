import { Given, When, Then } from "@wdio/cucumber-framework";
import { AddRemovePage } from "../pages/pageobjects/addremovepage";

import { LoginPage } from "../pages/pageobjects/login.page";
import { SecurePage } from "../pages/pageobjects/secure.page";

const pages = {
  login: new LoginPage(),
  secure: new SecurePage(),
  addRemove: new AddRemovePage(),
};

// GIVEN REGION
Given("I am on the {string} page", async (page: string) => {
  await pages[page].open();
});

// WHEN REGION
When(
  "I login with {string} and {string}",
  async (username: string, password: string) => {
    await pages.login.login(username, password);
  }
);

When("I add an element", async () => {
  await pages.addRemove.addElement();
});

When("I remove an element", async () => {
  await pages.addRemove.removeElement();
});

// THEN REGION
Then(
  "I should see a flash message saying {string}",
  async (expectedMessage: string) => {
    const actualMessage = await pages.secure.getAlertMessage();
    expect(actualMessage).toHaveText(expectedMessage);
  }
);

Then("I should see a the newly added element", async () => {
  const newElement = await pages.addRemove.getNewElement();
  expect(newElement).toBeExisting();
});

Then("I should not see any new element", async () => {
  const newElement = await pages.addRemove.isElementVisible();
  expect(newElement).toBeFalsy();
});

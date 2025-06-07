import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import * as ui from '../utils/uiActions';

export class LoginPage extends BasePage {
  username: Locator;
  password: Locator;
  loginBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.username = page.locator('#username');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('#loginBtn');
  }

  async login(user: string, pass: string) {
    await ui.fill(this.username, user);
    await ui.fill(this.password, pass);
    await ui.click(this.loginBtn);
  }
}

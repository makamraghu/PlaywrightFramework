import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { getConfig, getCredentials } from '../utils/configUtil';

test('Login Test', async ({ page }) => {
  const { baseUrl } = getConfig();
  const { username, password } = getCredentials();

  const loginPage = new LoginPage(page);
  await loginPage.navigate(baseUrl);
  await loginPage.login(username, password);

  await expect(page).toHaveURL(/dashboard/);
});

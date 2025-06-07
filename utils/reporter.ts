import { test as base, TestType, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { allure } from 'allure-playwright';

base.describe('Login Tests', () => {
  base('Valid Login Scenario', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    allure.epic('Authentication');
    allure.feature('Login');
    allure.story('Valid login with correct credentials');
    allure.severity('critical');
    allure.description('Test login functionality with valid user');

    await loginPage.goto();
    await loginPage.login('admin', 'admin123');

    await expect(page).toHaveURL(/.*dashboard/);
  });
});


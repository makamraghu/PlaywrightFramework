// utils/uiActions.ts
import { Locator } from '@playwright/test';

export const click = async (el: Locator) => el.click();
export const fill = async (el: Locator, text: string) => el.fill(text);
export const getText = async (el: Locator) => (await el.textContent()) || '';

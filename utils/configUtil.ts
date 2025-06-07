import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config();

const configPath = path.resolve(__dirname, '../config/config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

export const getConfig = () => config;
export const getCredentials = () => ({
  username: process.env.USERNAME || '',
  password: process.env.PASSWORD || ''
});


import dotenv from 'dotenv';
dotenv.config();

import { generateDownloadToken } from './src/services/token/tokenService';

console.log('✅ Loaded secret:', process.env.JWT_SECRET);

const token = generateDownloadToken(1, 1);
console.log('Your secure token:\n', token);

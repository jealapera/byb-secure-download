# BYB Secure Download API – Proof of Concept

This project demonstrates a secure PDF download endpoint for the [Before You Buy (BYB)](https://www.beforeyoubuy.com.au/) platform. It simulates allowing users to download a report **only after payment**, with proper security validation via a token-based system.

---

## 🔧 Tech Stack
- **Node.js + Express**
- **TypeScript**
- **JWT (jsonwebtoken)**
- **Jest** for unit testing

---

## 💡 Business Context

Buyers on BYB purchase property inspection reports. After payment, they are given a **secure link** to download the PDF. That link must:
- Be restricted to the correct user and purchased product
- Expire after a short time
- Prevent unauthorized access

---

## ✅ What This POC Includes

- 🔐 A single secure endpoint:

  ```
  GET /api/download?token=<secure_token>
  ```

- 🧾 A mock JWT token contains:
  - userId
  - productId

- 🔍 The endpoint:
  - Validates the token
  - Checks if the user purchased the report
  - Responds with a **mock PDF download**

- 🧪 A unit test for token generation/verification

---

## 📦 Installation

```bash
npm install
```

---

## 🔐 Environment Variables

This project uses a `.env` file to store secrets such as the JWT signing key.

1. Create a `.env` file in the root of your project:

```
JWT_SECRET=your_secure_secret
```

2. A sample `.env.example` file is provided for reference.

3. Do **not** commit your actual `.env` file.

---

## 🚀 Running the Project Locally

```bash
npm run dev
```

The server will be available at:

```
http://localhost:3000
```

---

## 🔐 How to Generate Token for Testing

Create a token to simulate a user who just completed a purchase:

1. Create a new file in the project root named `generate-token.ts`:

```ts
// generate-token.ts
import { generateDownloadToken } from './src/services/token/tokenService';

const token = generateDownloadToken(1, 1);
console.log('Your secure token:\n', token);
```

2. Run the script using:

```bash
npx ts-node generate-token.ts
```

3. Copy the token printed in your terminal.

---

## 🧪 How to Test the Download Endpoint

After generating your token, test the endpoint as follows:

### ✅ Option A: Test in the browser

Paste the token into this URL and open it in your browser:

```
http://localhost:3000/api/download?token=<your_token_here>
```

### ✅ Option B: Test in Postman

- Method: **GET**
- URL: `http://localhost:3000/api/download?token=<your_token_here>`
- Click **Send**

### 🟢 If valid, you will receive:

```
Pretend this is the content of report-101.pdf
```

### 🔴 If invalid or expired, you will receive:

```
Invalid or expired token
```

---

## 🧪 Run Unit Tests

To verify token generation and validation logic:

```bash
npm run test
```

You should see output confirming that the test passed.

---

## 📁 Project Structure

```
src/
├── index.ts                        # Server entry point
├── routes/download.ts              # Download route
├── middleware/auth.ts              # Token verification
├── services/token/                 # Token logic + unit test
│   ├── tokenService.ts
│   └── tokenService.test.ts
├── mock/mockData.ts                # Mock users/products/orders
```

---

## ✅ Assumptions / Out of Scope

- No actual database or ORM used
- No AWS S3 or real file storage used
- No authentication system (auth is simulated via token payload)
- Report download is simulated with a simple text response

---

## 🧾 Notes

This was built as a focused proof-of-concept in under 1 hour for a coding challenge. It demonstrates core security validation logic in a simple and testable way using TypeScript, Express, and JWTs.

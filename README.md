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

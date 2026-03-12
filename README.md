# 🛡️ React Smart Email Input (Anti-Fake Signups)

A lightweight, drop-in React component that stops fake users from ruining your database. 

Standard Regex (`^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`) is no longer enough. Users sign up with `temp-mail.org` or accidentally type `user@gmil.com`, resulting in lost leads, high bounce rates, and spam.

This component automatically:<br/>
✅ Checks if the domain has active MX records (Live DNS check).<br/>
✅ Blocks thousands of disposable/burner email providers.<br/>
✅ Rejects role-based generic emails (`admin@`, `info@`, `support@`) to improve lead quality.<br/>
✅ Detects fat-finger typos (e.g., `yaho.com`) and suggests fixes with a 1-click update.<br/>

## 🚀 Quick Start

**1. Get your API Key (Free)**
This component is powered by the Edge-optimized EmailGuard API. 
👉 **[Get your 100 free requests/month API Key here](https://rapidapi.com/yahyalazrek/api/emailguard-disposable-typosquatting-validator-api/)**

**2. Copy the Component**
Copy the code from `SmartEmailInput.jsx` into your project. It is styled with Tailwind CSS by default, but you can easily adapt it to standard CSS, Material UI, or Chakra UI.

**3. Paste your Key**
Replace the `RAPIDAPI_KEY` string at the top of the file with your key.

## 💡 How it works
To save your API quota, the validation triggers on `onBlur` (when the user clicks out of the input field). This ensures you only use 1 API request per user signup, keeping your costs incredibly low.

<img width="640" height="400" alt="not_active" src="https://github.com/user-attachments/assets/b2c8747b-6015-4485-877c-723fdfa27544" />
<img width="640" height="400" alt="tempo" src="https://github.com/user-attachments/assets/27fdb5ca-2cff-4f00-8938-38d97fec59d0" />
<img width="640" height="400" alt="role_based_email" src="https://github.com/user-attachments/assets/3bdc881c-b68f-4fe7-9cdb-caa86fe60890" />
<img width="640" height="400" alt="typo" src="https://github.com/user-attachments/assets/7eae0a86-7acd-4f4a-944f-4e2f6243b7e4" />
<img width="640" height="400" alt="invalid_format" src="https://github.com/user-attachments/assets/f945372f-5ddc-4b9f-92cf-169cd748814b" />
<img width="640" height="400" alt="valid" src="https://github.com/user-attachments/assets/c301ce2c-9634-4b33-9703-5635956c5407" />

---

## 🔍 Why not just use an Email Validation Regex?

Many developers rely on a standard **email validation regex** in React or Next.js to validate their forms. The problem? **Regex is no longer enough.** 

A javascript regex only checks if the string *looks* like an email (e.g., it contains an `@` symbol and a dot). It will happily accept `fakeuser@temp-mail.org` or `user@gmil.com` because syntactically, they are valid. 

This drop-in component replaces basic regex with a serverless edge API. It performs live DNS queries (checking MX Records) and uses Levenshtein distance algorithms to ensure the email is actually real, active, and typo-free before it ever hits your database. Stop relying on regex and start validating reality.

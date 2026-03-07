# 🛡️ React Smart Email Input (Anti-Fake Signups)

A lightweight, drop-in React component that stops fake users from ruining your database. 

Standard Regex (`^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`) is no longer enough. Users sign up with `temp-mail.org` or accidentally type `user@gmil.com`, resulting in lost leads, high bounce rates, and spam.

This component automatically:<br/>
✅ Checks if the domain has active MX records (Live DNS check).<br/>
✅ Blocks thousands of disposable/burner email providers.<br/>
✅ Detects fat-finger typos (e.g., `yaho.com`) and suggests fixes with a 1-click update.<br/>

## 🚀 Quick Start

**1. Get your API Key (Free)**
This component is powered by the Edge-optimized Email Validator API. 
👉 **[Get your 100 free requests/month API Key here](https://rapidapi.com/yahyalazrek/api/emailguard-disposable-typosquatting-validator-api/)**

**2. Copy the Component**
Copy the code from `SmartEmailInput.jsx` into your project. It is styled with Tailwind CSS by default, but you can easily adapt it to standard CSS, Material UI, or Chakra UI.

**3. Paste your Key**
Replace the `RAPIDAPI_KEY` string at the top of the file with your key.

## 💡 How it works
To save your API quota, the validation triggers on `onBlur` (when the user clicks out of the input field). This ensures you only use 1 API request per user signup, keeping your costs incredibly low.

<img width="500" height="220" alt="not_active" src="https://github.com/user-attachments/assets/9f6d5676-af3e-4043-ac97-8185b31d8ee5" />
<img width="500" height="220" alt="tempo" src="https://github.com/user-attachments/assets/35eea804-a04c-4c0b-a769-aadf09612856" />
<img width="500" height="220" alt="typo" src="https://github.com/user-attachments/assets/3aa5398d-be4c-46dd-b584-d3193a625e48" />
<img width="500" height="220" alt="invalid_format" src="https://github.com/user-attachments/assets/bff89321-2d71-4fdf-8345-80ea85b8e629" />
<img width="500" height="220" alt="valid" src="https://github.com/user-attachments/assets/06bd5f19-d827-43e8-85bc-4e417bd7c94a" />


# 🍪 Session Cookie Extractor & Editor (Chrome Extension)

A simple, ethical Chrome Extension to **extract, view, and edit session cookies** from the currently active website.  
Useful for developers, testers, or individuals who want to manage their session tokens across devices.

---

## 🚀 Features
- ✅ Extracts session cookies from the active tab.
- ✅ Supports detection of common session cookies (`__Secure-next-auth.session-token`, `next-auth.session-token`).
- ✅ View the session cookie in a simple popup.
- ✅ Edit and update the session cookie directly from the extension.
- ✅ Provides status messages for successful updates.

---

## 📂 Project Structure
```
cookie_extractor/
│
├── manifest.json        # Chrome extension configuration
├── popup.html           # Extension popup UI
├── popup.js             # Extension logic
└── icon.png             # (Optional) Extension icon
```

---

## 🛠️ Installation
1. Open **Google Chrome** and navigate to:
   ```
   chrome://extensions/
   ```
2. Enable **Developer Mode**.
3. Click **Load Unpacked** and select the project folder.
4. Pin the extension to your toolbar.
5. Visit any website where you are logged in.
6. Click the extension icon and use the **Extract** and **Update** buttons.

---

## ⚙️ Permissions
- `cookies` – To read and modify cookies.
- `activeTab` and `tabs` – To get the URL of the current page.
- `host_permissions: ["<all_urls>"]` – To access cookies on any domain.

---

## 🚨 Disclaimer
- This tool is intended for **personal and ethical use only.**
- Use only on accounts and sessions you own or have explicit permission to access.
- Misuse may violate terms of service or privacy laws. The developer is not responsible for any unethical or illegal use.

---

## 📄 License
This project is open-source and available under the **MIT License**.

---

## 🙌 Contributions
Feel free to fork, improve, or suggest features via pull requests!

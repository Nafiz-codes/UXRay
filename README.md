# UXRay 🔍

**AI-Powered UI/UX Repair Agent**

UXRay combines **UX (User Experience)** with **X-Ray**.

Just as an X-ray reveals hidden problems inside the body, UXRay analyzes web interfaces, detects usability and accessibility issues, and automatically repairs them using AI.

---

## 🚀 What It Does

UXRay allows users to:

1. Paste HTML into the application
2. Describe desired improvements
3. Click **Scan & Repair**
4. Receive an AI-generated improved version
5. Compare the original and repaired UI side-by-side

The goal is to help developers quickly improve the quality, accessibility, and visual design of web interfaces.

---

## ✨ Features

- AI-powered HTML repair
- Live before/after comparison
- Accessibility improvements
- Visual hierarchy enhancement
- Responsive design suggestions
- Real-time HTML preview
- Custom repair instructions

Examples:

- "Make this modern and accessible"
- "Convert this into a SaaS landing page"
- "Improve mobile responsiveness"
- "Fix accessibility issues"
- "Make this look like a professional dashboard"

---

## 🧠 How It Works

UXRay uses the OpenAI API to:

1. Analyze submitted HTML
2. Identify UI/UX issues
3. Generate improved HTML
4. Render the repaired version instantly

The application is designed to function as an AI design assistant for developers.

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### AI
- OpenAI API

---

## 📷 Workflow

```text
Broken HTML
      ↓
  UXRay Scan
      ↓
 OpenAI Analysis
      ↓
 Improved HTML
      ↓
 Live Preview
```

---

## 🎯 Example Use Cases
<img width="1210" height="1991" alt="localhost_3000_" src="https://github.com/user-attachments/assets/8d4b0c20-aa78-471d-9805-920a383bbec5" />

### Accessibility Repair

Before:

```html
<button style="background:red;color:red">
Submit
</button>
```

After:

- Improved contrast
- Better spacing
- Focus states
- Accessibility enhancements

---

### Form Modernization

Before:

```html
<form>
<input placeholder="Username">
<input placeholder="Password">
<button>Login</button>
</form>
```

After:

- Cleaner layout
- Improved hierarchy
- Better user experience
- Professional styling

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <your-repository-url>
cd uxray
```

### Install Dependencies

```bash
npm install
```

### Create Environment File

Create a `.env` file in the root directory:

```env
OPENAI_API_KEY=YOUR_API_KEY_HERE
```

### Run

```bash
node server.js
```

Open:

```text
http://localhost:3000
```

---

## 📁 Project Structure

```text
uxray/
│
├── public/
│   ├── index.html
│   ├── index.css
│   └── index.js
│
├── server.js
├── package.json
├── package-lock.json
├── .env.example
└── README.md
```

---

## 🔒 Security

The `.env` file is intentionally excluded from version control.

Never commit API keys to GitHub.

Use:

```env
OPENAI_API_KEY=YOUR_API_KEY_HERE
```

inside your local `.env` file.

---

## 💡 Inspiration

Many developers can build functional applications but struggle to create polished, accessible interfaces.

UXRay aims to bridge the gap between development and design by providing instant AI-powered UI/UX improvements.

---

## 👨‍💻 Built For

**Codex Build Cave Hackathon**

Built using OpenAI's API and Codex ecosystem.

---

## 📌 Future Improvements

- Automatic issue detection panel
- Accessibility scoring
- Before/after slider comparison
- Batch component analysis
- React component support
- Design system recommendations
- Export repaired projects

---

## 🏆 Tagline

**Paste HTML. Detect Problems. Repair Instantly.**

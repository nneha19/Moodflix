# 🎬 MoodFlix — AI-Powered Movie & Show Recommender

MoodFlix is a React + OpenRouter AI web app that recommends the perfect movies or shows based on your **mood**, **company**, **platform**, **duration**, and more — all in a beautifully styled interface powered by TailwindCSS.

<br/>
<br/>

## 🌟 Features

- 🎭 Choose from various **moods** and **genres**
- 🧠 Get **AI-curated** movie/show suggestions
- 📺 See where to **stream** (Netflix, Prime Video, etc.)
- ▶️ Instant **trailer search**
- 📃 Clean **accordion-style results**
- 🎨 Responsive and elegant UI

<br/>
<br/>

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **AI Integration:** [OpenRouter.ai](https://openrouter.ai/) API
- **Language Model:** LLaMA-3 8B Instruct (Meta)

<br/>
<br/>

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/moodflix.git
cd moodflix
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a .env file

```bash
VITE_OPENROUTER_API_KEY=your_openrouter_api_key_here
```

### 4. Run the dev server

```bash
npm run dev
```


<br/>
<br/>

## ✨ Example Prompt Format

### The prompt sent to the AI includes:

Suggest 3 heartwarming romance movies for someone feeling light and chill, watching with friends, available on Netflix, around 2 hours.

```bash
AI returns:
---
**Title:** The Notebook  
**Platform:** Netflix  
**Rating:** PG-13  
**Trailer:** https://youtube.com/official-trailer  
**Description:** A touching story about enduring love and fate.
---

```

<br/>
<br/>

## 🛡️ Security

- The API key is stored in a .env file and never pushed to GitHub.
- No backend is needed — OpenRouter handles requests securely.
- CORS is respected by using HTTP-Referer headers.

<br/>
<br/>

## 📦 Deployment Notes

When deploying:

- Replace HTTP-Referer in AI.js with your production domain:
  ```
  "HTTP-Referer": "https://yourdomain.com"
  ```
- Rebuild and deploy via Vercel, Netlify, or any static host.

<br/>
<br/>

## 🐾 Made with love by Neha & a sleepy kitten
> “A good movie and a good mood — the perfect pair.”

<br/>
<br/>

## 📸 Preview
<img width="1827" height="855" alt="image" src="https://github.com/user-attachments/assets/01f75f49-5d4e-4f30-9fca-d8d72239b221" />
<img width="1712" height="857" alt="image" src="https://github.com/user-attachments/assets/468f404d-6fc8-4615-ac7f-c51824475195" />

<br/>
<br/>
<br/>
<br/>

## 🔗 Link
https://moodflixx.vercel.app/




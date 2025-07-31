# Sentosa

**Sentosa** is a next-generation music streaming frontend web app designed to redefine how music feels—not just how it sounds. Built with a strong emphasis on elegant visuals, fluid UI/UX, and immersive sound playback, Sentosa creates an experience that goes beyond typical streaming platforms.

> **Note:** The Sentosa frontend is powered by the **Harbour** backend, which handles song/album storage, administrator management, and media hosting via Cloudinary.

---
## GitHub Description (Suggested for Repo)

> Sentosa is a next-gen music streaming frontend built with React, Next.js, Tailwind CSS, and Framer Motion. Paired with the Harbour backend (Node.js + MongoDB + Cloudinary), it delivers a high-fidelity, animated, and responsive audio experience designed for music lovers and creators alike.
---

## Features

### Frontend (Sentosa)
- **High-Fidelity Audio Streaming**  
  Powered by Howler.js and Web Audio API for rich, immersive sound.
  
- **Fluid & Dynamic UI**  
  Built with Framer Motion and Tailwind CSS for a seamless experience.
  
- **Smart Search**  
  Quickly search across songs, artists, and playlists with real-time filtering.

- **Dark Mode First**  
  Optimized for low-light environments to enhance the listening experience.

- **Fully Responsive**  
  Enjoy a consistent experience across mobile, tablet, and desktop.

---

### Backend (Harbour)
- **Administrator Dashboard**  
  Admins can upload songs and albums, manage metadata, and maintain the catalog.

- **Cloudinary Integration**  
  Images and audio files are stored securely and served efficiently via CDN.

- **MongoDB Database**  
  Scalable data storage for songs, albums, and user metadata.

- **Express.js API**  
  Robust and secure RESTful endpoints to power the frontend.

- **Support for Large Catalogs**  
  Designed to scale with 1000+ songs and a large album library.

---

## Tech Stack

**Frontend – Sentosa**
- React.js + Next.js
- Tailwind CSS
- Framer Motion
- Howler.js / Web Audio API

**Backend – Harbour**
- Node.js
- Express.js
- MongoDB
- Cloudinary
- Multer / Mongoose

---

## Installation & Setup

### Clone the repositories

```bash
# Frontend - Sentosa
git clone https://github.com/kruth-s/Sentosa.git
cd Sentosa
npm install
npm run dev
```

```bash
# Backend - Harbour
git clone https://github.com/kruth-s/Harbour.git
cd Harbour
npm install
npm start
```

### Environment Variables

Set up a `.env` file in the backend (`Harbour`) with the following (example):

```
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
PORT=4000
```

---

## Screenshots

### Sentosa Home UI  
*A sleek and immersive homepage design showcasing featured music and playlists.*

### Song Player  
*Interactive audio player with waveform animations and real-time controls.*

### Admin Panel (Harbour)  
*Minimalist dashboard for uploading songs/albums, editing metadata, and managing the music catalog.*

---

## Deployment Notes

- The backend is built to be hosted on services like Render, Railway, or any Node-friendly environment.
- Cloudinary handles all media file storage with secure and optimized delivery.
- The frontend (Sentosa) can be deployed to Vercel, Netlify, or any static hosting provider with API routes connected to the Harbour server.

---

## Vision

Sentosa is not just a clone of existing platforms. It’s a re-imagination of what a music experience can be—visually expressive, emotionally resonant, and technologically advanced. Whether you’re an audiophile, a designer, or a developer, Sentosa aims to offer something deeper than just a playlist.


# Clarity Notes

Welcome to **Clarity Notes** – the ultimate notes capturing and collaboration platform. Built with modern technologies, this app enables seamless note-taking, real-time collaboration, and powerful backend functionalities.

## Table of Contents

1. [Video Demo](#video-demo)
2. [Live Demo Link](#live-demo-link)
3. [Overview](#overview)
4. [Features](#features)
5. [Technologies Used](#technologies-used)
6. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running Locally](#running-locally)
7. [Environment Variables](#environment-variables)
8. [Deployment](#deployment)
9. [Contact](#contact)

---

## Video Demo

<div align="center">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/your-video-id" 
    title="Clarity Notes Live Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
  </iframe>
</div>

---

## Live Demo

- [Live Demo Link](https://clarity-capture.vercel.app/)

---

## Overview

**Clarity Notes** is a feature-rich note-taking application designed for modern users. Whether you're working on a team project or organizing your personal notes, Clarity Notes ensures a smooth, intuitive, and collaborative experience.

### Key Highlights:

- **Secure Authentication**: Powered by Clerk.
- **Real-Time Collaboration**: Integrated with Liveblocks for collaborative editing.
- **AI-Powered Features**: Backend functionality enhanced with Cloudflare Workers and AI bindings.
- **Modern UI**: Built using TailwindCSS and shadcn UI.
- **Versatile Note Editor**: Using BlockNote for seamless note management.

---

## Features

- **Authentication**: Secure login with Clerk, supporting both development and production modes.
- **Real-Time Collaboration**: Create and edit documents in real-time with Liveblocks' session tokens.
- **Rich Text Editing**: Enhance your notes with BlockNote integration.
- **Backend Functionality**: Built on Hono framework with CORS support and Cloudflare Workers.
- **Database Integration**: Firestore database for secure and scalable data storage.
- **Responsive Design**: Optimized for all devices with modern UI components.
- **Session Management**: Liveblocks ensures session consistency across users.

---

## Technologies Used

- **Frontend**: Next.js, React, shadcn UI, TailwindCSS
- **Backend**: Hono framework, Cloudflare Workers, AI bindings
- **Database**: Firestore
- **Authentication**: Clerk
- **Collaboration**: Liveblocks
- **Languages**: TypeScript
- **Deployment**: Vercel

---

## Getting Started

### Prerequisites

Before running the project locally, ensure you have the following installed:

- **Node.js** (v16 or above)
- **npm** or **yarn**
- **Cloudflare Workers CLI** (for backend functions)

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-repo/clarity-notes.git
   cd clarity-notes
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**:  
   Create a `.env.local` file in the root directory and add the following:

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
   CLERK_SECRET_KEY=<your-clerk-secret-key>

   NEXT_PUBLIC_FIREBASE_API_KEY=<your-firebase-api-key>
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=<your-firebase-project-id>
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
   NEXT_PUBLIC_FIREBASE_APP_ID=<your-firebase-app-id>

   NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=<your-liveblocks-public-key>
   LIVEBLOCKS_PRIVATE_KEY=<your-liveblocks-private-key>
   NEXT_PUBLIC_BASE_URL=https://quiet-bonus-ce0f.francesco-vurchio82.workers.dev

   FIREBASE_TYPE=<your-firebase-type>
   FIREBASE_PROJECT_ID=<your-firebase-project-id>
   FIREBASE_PRIVATE_KEY_ID=<your-firebase-private-key-id>
   FIREBASE_PRIVATE_KEY=<your-firebase-private-key>
   FIREBASE_CLIENT_EMAIL=<your-firebase-client-email>
   FIREBASE_CLIENT_ID=<your-firebase-client-id>
   FIREBASE_AUTH_URI=<your-firebase-auth-uri>
   FIREBASE_TOKEN_URI=<your-firebase-token-uri>
   FIREBASE_AUTH_PROVIDER_CERT_URL=<your-firebase-auth-provider-cert-url>
   FIREBASE_CLIENT_CERT_URL=<your-firebase-client-cert-url>
   ```

### Running Locally

1. **Start the Development Server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

---

## Environment Variables

The application requires the following environment variables to function correctly:

| Variable                            | Description                        |
| ----------------------------------- | ---------------------------------- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Your Clerk publishable key.        |
| `CLERK_SECRET_KEY`                  | Your Clerk secret key.             |
| `NEXT_PUBLIC_FIREBASE_API_KEY`      | Firebase API key.                  |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID`   | Firebase project ID.               |
| `NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY` | Liveblocks public API key.         |
| `LIVEBLOCKS_PRIVATE_KEY`            | Liveblocks private API key.        |
| `NEXT_PUBLIC_BASE_URL`              | Base URL for backend (Cloudflare). |

---

## Deployment

The app is deployed using **Vercel**. To deploy:

1. **Push Your Code to GitHub**:

   ```bash
   git add .
   git commit -m "Deploy"
   git push origin main
   ```

2. **Set Up on Vercel**:
   - Log in to [Vercel](https://vercel.com/).
   - Connect your GitHub repository.
   - Add the environment variables under "Settings > Environment Variables".
   - Deploy the project.

---

## Contact

**Francesco Vurchio**

- [GitHub](https://github.com/munaciella)
- [Portfolio](https://francesco-dev.vercel.app)
- [LinkedIn](https://linkedin.com/in/francesco-vurchio)

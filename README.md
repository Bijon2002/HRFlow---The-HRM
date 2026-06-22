# HRFlow - The HRM System

Welcome to **HRFlow**, a modern Human Resource Management (HRM) system built using the MERN stack (MongoDB, Express, React, Node.js).

---

## 📁 Project Folder Structure

The project is structured as a monorepo splitting the backend (`server`) and the frontend (`client`).

```text
HRFlow-HRM/
├── client/                     # Frontend Application (React.js)
│   ├── public/                 # Static public assets
│   └── src/                    # React source code
│       ├── assets/             # Images, logos, fonts
│       ├── components/         # Reusable UI components (Buttons, Cards, Navs)
│       ├── context/            # React context API for global state (e.g. Auth)
│       ├── hooks/              # Custom React hooks
│       ├── pages/              # View components representing full pages (Dashboard, etc.)
│       ├── services/           # Axios/Fetch API requests configuration
│       ├── utils/              # Client-side helper functions
│       ├── App.jsx             # Main Application Router/Layout
│       └── main.jsx            # Application entry point
│
├── server/                     # Backend API (Node.js & Express)
│   ├── config/                 # Configurations (e.g. MongoDB connection, env loader)
│   ├── controllers/            # Controller logic for handling route requests
│   ├── middleware/             # Express middlewares (Authentication, logging, errors)
│   ├── models/                 # Mongoose schemas/models (Employee, User, Leave, etc.)
│   ├── routes/                 # Express route definitions
│   ├── utils/                  # Helper/Utility files for the server
│   ├── .env.example            # Environment variables template
│   └── server.js               # Express server entry point
│
└── .gitignore                  # Git ignore patterns
```

---

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) running locally or a MongoDB Atlas URI

### 2. Setting Up the Server
1. Navigate to the server folder:
   ```bash
   cd server
   ```
2. Initialize and install dependencies:
   ```bash
   npm init -y
   npm install express mongoose dotenv cors jsonwebtoken bcryptjs
   ```
3. Create your `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
4. Start the development server:
   ```bash
   node server.js
   ```

### 3. Setting Up the Client
1. Navigate to the client folder:
   ```bash
   cd client
   ```
2. Initialize React (using Vite):
   ```bash
   npm create vite@latest . -- --template react
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

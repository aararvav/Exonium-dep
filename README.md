# Exonium - Project Management Platform

<div align="center">
  <h3>🚀 Modern Project Management for Teams</h3>
  <p>A full-stack project management platform built with React, Node.js, and Next.js</p>
  
  [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/cyruswastaken/Exonium---dep)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
  [![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
</div>

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Development](#development)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

Exonium is a comprehensive project management platform designed to streamline team collaboration and boost productivity. The platform consists of three main components:

- **🌐 Landing Page**: Marketing website built with Next.js
- **💼 Client App**: React-based workspace application
- **⚡ Backend API**: Express.js REST API with authentication

## ✨ Features

### 🏠 Landing Page
- Modern, responsive design with smooth animations
- Pricing plans and feature showcase
- Contact forms and company information
- Dark theme with consistent branding
- SEO optimized with Next.js

### 💻 Client Application
- **Workspace Management**: Create and manage multiple workspaces
- **Project Organization**: Organize projects with custom workflows
- **Task Management**: Create, assign, and track tasks
- **Team Collaboration**: Invite members and manage permissions
- **Real-time Updates**: Live collaboration features
- **Dark Mode**: Beautiful dark theme interface
- **Role-based Access**: Granular permission system

### 🔧 Backend API
- **Authentication**: JWT-based auth with Google OAuth
- **RESTful API**: Clean, documented endpoints
- **Database**: MongoDB with Mongoose ODM
- **Security**: Input validation, rate limiting, CORS
- **File Management**: Upload and storage capabilities
- **Real-time**: WebSocket support for live features

## 📁 Project Structure

```
Exonium/
├── 📂 backend/           # Express.js API
│   ├── src/
│   │   ├── controllers/  # Route controllers
│   │   ├── models/       # Database models
│   │   ├── routes/       # API routes
│   │   ├── services/     # Business logic
│   │   ├── middlewares/  # Custom middleware
│   │   └── config/       # Configuration files
│   └── package.json
├── 📂 client/            # React Workspace App
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Application pages
│   │   ├── hooks/        # Custom React hooks
│   │   ├── context/      # React context providers
│   │   └── lib/          # Utility functions
│   └── package.json
├── 📂 landing/           # Next.js Marketing Site
│   ├── src/
│   │   ├── app/          # Next.js 13+ app directory
│   │   ├── components/   # Reusable components
│   │   └── lib/          # Utilities and configs
│   └── package.json
└── package.json          # Root package.json
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ 
- **npm** or **yarn**
- **MongoDB** (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/cyruswastaken/Exonium---dep.git
   cd Exonium---dep
   ```

2. **Install dependencies**
   ```bash
   # Install all dependencies (root, backend, client, landing)
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy environment files
   cp backend/.env.example backend/.env
   cp client/.env.example client/.env
   cp landing/.env.example landing/.env
   ```

4. **Configure your environment**
   - Update MongoDB connection string
   - Add Google OAuth credentials
   - Set JWT secrets and API keys

5. **Start development servers**
   ```bash
   # Runs all three applications concurrently
   npm run dev
   ```

   This will start:
   - 🌐 Landing: http://localhost:3000
   - 💻 Client: http://localhost:5173
   - ⚡ Backend: http://localhost:8000

## 🛠 Development

### Individual Application Commands

#### Backend API
```bash
cd backend
npm install
npm run dev      # Start with nodemon
npm run build    # Build TypeScript
npm start        # Production start
```

#### Client App
```bash
cd client
npm install
npm run dev      # Vite dev server
npm run build    # Production build
npm run preview  # Preview build
```

#### Landing Page
```bash
cd landing
npm install
npm run dev      # Next.js dev server
npm run build    # Production build
npm start        # Production server
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start all applications in development mode |
| `npm run build` | Build all applications for production |
| `npm run dev:backend` | Start only backend API |
| `npm run dev:client` | Start only client application |
| `npm run dev:landing` | Start only landing page |

## 🌐 Deployment

### Landing Page (Vercel - Recommended)

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Import `cyruswastaken/Exonium---dep`

2. **Configure Build Settings**
   ```
   Framework: Next.js
   Root Directory: landing
   Build Command: npm run build
   Output Directory: .next
   Node.js Version: 18.x
   ```

3. **Deploy**
   - Click "Deploy"
   - Your landing page will be live at `your-project.vercel.app`

### Client App (Vercel/Netlify)

1. **Build Configuration**
   ```
   Framework: Vite
   Root Directory: client
   Build Command: npm run build
   Output Directory: dist
   ```

### Backend API (Railway/Render/Heroku)

1. **Railway Deployment**
   ```bash
   # Install Railway CLI
   npm install -g @railway/cli
   
   # Login and deploy
   railway login
   railway init
   railway up
   ```

2. **Environment Variables**
   - Set MongoDB connection string
   - Add JWT secrets
   - Configure OAuth credentials

## 🔧 Environment Variables

### Backend (.env)
```bash
# Database
MONGODB_URI=mongodb://localhost:27017/exonium

# Authentication
JWT_SECRET=your-jwt-secret
JWT_REFRESH_SECRET=your-refresh-secret

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Server
PORT=8000
NODE_ENV=development

# CORS
CLIENT_URL=http://localhost:5173
LANDING_URL=http://localhost:3000
```

### Client (.env)
```bash
# API Configuration
VITE_API_BASE_URL=http://localhost:8000
VITE_GOOGLE_CLIENT_ID=your-google-client-id

# App Configuration
VITE_APP_NAME=Exonium
VITE_APP_VERSION=1.0.0
```

### Landing (.env)
```bash
# NextAuth Configuration
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Database (if using NextAuth with database)
DATABASE_URL=your-database-url
```

## 🎨 Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Next.js 14** - Full-stack React framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Smooth animations

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **TypeScript** - Type-safe server development
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for auth
- **Passport.js** - Authentication middleware

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Concurrently** - Run multiple commands
- **Nodemon** - Auto-restart server
- **ts-node-dev** - TypeScript execution

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

## 📝 API Documentation

### Base URL
```
Development: http://localhost:8000
Production: https://your-api.herokuapp.com
```

### Authentication Endpoints
```bash
POST /api/auth/register     # User registration
POST /api/auth/login        # User login
POST /api/auth/refresh      # Refresh token
GET  /api/auth/google       # Google OAuth
```

### Workspace Endpoints
```bash
GET    /api/workspaces      # Get user workspaces
POST   /api/workspaces      # Create workspace
PUT    /api/workspaces/:id  # Update workspace
DELETE /api/workspaces/:id  # Delete workspace
```

### Project Endpoints
```bash
GET    /api/projects        # Get projects
POST   /api/projects        # Create project
PUT    /api/projects/:id    # Update project
DELETE /api/projects/:id    # Delete project
```



## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## 🙏 Acknowledgments

- Design inspiration from Linear and modern SaaS applications
- Icons from Lucide React and custom SVG illustrations
- Color palette and theming influenced by modern design systems

---

<div align="center">
  <p>Built with ❤️ by the Exonium Team</p>
  <p>⭐ Star us on GitHub if you find this project useful!</p>
</div>

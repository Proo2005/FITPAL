Fitness Tracker & AI Chatbot App

A modern fitness tracking web application with personalized workout plans, habit tracking, PR (personal record) tracking, and an AI chatbot powered by Gemini for fitness-related queries. Integrated with Razorpay for premium membership payments.

Features
Frontend

Next.js + TypeScript + Tailwind CSS

Responsive UI with dark theme

Habit tracker with database integration

PR Tracker for tracking personal records

Fitness AI Chatbot using Gemini

Premium membership plans with Razorpay integration

Contact page with EmailJS for user messages

Backend

Node.js + Express.js + MongoDB Atlas

REST API endpoints for workouts, PRs, habits

Payment routes for Razorpay

Chat API endpoint for Gemini AI queries

Tech Stack

Frontend: Next.js, React, TailwindCSS, Framer Motion

Backend: Node.js, Express.js, MongoDB, Mongoose

AI Chatbot: Gemini API

Payments: Razorpay

Email: EmailJS

Authentication: (Optional future feature)

Folder Structure
Frontend
/front
├─ /app
│  ├─ /components
│  │  ├─ Navbar.tsx
│  │  ├─ Footer.tsx
│  ├─ /membership
│  │  └─ page.tsx
│  ├─ /chat
│  │  └─ page.tsx
│  ├─ /contact
│  │  └─ page.tsx
├─ package.json
├─ next.config.js

Backend
/back
├─ /controller
│  ├─ workoutController.js
│  ├─ prController.js
│  ├─ habitController.js
│  └─ chatController.js
├─ /routes
│  ├─ workoutRoutes.js
│  ├─ prRoutes.js
│  ├─ habitRoutes.js
│  └─ chatRoutes.js
├─ /lib
│  ├─ mongodb.js
│  ├─ razorpay.js
│  └─ gemini.js
├─ server.js
├─ package.json
└─ .env

Setup
Prerequisites

Node.js v20+

MongoDB Atlas account

Razorpay account (for payments)

EmailJS account (for contact form)

Gemini AI API access

Backend Setup

Clone the repository and navigate to /back:

cd back
npm install


Create a .env file:

MONGO_URI=your_mongodb_uri
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
GEMINI_API_KEY=your_gemini_api_key
EMAILJS_SERVICE_ID=your_emailjs_service
EMAILJS_TEMPLATE_ID=your_emailjs_template
EMAILJS_PUBLIC_KEY=your_emailjs_public_key


Start the backend server:

node server.js


Your backend should run on http://localhost:5000.

Frontend Setup

Navigate to /front:

cd front
npm install


Create a .env.local file:

NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key


Start the frontend:

npm run dev


Your frontend should run on http://localhost:3000.

API Endpoints
Workouts

GET /api/workouts/weekly – Get weekly workouts

POST /api/workouts/weekly – Add workout

PRs

GET /api/prs – Get personal records

POST /api/prs – Create PR

PUT /api/prs/:id – Update PR

DELETE /api/prs/:id – Delete PR

Habits

GET /api/habits – Get habits

POST /api/habits – Create habit

PUT /api/habits/:id – Update habit

DELETE /api/habits/:id – Delete habit

Payments

POST /api/payment/create-order – Create Razorpay order

Chatbot

POST /api/chat/gemini – Send user query to Gemini AI and receive a response

Contributing

Fork the repository

Create your branch: git checkout -b feature/feature-name

Commit your changes: git commit -m "Add new feature"

Push to the branch: git push origin feature/feature-name

Open a Pull Request

License

MIT License © 2026
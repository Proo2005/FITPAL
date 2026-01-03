# Fitness Tracker & AI Chatbot App

A modern fitness tracking web application with personalized workout plans, habit tracking, PR (personal record) tracking, and an AI chatbot powered by Gemini for fitness-related queries. Integrated with Razorpay for premium membership payments.  

---

## Features

### Frontend
- Next.js + TypeScript + Tailwind CSS  
- Responsive UI with dark theme  
- Habit tracker with database integration  
- PR Tracker for tracking personal records  
- Fitness AI Chatbot using Gemini API  
- Premium membership plans with Razorpay integration  
- Contact page with EmailJS for user messages  

### Backend
- Node.js + Express.js + MongoDB Atlas  
- REST API endpoints for workouts, PRs, habits  
- Payment routes for Razorpay  
- Chat API endpoint for Gemini AI queries  

---

## Tech Stack

- **Frontend:** Next.js, React, TailwindCSS, Framer Motion  
- **Backend:** Node.js, Express.js, MongoDB, Mongoose  
- **AI Chatbot:** Gemini API  
- **Payments:** Razorpay  
- **Email:** EmailJS  

---

## Folder Structure

### Frontend


---

## Setup Instructions

### Prerequisites
- Node.js v20+  
- MongoDB Atlas account  
- Razorpay account (for payments)  
- EmailJS account (for contact form)  
- Gemini AI API access  

---

### Backend Setup

1. Navigate to `/back`:

```bash
cd back
npm install


create .env file
MONGO_URI=your_mongodb_uri
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
GEMINI_API_KEY=your_gemini_api_key
EMAILJS_SERVICE_ID=your_emailjs_service
EMAILJS_TEMPLATE_ID=your_emailjs_template
EMAILJS_PUBLIC_KEY=your_emailjs_public_key


start backend server 
node server.js
Backend runs on http://localhost:5000.


---

If you want, I can also **add a section with screenshots and demo instructions** to make it more professional for GitHub.  

Do you want me to do that?

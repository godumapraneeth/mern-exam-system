# 📝 MERN Exam System (Student Module)

This is a **full-stack exam-taking application** built as part of the **LeadMasters AI Tech Solutions – Fresher Selection Assessment**.  
It allows students to register, log in, take an exam with MCQs, navigate between questions, track time, and view results.

---

## 🚀 Features
- 🔑 **User Authentication** – Register & Login with JWT  
- 🎯 **Start Exam** – Fetch randomized questions from backend  
- 📑 **Exam Interface** – Display MCQs with Next/Previous navigation  
- ⏳ **Timer** – 30-minute countdown with auto-submit  
- 📤 **Submit Exam** – Score calculation on backend  
- 📊 **Result Page** – Shows score, answers, and correct answers  

---

## 🛠️ Tech Stack
- **Frontend:** React.js, TailwindCSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Atlas)  
- **Authentication:** JWT (JSON Web Tokens)
- 

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/mern-exam-system.git
cd mern-exam-system
2️⃣ Backend Setup
bash
Copy code
cd backend
npm install
Create a .env file in backend/ with:

ini
Copy code
PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
Start server:

bash
Copy code
npm run dev
3️⃣ Frontend Setup
bash
Copy code
cd frontend
npm install
npm run dev
The app runs on:

Frontend: http://localhost:5173

Backend: http://localhost:5000

Import it into Postman to test APIs:

/api/auth/register → Register user

/api/auth/login → Login & get JWT

/api/exam/start → Fetch questions

/api/exam/submit → Submit answers & get score

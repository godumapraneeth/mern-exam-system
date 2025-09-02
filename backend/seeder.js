import mongoose from "mongoose";
import dotenv from "dotenv";
import Question from "./models/Question.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const questions = [
  {
    questionText: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    questionText: "Which of the following is a JavaScript framework?",
    options: ["React", "Django", "Laravel", "Spring"],
    correctAnswer: "React",
  },
  {
    questionText: "Which database is NoSQL?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
    correctAnswer: "MongoDB",
  },
  {
    questionText: "What is the default port of MongoDB?",
    options: ["27017", "8080", "3000", "5000"],
    correctAnswer: "27017",
  },
  {
    questionText: "Which keyword is used to declare a constant in JavaScript?",
    options: ["let", "var", "const", "static"],
    correctAnswer: "const",
  },
  {
    questionText: "Which HTML tag is used to display an image?",
    options: ["<div>", "<img>", "<picture>", "<image>"],
    correctAnswer: "<img>",
  },
  {
    questionText: "What does CSS stand for?",
    options: [
      "Creative Style System",
      "Cascading Style Sheets",
      "Computer Style Syntax",
      "Custom Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    questionText: "Which symbol is used for comments in JavaScript?",
    options: ["//", "/* */", "#", "<!-- -->"],
    correctAnswer: "//",
  },
  {
    questionText: "Which method converts a JSON string into an object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "parse.JSON()"],
    correctAnswer: "JSON.parse()",
  },
  {
    questionText: "Which operator is used for strict equality in JavaScript?",
    options: ["=", "==", "===", "!="],
    correctAnswer: "===",
  },
  {
    questionText: "Which company developed React?",
    options: ["Google", "Microsoft", "Facebook", "Twitter"],
    correctAnswer: "Facebook",
  },
  {
    questionText: "Which of the following is NOT a JavaScript data type?",
    options: ["String", "Boolean", "Float", "Object"],
    correctAnswer: "Float",
  },
  {
    questionText: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Sequential Query Language",
      "Standard Question Language",
      "Statement Query Language",
    ],
    correctAnswer: "Structured Query Language",
  },
  {
    questionText: "Which tag is used for the largest heading in HTML?",
    options: ["<h1>", "<h6>", "<head>", "<header>"],
    correctAnswer: "<h1>",
  },
  {
    questionText: "Which function is used to write a message to the console in JavaScript?",
    options: ["console.write()", "console.log()", "print()", "log.console()"],
    correctAnswer: "console.log()",
  },
  {
    questionText: "Which of these is a CSS framework?",
    options: ["Bootstrap", "Node.js", "Django", "Express"],
    correctAnswer: "Bootstrap",
  },
  {
    questionText: "Which of these is used to initialize a new Node.js project?",
    options: ["npm init", "npm start", "node init", "npm install"],
    correctAnswer: "npm init",
  },
  {
    questionText: "Which method is used to join arrays in JavaScript?",
    options: ["concat()", "merge()", "append()", "joinArray()"],
    correctAnswer: "concat()",
  },
  {
    questionText: "Which lifecycle method is called when a React component mounts?",
    options: ["componentDidMount", "componentWillUnmount", "render", "useEffect"],
    correctAnswer: "componentDidMount",
  },
  {
    questionText: "Which of these is NOT a MongoDB data type?",
    options: ["String", "Number", "Array", "Float"],
    correctAnswer: "Float",
  },
  {
    questionText: "Which CSS property controls text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    correctAnswer: "font-size",
  },
  {
    questionText: "What is the correct way to create a function in JavaScript?",
    options: [
      "function myFunc() {}",
      "def myFunc() {}",
      "create myFunc() {}",
      "fn myFunc() {}",
    ],
    correctAnswer: "function myFunc() {}",
  },
  {
    questionText: "Which HTTP method is used to create data in REST API?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: "POST",
  },
  {
    questionText: "Which Node.js framework is used to build APIs?",
    options: ["React", "Express", "Bootstrap", "Flask"],
    correctAnswer: "Express",
  },
  {
    questionText: "Which hook is used for state in React?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    correctAnswer: "useState",
  },
];


const importData=async () =>{
    try{
        await Question.deleteMany();
        await Question.insertMany(questions);
        console.log("Sample questions seeded");
        process.exit();
    } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
}

importData();
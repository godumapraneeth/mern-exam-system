import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api",
});

export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);
export const startExam = (token) => API.get("/exam/start",{
    headers:{Authorization : `Bearer ${token}`}
});
export const submitExam = (answers,token) => API.post("/exam/submit",answers,{
     headers:{Authorization:`Bearer ${token}`},
});



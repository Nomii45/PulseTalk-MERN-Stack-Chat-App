import React from 'react';
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CallPage from "./pages/CallPage.jsx"
import ChatPage from "./pages/ChatPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import NotificationPage from "./pages/NotificationPage.jsx"
import OnboardingPage from "./pages/OnboardingPage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/call' element={<CallPage />} />
        <Route path='/chat' element={<ChatPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/notification' element={<NotificationPage />} />
        <Route path='/onboarding' element={<OnboardingPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;

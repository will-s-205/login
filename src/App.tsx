import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/api/signin" element={<SignIn />} />
        <Route path="/api/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

// UI Sign up form // DONE
// Back-End MongoDB Mongoose // DONE
// Login // IN PROGRESS
    // Login as a guest feature
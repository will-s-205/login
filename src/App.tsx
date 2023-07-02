import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import FindWord from './components/FindWord';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/findword" element={<FindWord />} />
      </Routes>
    </BrowserRouter>
  );
}

// UI Sign up form // DONE
// Back-End MongoDB Mongoose // DONE
// Login // IN PROGRESS
    // Login as a guest feature
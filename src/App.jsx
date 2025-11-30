import { HashRouter, Routes, Route, Link,Navigate } from "react-router-dom";
import Home from "./Home";
import Login from "./login";
import Signup from "./signup";
import React from "react";

export default function App() {
  return (
    <HashRouter  basename="/login-page-task">
      <nav className="flex items-center justify-center gap-6 py-4 bg-gray-100">
        <Link
          to="/login"
          className="text-red-500 text-lg font-medium hover:text-red-700 transition"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="text-red-500 text-lg font-medium hover:text-red-700 transition"
        >
          Signup
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </HashRouter>
  );
}

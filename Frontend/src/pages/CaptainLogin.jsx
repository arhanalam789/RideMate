import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // yaha apna submit logic likhna
  };

  const handleUserLogin = () => {
    navigate("/login");
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="w-80 p-6 rounded-lg bg-white shadow-md">
        <div className="flex justify-center mb-6">
          <img
            src="https://www.pngall.com/wp-content/uploads/4/Uber-Transparent.png"
            alt="RideMate Logo"
            className="w-20 h-20 object-contain"
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm text-gray-800 mb-2">
              Captain Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="captain@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-800 mb-2">
              Enter Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Captain Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
  Ready to join the fleet?{" "}
  <Link to="/CaptainSignup" className="text-blue-600 hover:underline">
    Sign up as a Captain
  </Link>
</p>

        <button
          onClick={handleUserLogin}
          className="w-full mt-6 bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition"
        >
          Switch to User Login
        </button>
      </div>
    </div>
  );
};

export default CaptainLogin;

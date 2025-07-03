import { useState } from "react";
import React from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-10 w-full max-w-md">
        
        {/* ✅ Demo Credentials Section */}
        <div className="mb-6 text-sm text-gray-700">
          <p className="font-semibold mb-2 text-center text-emerald-600">💡 Demo Credentials</p>
          <div className="bg-emerald-500 p-4 rounded-lg text-black-700 space-y-2 text-sm">
            <p><strong>👤 Admin:</strong> admin@tracksy.com / admin123</p>
            <p><strong>👥 User:</strong> Ajeet@tracksy.com / 123</p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            submitHandler(e);
            setEmail("");
            setPassword("");
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400 w-full"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400 mt-3 w-full"
            type="password"
            placeholder="Enter Your Password"
          />
          <button className="text-white border-none outline-none bg-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-white mt-5 w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

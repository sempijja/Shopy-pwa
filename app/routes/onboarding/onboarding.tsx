// app/routes/onboarding/onboarding.tsx
import React from "react";
import { Link } from "react-router-dom";

const Onboarding = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <h1 className="text-xl font-bold mb-2 line-through text-gray-500">DM for price</h1>
        <h2 className="text-xl font-bold mb-6 text-black">Check store for price</h2>
      </div>

      <div className="space-y-4 w-full px-4">
        <button
          className="w-full py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition"
        >
          Continue with Google
        </button>
        <Link
          to="#"
          className="block text-purple-600 text-center underline hover:text-purple-700 transition"
        >
          Continue with WhatsApp
        </Link>
      </div>
    </div>
  );
};

export default Onboarding;

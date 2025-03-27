import React from "react";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {/* Modal Box */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] animate-fadeIn">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-semibold text-black">Sign Up</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
        </div>

        {/* Body */}
        <div className="mt-4 flex flex-col space-y-4 text-white">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded mt-2 text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded mt-2  text-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded mt-2 text-black"
          />

          <button className=" px-4 py-2 bg-blue-500 text-white rounded">
            Sign Up
          </button>
        </div>

        {/* Footer */}
        <div className="flex  justify-between mt-4">
          <button onClick={onClose} className="px-4 py-2 text-black">
            Sign In
          </button>
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;

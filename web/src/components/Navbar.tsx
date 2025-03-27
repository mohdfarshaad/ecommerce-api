import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import SignUpModal from "./SignUpModal";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 fixed w-full shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Barter
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2"
          >
            <UserIcon className="h-6 w-6" />
            <span>Login</span>
          </button>

          <Link to="/cart" className="flex items-center gap-2">
            <ShoppingCartIcon className="h-6 w-6" />
            <span>Cart</span>
          </Link>
        </div>
      </div>

      {/* Login Modal */}
      <SignUpModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
};

export default Navbar;

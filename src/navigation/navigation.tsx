import { Link } from "react-router-dom";
import { useState } from "react";
import Magnetic from "../components/magnetic";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white font-bold">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Magnetic>
              <Link to="/" className="text-xl font-bold">
                MT
              </Link>
            </Magnetic>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              <Magnetic>
                <Link
                  to="/"
                  className="cursor-pointer hover:text-blue-500 transition-colors"
                >
                  Home
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  to="/about"
                  className="cursor-pointer hover:text-blue-500 transition-colors"
                >
                  About
                </Link>
              </Magnetic>
              <div className="relative">
                <Magnetic>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="cursor-pointer hover:text-blue-500 transition-colors flex items-center"
                  >
                    Division
                    {dropdownOpen ? (
                      <FiChevronUp className="ml-2" />
                    ) : (
                      <FiChevronDown className="ml-2" />
                    )}
                  </button>
                </Magnetic>
                {dropdownOpen && (
                  <div className="absolute mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10 text-left">
                    <Magnetic>
                      <Link
                        to="/division/kaderisasi"
                        className="block px-4 py-2 text-white cursor-pointer hover:text-green-500 transition-colors"
                      >
                        Kaderisasi
                      </Link>
                    </Magnetic>
                    <Magnetic>
                      <Link
                        to="/division/media"
                        className="block px-4 py-2 text-white cursor-pointer hover:text-red-500 transition-colors"
                      >
                        Media
                      </Link>
                    </Magnetic>
                    <Magnetic>
                      <Link
                        to="/division/syiar"
                        className="block px-4 py-2 text-white cursor-pointer hover:text-orange-500 transition-colors"
                      >
                        Syiar
                      </Link>
                    </Magnetic>
                  </div>
                )}
              </div>
              <Magnetic>
                <Link
                  to="/articles"
                  className="cursor-pointer hover:text-blue-500 transition-colors"
                >
                  Articles
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  to="/events"
                  className="cursor-pointer hover:text-blue-500 transition-colors"
                >
                  Events
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  to="/contact"
                  className="cursor-pointer hover:text-blue-500 transition-colors"
                >
                  Contact
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

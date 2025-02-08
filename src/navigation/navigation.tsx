import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              Company Name
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                Home
              </Link>
              <Link
                to="/about"
                className="hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                About
              </Link>
              <Link
                to="/division"
                className="hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Division
              </Link>
              <Link
                to="/articles"
                className="hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Articles
              </Link>
              <Link
                to="/events"
                className="hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Events
              </Link>
              <Link
                to="/contact"
                className="hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

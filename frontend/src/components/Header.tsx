import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <header className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Book My Hotel</Link>
        </h1>
        <nav className="flex space-x-4">
          {isLoggedIn ? (
            <>
              <Link
                className="text-white px-3 font-bold hover:bg-blue-600 rounded"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="text-white px-3 font-bold hover:bg-blue-600 rounded"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="bg-white text-blue-800 px-3 font-bold hover:bg-gray-100 rounded"
            >
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-green-200 p-4">
      <ul className="flex gap-8">
        <li className="font-bold text-lg">
          <Link to="/" className="text-blue-500 hover:text-blue-700">
            CRUD-RTK
          </Link>
        </li>
        <li>
          <Link to="/createUSER" className="text-blue-500 hover:text-blue-700">
            Create
          </Link>
        </li>
        <li>
          <Link to="/read" className="text-blue-500 hover:text-blue-700">
            Read
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

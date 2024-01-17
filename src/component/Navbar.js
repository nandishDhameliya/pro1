// // Navbar.js
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const [showNav, setShowNav] = useState(false);

//   const toggleNav = () => {
//     setShowNav(!showNav);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <Link to="/">Logo</Link>
//       </div>
//       <div className={`nav-links ${showNav ? "show" : ""}`}>
//         <ul>
//           <li>
//             <Link to="/" onClick={showNav ? toggleNav : null}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" onClick={showNav ? toggleNav : null}>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/services" onClick={showNav ? toggleNav : null}>
//               Services
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" onClick={showNav ? toggleNav : null}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <div className="hamburger" onClick={toggleNav}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleClick = () => {
    setShowNav(!showNav);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <div className={`nav-link ${showNav ? "show" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={showNav ? handleClick : null}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={showNav ? handleClick : null}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={showNav ? handleClick : null}>
              contact
            </Link>
          </li>
          <li>
            <Link to="/ " onClick={showNav ? handleClick : null}>
              Help
            </Link>
          </li>
        </ul>
      </div>
      <div className="ham" onClick={handleClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;

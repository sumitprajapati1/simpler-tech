import React from "react";
import Link from "next/link";

const Navbar = () => (
  <nav className="navbar">
    <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>MyApp</div>
    <div className="navbar-links">
      <Link href="/" className="navbar-link">Home</Link>
      <Link href="/about" className="navbar-link">About</Link>
      <Link href="/contact" className="navbar-link">Contact</Link>
    </div>
  </nav>
);

export default Navbar; 
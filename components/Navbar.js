import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { LanguageContext } from "@/components/LanguageContext";

export const Nav = ({ title, links }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const { setLanguage } = useContext(LanguageContext);
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-secondary">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <span className="">{title}</span>
        </Link>

        <button
          className="custom-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarsExample09"
        >
          <div className="navbar-nav">
            {links.map((value, index) => (
              <Link key={index} href={value.link} className="nav-link">
                {value.title}
              </Link>
            ))}
            <select
              className="form-select form-select-sm "
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

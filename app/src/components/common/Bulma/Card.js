import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className="card">{children}</div>
  );
}

export function Header({ children, className = "", icon }) {
  return (
    <header className="card-header">
      <p className={`card-header-title ${className}`}>{children}</p>
      {icon &&
        <a className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      }
    </header>
  );
}

export function Content({ children, className = "" }) {
  return (
    <div className={`card-content ${className}`}>
      <div className="content">{children}</div>
    </div>
  );
}

export function Footer({ children, className = "" }) {
  return <footer className={`card-footer ${className}`}>{children}</footer>
}


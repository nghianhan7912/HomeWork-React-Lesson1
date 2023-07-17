import React from "react";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark" style={{padding:"10px 200px"}}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Service
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Content</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

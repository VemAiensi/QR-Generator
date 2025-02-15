import React from "react";

function Nav() {
  return (
    <div className="nav">
      <div className="brand">
        <img src="/logoBlack.png" alt="" />
        <div className="title">
          <span>QR Code Generator</span>
          <span>vibrant-arrow.org</span>
        </div>
      </div>

      <div className="nav-links">
        <a href="https://github.com/VemAiensi/QR-Generator" target="_blank">
          <svg
            fill="#000000"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>fork</title>{" "}
              <path d="M2.016 26.016q0-1.92 1.088-3.456t2.912-2.176v-8.736q-1.792-0.608-2.912-2.144t-1.088-3.488q0-2.496 1.728-4.256t4.256-1.76 4.256 1.76 1.76 4.256q0 1.92-1.12 3.488t-2.88 2.144v4.736q0.992-0.384 1.984-0.384h8q0.832 0 1.408-0.576t0.608-1.408v-0.352q-1.792-0.608-2.912-2.176t-1.088-3.456q0-2.496 1.728-4.256t4.256-1.76 4.256 1.76 1.76 4.256q0 1.92-1.12 3.456t-2.88 2.176v0.352q0 2.496-1.76 4.256t-4.256 1.76h-8q-0.864 0-1.44 0.608 1.536 0.736 2.496 2.176t0.96 3.2q0 2.496-1.76 4.256t-4.256 1.76-4.256-1.76-1.728-4.256zM6.016 26.016q0 0.832 0.576 1.44t1.408 0.576 1.408-0.576 0.608-1.44-0.608-1.408-1.408-0.576-1.408 0.576-0.576 1.408zM6.016 6.016q0 0.832 0.576 1.44t1.408 0.576 1.408-0.576 0.608-1.44-0.608-1.408-1.408-0.576-1.408 0.576-0.576 1.408zM22.016 8.032q0 0.832 0.576 1.408t1.408 0.576 1.408-0.576 0.608-1.408-0.608-1.408-1.408-0.608-1.408 0.608-0.576 1.408z"></path>{" "}
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Nav;

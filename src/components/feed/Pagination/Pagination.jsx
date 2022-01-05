import React from "react";
import "./Pagination.css";
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  pageNumber,
  minPageLimit,
  maxPageLimit,
  handleMinPageLimit,
  handleMaxPageLimit,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const currentPages = pageNumbers.slice(minPageLimit, maxPageLimit);

  return (
    <nav className="pageNumberBar nav-pills">
      <ul className="pagination ">
        <li className="nav-item">
          <a href="/" className="nav-link" onClick={handleMinPageLimit}>
            <KeyboardDoubleArrowLeft />
          </a>
        </li>
        {currentPages.map((number) => (
          <li key={number} className="nav-item">
            <a
              onClick={() => paginate(number)}
              href="/"
              className={`nav-link ${number === pageNumber && "active"}`}
            >
              {number}
            </a>
          </li>
        ))}
        <li className="nav-item">
          <a
            href="/"
            className="nav-link"
            onClick={() =>
              handleMaxPageLimit(pageNumbers[pageNumbers.length - 1])
            }
          >
            <KeyboardDoubleArrowRight />
          </a>
        </li>
      </ul>
    </nav>
  );
}

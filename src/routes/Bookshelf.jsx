import { useEffect, useState, useRef } from "react";
import { triggerOnInputRef } from "../typeshuffle/utils";
import React from "react";
import Box from "@mui/material/Box";
import "../base.css";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Link from "@mui/material/Link";

function Bookshelf() {
  const [books, setBooks] = useState([]);
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current !== null) {
      triggerOnInputRef(inputRef);
    }
  }, [inputRef]);
  useEffect(() => {
    const _cb = async () => {
      const b = await fetch("/books.json");
      const bs = await b.json();
      bs.sort((a, b) => {
        return a["Authors"].toUpperCase() < b["Authors"].toUpperCase() ? -1 : 1;
      });
      setBooks(bs);
    };
    if (books.length === 0) {
      _cb();
    }
  });
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="flex-start">
        <div className="content">
          <div>
            <Link href="/">Home</Link>
          </div>
          <div ref={inputRef}>
            <h4>These books are currently on my bookshelf.</h4>
          </div>
          <div>
            {books.map((b) => {
              return (
                <div key={b["ISBN-13"]}>
                  <Link
                    href={`http://books.google.com/books?vid=${b["ISBN-13"]}`}
                  >
                    <MenuBookIcon />
                  </Link>
                  {b["Title"]}- {b["Authors"]}
                </div>
              );
            })}
          </div>
        </div>
      </Box>
    </>
  );
}

export default Bookshelf;

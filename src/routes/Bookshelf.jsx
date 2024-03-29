import { useEffect, useState, useRef } from "react";
import { triggerOnInputRef } from "../typeshuffle/utils";
import React from "react";
import Box from "@mui/material/Box";
import "../base.css";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Link from "@mui/material/Link";

function Bookshelf() {
  const [books, setBooks] = useState([]);
  const [audibleBooks, setAudibleBooks] = useState([]);
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current !== null) {
      triggerOnInputRef(inputRef);
    }
  }, [inputRef]);
  useEffect(() => {
    const _cb = async () => {
      const b = await fetch("/books.json");
      let bs = await b.json();
      bs = bs.filter((book) => book["available"] !== false);
      bs.sort((a, b) => {
        return a["Authors"].toUpperCase() < b["Authors"].toUpperCase() ? -1 : 1;
      });
      setBooks(bs);
    };
    if (books.length === 0) {
      _cb();
    }
  });
  useEffect(() => {
    const _cb = async () => {
      const b = await fetch("/books-audible.json");
      let bs = await b.json();
      // bs = bs.filter((book) => book["available"] !== false);
      bs.sort((a, b) => {
        return a["author"].toUpperCase() < b["author"].toUpperCase() ? -1 : 1;
      });
      setAudibleBooks(bs);
    };
    if (audibleBooks.length === 0) {
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
            <h4>
              These books are currently on my bookshelf. The list generally
              rotates as I pick new interests and give-away older ones.
            </h4>
            <p>I have been spending more time on audio books recently.</p>
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
          <div>
            <h3>Here&apos;s the list of my audible collection</h3>
          </div>
          <div>
            {audibleBooks.map((b) => {
              return (
                <div key={b["asin"]}>
                  <Link href={b["info_link"]}>
                    <MenuBookIcon />
                  </Link>
                  {b["title"]}- {b["author"]}
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

import { triggerOnInputRef } from "../typeshuffle/utils";
import { useEffect, useRef } from "react";
import React from "react";
// import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import "../base.css";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

function Resume() {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current !== null) {
      triggerOnInputRef(inputRef);
    }
  }, [inputRef]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <CssBaseline />
      <div>
        <div className="content" ref={inputRef}>
          <h1>Hello world resume</h1>
        </div>
        <Link href="/">Home</Link>
      </div>
    </Box>
  );
}

export default Resume;

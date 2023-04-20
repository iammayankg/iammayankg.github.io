import "./App.css";
import "./base.css";
import React from "react";
import { triggerOnInputRef } from "./typeshuffle/utils";
import { useEffect, useRef } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current !== null) {
      triggerOnInputRef(inputRef);
    }
  }, [inputRef]);

  return (
    <div className="App">
      <CssBaseline />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="stretch"
      >
        <div>
          <div className="content" ref={inputRef}>
            <p className="homepage-name">Mayank Gupta</p>
          </div>
          
        </div>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="stretch"
      ><div>
      <Link href="/resume">Resume</Link>
    </div></Box>
    </div>
  );
}

export default App;

import "./App.css";
import "./base.css";
import React from "react";
import { triggerOnInputRef } from "./typeshuffle/utils";
import { useEffect, useRef } from "react";
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
      <div className="content2" ref={inputRef}>
        <Box display="flex" justifyContent="center" alignItems="stretch">
          <div className="homepage-name">Mayank Gupta</div>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="stretch">
          <div className="homepage-subheading">Dreamer, doer</div>
        </Box>
      </div>

      <Box display="flex" justifyContent="center" alignItems="stretch">
        <div>
          <Link href="/resume">Resume</Link>
        </div>
      </Box>
    </div>
  );
}

export default App;

import "./App.css";
import "./base.css";
import React from "react";
import { triggerOnInputRef } from "./typeshuffle/utils";
import { useEffect, useRef } from "react";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Link from '@mui/material/Link';

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
      <header className="App-header">
        <Container component="main">
          <div className="content" ref={inputRef}>
            <h1>Hello world</h1>
          </div>
          <Link href="/resume">Resume</Link>
        </Container>
      </header>
    </div>
  );
}

export default App;

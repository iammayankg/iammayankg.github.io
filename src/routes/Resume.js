import { triggerOnInputRef } from "../typeshuffle/utils";
import { useEffect, useRef } from "react";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import "../base.css";

function Resume() {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current !== null) {
      triggerOnInputRef(inputRef);
    }
  }, [inputRef]);

  return (
    <div className="content" ref={inputRef}>
      <h1>Hello world resume</h1>
    </div>
  );
}

export default Resume;

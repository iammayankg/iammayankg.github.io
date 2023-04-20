import { triggerOnInputRef } from "../typeshuffle/utils";
import { useEffect, useRef, useState } from "react";
import React from "react";
// import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import "../base.css";
import "./resume.css"
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

function Resume() {
  const inputRef = useRef(null);
  const [numPages, setNumPages] = useState();
  useEffect(() => {
    if (inputRef.current !== null) {
      triggerOnInputRef(inputRef);
    }
  }, [inputRef]);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }
  return (
    <>
    <CssBaseline />
    <Box
      display="flex"
      justifyContent="center"
      alignItems="stretch"
    >
      <div className="content" ref={inputRef}>
          <Link href="/">Home</Link>
          <Link href="/resume.pdf">Download</Link>
        </div>
    </Box>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="stretch"
      minHeight="100vh"
    >
      
      <div>
        
        <div className="resume-container">
          <Document file="/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      </div>
    </Box>
    </>
  );
}

export default Resume;

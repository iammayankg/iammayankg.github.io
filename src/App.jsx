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
      <Box display="flex" justifyContent="center" alignItems="stretch">
        <div className="content">
          <Box display="flex" justifyContent="center" alignItems="stretch">
            <div className="homepage-name">Mayank Gupta</div>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="stretch">
            <div className="homepage-subheading">Software engineering</div>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="stretch">
            <div ref={inputRef}>and algorithm analysis.</div>
          </Box>
        </div>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="stretch">
        <div className="content">
          <Box display="flex" justifyContent="center" alignItems="stretch">
            <div>
              <p>email: iamanugly@duck.com</p>
            </div>
          </Box>
        </div>
      </Box>
      {/* <Box display="flex" justifyContent="center" alignItems="stretch">
        <div>
          <Link href="/bookshelf">BookShelf</Link>
        </div>
      </Box> */}
      <Box display="flex" justifyContent="center" alignItems="stretch">
        <div>
          <Link href="https://github.com/iammayankg/iammayankg.github.io/blob/master/public/resume.pdf">
            Resume
          </Link>
        </div>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="stretch">
        <div>
          <Link href="https://blog.bayesrule.me">Blog</Link>
        </div>
      </Box>
    </div>
  );
}

export default App;

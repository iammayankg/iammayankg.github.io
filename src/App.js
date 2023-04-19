import logo from './logo.svg';
import './App.css';
import './base.css';

import { preloadFonts } from './utils';
import { TypeShuffle } from './typeShuffle';
import { useEffect, useRef } from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function App() {
  const inputRef = useRef(null);

  const triggerIt = async () => {
    await preloadFonts('biu0hfr');
    const ts = new TypeShuffle(inputRef.current);
    ts.trigger('fx1');
  }
    
    useEffect(() => {
      
      if (inputRef.current !== null) {
        triggerIt();

      }
      
    });
    

  return (
    <div className="App">
      <header className="App-header">
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <dl className="content" ref={inputRef}>
          <dt>Hello world</dt>
        </dl>
        </Container>
      </header>
    </div>
  );
}

export default App;

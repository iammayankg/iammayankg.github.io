import logo from './logo.svg';
import './App.css';
import './base.css';

import { preloadFonts } from './utils';
import { TypeShuffle } from './typeShuffle';
import { useEffect, useRef } from 'react';

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
        <dl className="content" ref={inputRef}>
          <dt>Hello world</dt>
        </dl>
      </header>
    </div>
  );
}

export default App;

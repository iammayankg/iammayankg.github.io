import logo from './logo.svg';
import './App.css';
import './base.css';

import { preloadFonts } from './utils';
import { TypeShuffle } from './typeShuffle';
import { useEffect, useRef } from 'react';

function App() {
  const inputRef = useRef(null);
    
    useEffect(() => {
      if (inputRef.current !== null) {
        const ts = new TypeShuffle(inputRef.current);
        ts.trigger('fx1');

        // [...document.querySelectorAll('.effects > button')].forEach(button => {
        //     button.addEventListener('click', () => {
        //         ts.trigger(`fx${button.dataset.fx}`);
        //     });
        // });
      }
      
    });
    

  return (
    <div className="App">
      <header className="App-header">
        <dl className="content" ref={inputRef}>
          <dt>Hello world</dt>
          <dd>asdfdsf</dd>
        </dl>
      </header>
    </div>
  );
}

export default App;

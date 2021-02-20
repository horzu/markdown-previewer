import { useState } from 'react';
import './App.css';
import Preview from './Components/markdown';

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) =>{
    setText(e.target.value)
  }


  return (
    <div className="App">
      <header className="text-center px-4">
        
        <h1 className="p-4">Shakar's Markdown Previewer</h1>
        
        <textarea name="text" id="text" rows="10" value={text} className="textarea" onChange={handleChange}>
          
        </textarea>
        
        <h3 className="mt-3">Output</h3>
        <Preview markdown={text} />

      </header>
    </div>
  );
}

export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Content from './components/navegacao.jsx'

function App() {
    window.scroll({top: 0, behavior:'smooth',})

  return (
    <div className="App">
        <Router>
              <Content />
        </Router>
      
      </div>    
  );
}

export default App;
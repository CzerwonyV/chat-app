import React from 'react';
import Contact from '../src/components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Contact
        name="Peter Palmer"
        avatar="https://randomuser.me/api/portraits/men/87.jpg"
      />
    </div>
  );
}
export default App;

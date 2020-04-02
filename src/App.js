import React from 'react';
import Contact from '../src/components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Contact
        name="Peter Palmer"
        avatar="https://randomuser.me/api/portraits/men/87.jpg"
        online
      />
      <Contact
        name="Cécyl Lang"
        avatar="https://randomuser.me/api/portraits/women/57.jpg"
        
      />
      <Contact
        name="Malik Himeur"
        avatar="https://randomuser.me/api/portraits/women/38.jpg"
        online
      />
    </div>
  );
}
export default App;

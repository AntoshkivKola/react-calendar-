
import './App.css';
import React from 'react';
import Greeting from './components/Greeting';

function App() {
  return (
    <>
      <Greeting name="Vlad" age="20"/>
      <Greeting name="Ivan" age="4"/>
      <Greeting name="NeVlad" age="189"/>
    </>
    );
}

export default App;

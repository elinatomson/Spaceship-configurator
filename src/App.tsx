import './App.css'
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

const App: React.FC = () => {
  return (
    <div className="content">
      <Header/>
      <Main/>
    </div>
  );
};

export default App;


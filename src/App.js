import React from 'react';
import './app.css';
import Header from './components/Header/Header';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Form from './components/Form/Form';

const App = () => {
  return (
    <div className="container">
      <Header />
      <ProgressBar />
      <Form />
    </div>
  )
}

export default App
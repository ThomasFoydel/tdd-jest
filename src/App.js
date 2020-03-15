import React from 'react';
import Header from 'components/header/index';
import Headline from 'components/headline/index';
import './app.scss';
function App() {
  return (
    <div className='App'>
      <Header />
      <section className='main'>
        <Headline header='headline' desc='eat more carrots' />
      </section>
    </div>
  );
}

export default App;

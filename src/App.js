import React from 'react';
import Header from 'components/header/index';
import Headline from 'components/headline/index';
import './app.scss';

const tempArr = [
  {
    fName: 'Joe',
    lName: 'Mariot',
    email: 'joemariot@gmail.com',
    age: 24,
    onlineStatus: true
  }
];

function App() {
  return (
    <div className='App'>
      <Header />
      <section className='main'>
        <Headline header='title' desc='eat more carrots' tempArray={tempArr} />
      </section>
    </div>
  );
}

export default App;

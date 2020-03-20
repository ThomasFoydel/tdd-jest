import React, { Suspense } from 'react';
import Header from 'components/header/index';
import Headline from 'components/headline/index';
import './app.scss';

const LazyComp = React.lazy(() => import('components/lazyComp'));

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

      <Suspense
        fallback={
          <img src='https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif' />
        }
      >
        <LazyComp />
      </Suspense>
    </div>
  );
}

export default App;

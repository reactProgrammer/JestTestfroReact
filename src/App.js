import React from 'react';
import './app.scss';
import Header from './component/header/index';
import Headline from './component/headline/index';

function App() {
  return (
    <div className="App">
       <Header/>
       <section className="main">
         <Headline header="posts" desc="click the button to render posts!"/>
       </section>
    </div>
  );
}

export default App;

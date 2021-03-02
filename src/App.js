import React from 'react';
import './app.scss';
import Header from './component/header/index';
import Headline from './component/headline/index';

const tempArr=[{
  fName :'ashwini',
  lName :'chougale',
  email:'ashwini29chougale@gmail.com',
  age :27,
  onlineStatus:true
}]

function App() {
  return (
    <div className="App">
       <Header/>
       <section className="main">
         <Headline header="posts" desc="click the button to render posts!" tempArr={tempArr}/>
       </section>
    </div>
  );
}

export default App;

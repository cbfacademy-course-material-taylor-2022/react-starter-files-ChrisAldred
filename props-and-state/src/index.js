import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
//import data from './models/headphones.json';

import GadgetList from './components/GadgetList';
import ClickCounter from './components/ClickCounter';
import Headphones from './models/headphones.json';
const mainStyle = {"fontFamily":"Arial"};

const App = () => {
  const [headphonesList] = useState(Headphones);

  return <section style={mainStyle}>
    <h1>Electronics Store</h1>
    <GadgetList items={headphonesList}/>
    <ClickCounter/>
  </section>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

import React from 'react';
import { render } from 'react-dom';

import Clock from './components/Clock';

const App = () => {
  return (
    <div>
      <Clock />
    </div>
  );
};

render(<App />, document.getElementById('root'));

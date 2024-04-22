import React from 'react';
import { observer } from 'mobx-react';
import Portfolio from './portfolio';


function App() {

  return (
    <main className='bg-slate-900'>
      <Portfolio />
    </main>
  );
}

export default observer(App);

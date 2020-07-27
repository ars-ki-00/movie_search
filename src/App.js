import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/main';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="Ap">
        <Switch>
          <Route path='/' exact component={Main} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

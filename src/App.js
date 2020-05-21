import React from 'react';
import './App.css';
import { useSetRecoilState } from 'recoil';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import { locale } from './states/globalStates';

function App() {
  const localeChange = useSetRecoilState(locale);
  const Comp1 = loadable(() => import('./components/comp1'));
  const Comp2 = loadable(() => import('./components/comp2'));

  localeChange('ar-AE'); // to change locale
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <div>Home</div>} />
        <Route path="/comp1" component={Comp1} />
        <Route path="/comp2" component={Comp2} />
        <Route path="*" component={() => <div>404</div>} />
      </Switch>
    </Router>
  );
}

export default App;

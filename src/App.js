import React from 'react';
import { FormattedMessage } from 'react-intl';
import './App.css';
import { useSetRecoilState } from 'recoil';
import { locale } from './states/globalStates';

function App() {
  const localeChange = useSetRecoilState(locale);

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            localeChange('ar-AE');
          }}
          type="button"
        >
          Change Language to arabic
        </button>
        <p>
          Edit
          <code>src/App.js</code>
          <FormattedMessage id="homepage.welcome" />
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

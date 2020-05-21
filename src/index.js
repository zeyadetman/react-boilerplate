import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import App from './App';
import messages from './localizations';
import * as serviceWorker from './serviceWorker';
import { locale } from './states/globalStates';
import { GlobalStyle } from './styles/globalStyles';
import { theme } from './styles/theme';

if (!Intl.PluralRules) {
  React.lazy(() => import('@formatjs/intl-pluralrules/polyfill'));
  React.lazy(() => import('@formatjs/intl-pluralrules/dist/locale-data/ar'));
}
if (!Intl.RelativeTimeFormat) {
  React.lazy(() => import('@formatjs/intl-relativetimeformat/polyfill'));
  React.lazy(() =>
    import('@formatjs/intl-relativetimeformat/dist/locale-data/de'),
  );
}

const AppWrapper = () => {
  const localeVal = useRecoilValue(locale);

  return (
    <IntlProvider locale={localeVal} messages={messages[localeVal]}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </IntlProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <AppWrapper />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';

import './app.css';

import store from './store/store';
import { Root } from './components/root';

const engine = new Styletron();

function App() {
  return (
    <Router>
      <Provider store={store}>
        <StyletronProvider value={engine}>
          <BaseProvider theme={LightTheme}>
            <Root />
          </BaseProvider>
        </StyletronProvider>
      </Provider>
    </Router>

  );
}

export default App;

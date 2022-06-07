import './index.css';
import { store , persistor } from '../src/redux/store';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import Main from "./containers/Main";

function App() {
  return (
    <div className="App" >
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
    </div>
  );
}

export default App;

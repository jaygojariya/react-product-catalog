import React, { Suspense } from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./redux/store";
import ErrorBoundary from './components/common/ErrorBoundary';
import "./i18n";

const Root = () => {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <PersistGate loading={null} persistor={persistor}>
          <Suspense fallback={<h1>Loading ....</h1>}>
            <ErrorBoundary>
              <Router >
                <App />
              </Router>
            </ErrorBoundary>
          </Suspense>
        </PersistGate>
      </React.StrictMode>
    </Provider>
  )
}

ReactDOM.render(<Root />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

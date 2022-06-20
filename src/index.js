import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react'
import CounterStore from './store/CounterStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider counterStore={CounterStore}>
    <App />
  </Provider>
);

reportWebVitals();

/*
Store는 컴포넌트에서 사용 가능하도록 Provider를 통해 App 하위에 있는 모든 컴포넌트가 Store를 props와 같이 사용할 수 있도록 설정

* Provider: MobX와 React연결
*/
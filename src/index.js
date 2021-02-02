import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* component returns HTML
        컴포넌트는 HTML를 반환하는 함수이다!!
    */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
  <Route component={App} />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
/*
<Route path ='/malcolm' render={() => <p>Hi I am Malcolm</p>} />
<Route path ='/bryan' render={() => <p>Hi I am Bryan</p>} />
<Route path ='/rebecca' render={() => <p>Hi I am Rebecca</p>} />
<Route path ='/luong' render={() => <p>Hi I am Luong</p>} />
<Route path ='/vishakha' render={() => <p>Hi I am Vishakha</p>} />
<Route path ='/ashwini' render={() => <p>Hi I am Ashwini</p>} />*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

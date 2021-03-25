import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect 
} from 'react-router-dom';
import { Component } from 'react';

//pages
import MainPage from './pages'
import NotFoundPage from './pages/404'
import Malcolm from './pages/malcolm'

class App extends Component {
  render() {
    return <Router>
      <Switch>
        <Route exact path='/' component ={MainPage}/>
        <Route exact path='/404' component={NotFoundPage} />
        <Route exact path='/malcolm' component ={Malcolm}/>
        <Redirect to ='/404'/>
      </Switch>
    </Router>
      /*
        <Route exact path='/malcolm' component ={Malcolm}/>
        <Route exact path='/bryan' component ={Bryan}/>
        <Route exact path='/rebecca' component ={Rebecca}/>
        <Route exact path='/luong' component ={Luong}/>
        <Route exact path='/vishakha' component ={Vishakha}/>
        <Route exact path='/ashwini' component ={Ashwini}/>
      */
    
  }
}

export default App;

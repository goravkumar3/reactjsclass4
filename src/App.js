import './App.css';
import Navigator from './config/router/navigate.js'
import Nav from './component/navbar/nav';
import { HashRouter as Router } from 'react-router-dom';
function App() {
  return (
      <div className="App-header">
        <Router>
        <Nav />
        <Navigator />
        </Router>
      </div>
  );
}

export default App;

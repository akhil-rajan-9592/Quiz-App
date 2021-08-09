import './App.css';
import Add from './componets/Add';
import View from './componets/View';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <div className="container">
        <div className="quiz-box">
          <Link to ='/add'><button>Add Questions</button></Link>
          
          <Link to ='/view'><button>View Questions</button></Link>
        </div>
        <div className="qstin-box">
          
            <Route path='/add'>
              <Add/>              
            </Route>
            <Route path='/view'>
              <View/>              
            </Route>
          
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;

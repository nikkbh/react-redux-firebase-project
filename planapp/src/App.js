import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/dashboard';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import CreateProject from './components/projects/CreateProject';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Dashboard/>
          </Route>
          <Route exact path='/project/:id'>
            <ProjectDetails/>
          </Route>
          <Route exact path='/signin'>
            <SignIn/>
          </Route>
          <Route exact path='/signup'>
            <SignUp/>
          </Route>
          <Route exact path="/create">
            <CreateProject/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

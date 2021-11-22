import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
// Importing the components
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
// Importing the Router and more components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Create } from './components/create';
import { Read } from './components/read';
import { Edit } from './components/edit';


//Creating Class rather than ass a function
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Adding the Nav bar from bootstrap */}
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>

          <br />

          {/* Using the router to switch components */}
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/create' component={Create} />
            <Route path='/read' component={Read}  />
            <Route path='/edit/:id' component={Edit}  />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

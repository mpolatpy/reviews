import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Switch, Route } from 'react-router-dom';
import ReviewList from './pages/ReviewList';
import ReviewDetails from './pages/ReviewDetails';
import Container from '@mui/material/Container';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header headerText='Reviews'/>
      <Container maxWidth='xl'>
        <Switch>
          <Route exact path="/" component={ReviewList} />
          <Route path="/reviews/:id" component={ReviewDetails} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;

import './App.css';
import CardsList from './components/CardsList';
import Header from './components/Header';
import { Container } from 'reactstrap';

function App() {
  return (
    <Container>
      <Header />
      <CardsList />
    </Container>
    
  );
}

export default App;

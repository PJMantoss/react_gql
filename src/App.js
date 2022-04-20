import { Routes } from 'react-router-dom';
import './App.css';
import CharactersList from './pages/CharactersList';

function App() {
  return (
    <div className="App">
      <Routes>
      <CharactersList />
      </Routes>
    </div>
  );
}

export default App;
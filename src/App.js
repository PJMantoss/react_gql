import { Route, Routes } from 'react-router-dom';
import './App.css';
import Character from './pages/Character';
import CharactersList from './pages/CharactersList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<CharactersList />} />
        <Route path='/:id' element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
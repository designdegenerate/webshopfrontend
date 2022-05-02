import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <main className="App">
      <NavBar />
      <article>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
      </Routes>
      </article>
    </main>
  );
}

export default App;

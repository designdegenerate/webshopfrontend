import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';
import Homepage from './pages/Homepage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <main className="App">
      <NavBar />
      <article>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/details/:id" element={<ProductDetailPage/>} />
      </Routes>
      </article>
    </main>
  );
}

export default App;

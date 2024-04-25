import { Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
      </footer>
    </>
  )
}

export default App

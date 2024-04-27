import { Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import UseAllProvider from './hooks/UseAllProvider';
import { CirclesWithBar } from 'react-loader-spinner';

function App() {
  const { userLoader } = UseAllProvider();
  if (userLoader) {
    return (
      <div className='h-screen flex justify-center items-center'>
        <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          outerCircleColor="#4fa94d"
          innerCircleColor="#4fa94d"
          barColor="#4fa94d"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    )
  }
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

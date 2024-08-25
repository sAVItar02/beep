import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="container min-h-screen min-w-full h-full w-full bg-white">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

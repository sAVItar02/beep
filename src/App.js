import Spacing from './components/Spacing';

import './App.css';
import Header from './components/Header';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import TypeOne from './components/TypeOne';
import TypeTwo from './components/TypeTwo';

function App() {
  return (
    <div className="container min-h-screen min-w-full h-full w-full bg-white">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

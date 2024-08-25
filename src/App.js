import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <div className="container min-h-screen min-w-full h-full w-full bg-white">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;

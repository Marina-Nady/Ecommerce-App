import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Provider} from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <Navbar/>
      <Home/>
    </Provider>
  );
}

export default App;

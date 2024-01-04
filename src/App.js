import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Assistant from './components/Assistant';
import AllThread from './components/AllThread';
// import { Provider } from 'react-redux'
// import store from './store'

function App() {
  return (
    // <Provider store={store}>
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/allthread" element={<AllThread />} />
        </Routes>
      </Router>
    </div>
    // {/* </Provider>     */}
  );
}

export default App;

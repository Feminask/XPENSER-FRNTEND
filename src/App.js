import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import AddExpense from './pages/AddExpense';
import EditExpense from './pages/EditExpense';
import SearchExpense from './pages/SearchExpense';
import Landing from './pages/WelcomePage';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WelcomePage from './pages/WelcomePage';

function App() {
  return (
<Provider store={Store}>
      <div className="App">
        <Header></Header>
        <Routes>
        <Route path="/" element={<WelcomePage />} />
  
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<AddExpense />} />
        <Route path="/search" element={<SearchExpense />} />
        <Route path="/edit/:code" element={<EditExpense />} />
  
      </Routes>  
      <ToastContainer />
  </div>
  
</Provider>  );
}

export default App;

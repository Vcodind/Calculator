import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './componets/Footer';
import Header from './componets/Header';
import Home from './componets/Home';
import Second from './componets/Second';
function App() {
  return (
    <>
      <Header />
      <div className="App">
        <div className='main'>
            <Routes> 
              <Route path='/' element={<Home />}/>
              <Route path='/second' element={<Second />}/>
            </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
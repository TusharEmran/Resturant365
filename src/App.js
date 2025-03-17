import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Manu from './Pages/Manu'
import Pagenotfound from './Pages/Pagenotfound'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/Manu' element={<Manu/>}/>
      <Route path='/*' element={<Pagenotfound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

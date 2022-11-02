import Navbar  from './components/Nav/Navbar';
import { Usuarios } from './views/usu/Usuarios';
import { Inicio } from './views/Home/Inicio';
import { Footer } from './components/footer/Footer';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  
  return (
    <>
   <Navbar/>
   <Routes>
   <Route path="/" element={<Inicio />} />
   <Route path="/usuarios" element={<Usuarios />} />
 </Routes>
<Footer/>
</>
  )
}

export default App

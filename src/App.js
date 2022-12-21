import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import ProductsPage from './pages/Products'
import SignIn from './pages/SignInPage';
import SignUp from './pages/SignUpPage';

function App() {
  return (
    
      <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home />} />         
          <Route path='/products' element={<ProductsPage />} />
          <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
          </Routes>
      </BrowserRouter>
    
    
  );
}

export default App;

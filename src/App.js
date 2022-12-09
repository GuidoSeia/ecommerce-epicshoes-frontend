import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import WebsiteLayout from './layouts/Layout';
import ProductsPage from './pages/Products'

function App() {
  return (
    
      <BrowserRouter>
        <WebsiteLayout>
          <Routes>
          <Route path='/' element={<Home />} />         
          <Route path='/products' element={<ProductsPage />} />
          </Routes>
        </WebsiteLayout>
      </BrowserRouter>
    
    
  );
}

export default App;

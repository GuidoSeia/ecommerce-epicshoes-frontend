import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import WebsiteLayout from './layouts/WebsiteLayout';


function App() {
  return (
    <WebsiteLayout>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />         
        </Routes>
      </BrowserRouter>
    </WebsiteLayout>
  );
}

export default App;

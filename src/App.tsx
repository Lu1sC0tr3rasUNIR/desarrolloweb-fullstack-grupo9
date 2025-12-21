import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Pay from './pages/Pay';
import Components from './pages/Components';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/components" element={<Components />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

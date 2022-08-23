import {Home, AddProduct, BidProduct, Products,Nav } from './components/pages';
import socketIO from 'socket.io-client';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

const socket = socketIO.connect('http://localhost:4000');

function App() {
  return (
    <Router>
      <div>
        {/* Nav is available at the top of all the pages as a navigation bar */}
        <Nav socket={socket} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/add"
            element={<AddProduct socket={socket} />}
          />
          {/* Uses dynamic routing */}
          <Route
            path="/products/bid/:name/:price"
            element={<BidProduct socket={socket} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
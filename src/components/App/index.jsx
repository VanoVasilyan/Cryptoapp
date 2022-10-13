import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Home, Exchanges, Cryptocurrencies, CryptoDetails, News } from './../../components';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/exchanges' element={<Exchanges />} />
            <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
            <Route path='/crypto/:coinId' element={<CryptoDetails />} />
            <Route path='/news' element={<News />} />
          </Routes>
        </Layout>
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;

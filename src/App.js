import { useState } from 'react';
import './App.css';
import Nav from './components/HeaderComponents/Nav';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';
import ChannelPage from './pages/ChannelPage';
import { Outlet, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './components/SidebarComponents/Sidebar';

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div>
      <Nav setShowSidebar={setShowSidebar} />
      <Container>
        <Sidebar showSidebar={showSidebar} />
        <Outlet />
      </Container>
    </div>
  );
};

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='main' element={<MainPage />} />
          <Route path=':movieId' element={<DetailPage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='channel'>
            <Route index path=':channelId' element={<ChannelPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
const Container = styled.div`
  display: flex;
`;

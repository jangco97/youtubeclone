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
import SideModal from './components/SidebarComponents/SideModal';

const Container = styled.div`
  display: flex;
  height: 100vh - 75px;
  transition: background-color 300ms;
  z-index: 10;
  @media screen and (max-width: 1280px) {
    ${({ showModal }) =>
      showModal ? 'background-color:  rgba(0, 0, 0, 0.5)' : 'white'};
  }
`;

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Nav setShowSidebar={setShowSidebar} setShowModal={setShowModal} />

      <Container onClick={() => setShowModal(false)} showModal={showModal}>
        <Sidebar showSidebar={showSidebar} />

        <SideModal showModal={showModal} />
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
          <Route index element={<MainPage />} />
          {/* <Route path=':movieId' element={<DetailPage />} /> */}
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

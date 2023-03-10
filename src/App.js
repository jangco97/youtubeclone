import './App.css';
import Nav from './components/Nav';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';
import { Outlet, Routes, Route } from 'react-router-dom';
import Side from './components/Side';
import styled from 'styled-components';
const Layout = () => {
  return (
    <div>
      <Nav />
      <Container>
        <Side />
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
const Container = styled.div`
  display: flex;
`;

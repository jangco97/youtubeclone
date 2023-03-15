import HistoryIcon from '././SidebarIcons/HistoryIcon';
import HomeIcon from '././SidebarIcons/HomeIcon';
import LibraryIcon from '././SidebarIcons/LibraryIcon';
import NavBtn from './NavBtn';
import ShortsIcon from '././SidebarIcons/ShortsIcon';
import './Sidebar.css';
import styled from 'styled-components';
import SubscriptionsIcon from '././SidebarIcons/SubscriptionsIcon';

const Container = styled.div`
  height: 100vh;
  background-color: white;
  @media screen and (max-width: 768px) {
    display: none;
  }
  position: fixed;
  top: 75px;
  z-index: 20;
  ${({ showSidebar }) =>
    showSidebar ? 'width: 210px; padding-left: 20px;' : 'width: fit-content'}
`;

const Sidebar = ({ showSidebar }) => {
  return (
    <Container showSidebar={showSidebar}>
      <NavBtn showSidebar={showSidebar} svgIcon={<HomeIcon />} text={'Home'} />
      <NavBtn
        showSidebar={showSidebar}
        svgIcon={<ShortsIcon />}
        text={'Shorts'}
      />
      <NavBtn
        showSidebar={showSidebar}
        svgIcon={<SubscriptionsIcon />}
        text={'Subscriptions'}
      />
      <NavBtn
        showSidebar={showSidebar}
        svgIcon={<LibraryIcon />}
        text={'Library'}
      />
      <NavBtn
        showSidebar={showSidebar}
        svgIcon={<HistoryIcon />}
        text={'History'}
      />
    </Container>
  );
};

export default Sidebar;

import HistoryIcon from '././SidebarIcons/HistoryIcon';
import HomeIcon from '././SidebarIcons/HomeIcon';
import LibraryIcon from '././SidebarIcons/LibraryIcon';
import NavBtn from './NavBtn';
import ShortsIcon from '././SidebarIcons/ShortsIcon';
import './Sidebar.css';
import SubscriptionsIcon from '././SidebarIcons/SubscriptionsIcon';
import styled, { css } from 'styled-components';
const Sidebar = ({ showSidebar }) => {
  return (
    <Aside className='aside' showSidebar={showSidebar}>
      <NavBtn showSidebar={showSidebar} svgIcon={<HomeIcon />} text={'Home'} />
      <NavBtn showSidebar={showSidebar} svgIcon={<ShortsIcon />} text={'Shorts'} />
      <NavBtn showSidebar={showSidebar} svgIcon={<SubscriptionsIcon />} text={'Subscriptions'} />
      <NavBtn showSidebar={showSidebar} svgIcon={<LibraryIcon />} text={'Library'} />
      <NavBtn showSidebar={showSidebar} svgIcon={<HistoryIcon />} text={'History'} />
    </Aside>
  );
};

export default Sidebar;
const Aside = styled.div`
  .aside {
    ${({ showSidebar }) =>
      showSidebar
        ? css`
            width: 200.3px;
            position: sticky;
            top: 75px;
          `
        : css`
            width: 100.3px;
            position: sticky;
            top: 75px;
          `}
    display: none;
  }
`;

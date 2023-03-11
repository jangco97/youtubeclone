import HistoryIcon from '././SidebarIcons/HistoryIcon';
import HomeIcon from '././SidebarIcons/HomeIcon';
import LibraryIcon from '././SidebarIcons/LibraryIcon';
import NavBtn from './NavBtn';
import ShortsIcon from '././SidebarIcons/ShortsIcon';
import './Sidebar.css';
import SubscriptionsIcon from '././SidebarIcons/SubscriptionsIcon';

const Sidebar = ({ showSidebar }) => {
  return (
    <div className='aside'>
      <NavBtn showSidebar={showSidebar} svgIcon={<HomeIcon />} text={'홈'} />
      <NavBtn
        showSidebar={showSidebar}
        svgIcon={<ShortsIcon />}
        text={'Shorts'}
      />
      <NavBtn
        showSidebar={showSidebar}
        svgIcon={<SubscriptionsIcon />}
        text={'구독'}
      />
      <NavBtn
        showSidebar={showSidebar}
        svgIcon={<LibraryIcon />}
        text={'보관함'}
      />
      <NavBtn
        showSidebar={showSidebar}
        svgIcon={<HistoryIcon />}
        text={'시청 기록'}
      />
    </div>
  );
};

export default Sidebar;

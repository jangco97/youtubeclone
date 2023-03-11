import HistoryIcon from './HistoryIcon';
import HomeIcon from './HomeIcon';
import LibraryIcon from './LibraryIcon';
import NavBtn from './NavBtn';
import ShortsIcon from './ShortsIcon';
import './Sidebar.css';
import SubscriptionsIcon from './SubscriptionsIcon';

const Sidebar = () => {
  return (
    <div className='aside'>
      <NavBtn svgIcon={<HomeIcon />} text={'홈'} />
      <NavBtn svgIcon={<ShortsIcon />} text={'Shorts'} />
      <NavBtn svgIcon={<SubscriptionsIcon />} text={'구독'} />
      <NavBtn svgIcon={<LibraryIcon />} text={'보관함'} />
      <NavBtn svgIcon={<HistoryIcon />} text={'시청 기록'} />
    </div>
  );
};

export default Sidebar;

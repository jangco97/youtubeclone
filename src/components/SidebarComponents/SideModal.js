import styled from 'styled-components';
import ModalNavBtn from './ModalNavBtn';
import HomeIcon from './SidebarIcons/HomeIcon';
import ShortsIcon from './SidebarIcons/ShortsIcon';
import SubscriptionsIcon from './SidebarIcons/SubscriptionsIcon';
import LibraryIcon from './SidebarIcons/LibraryIcon';
import HistoryIcon from './SidebarIcons/HistoryIcon';

const Modal = styled.div`
  position: sticky;
  height: calc(100vh - 75px);
  width: 208.3px;
  background-color: white;
  transition: transform 300ms;
  z-index: 20;
  transform: ${({ showModal }) =>
    showModal ? 'translateX(-83px)' : 'translateX(-300px)'};
  @media (min-width: 1280px) {
    display: none;
  }
`;

const SideModal = ({ showModal }) => {
  return (
    <Modal showModal={showModal} onClick={(e) => e.stopPropagation()}>
      <ModalNavBtn svgIcon={<HomeIcon />} text={'Home'} />
      <ModalNavBtn svgIcon={<ShortsIcon />} text={'Shorts'} />
      <ModalNavBtn svgIcon={<SubscriptionsIcon />} text={'Subscriptions'} />
      <ModalNavBtn svgIcon={<LibraryIcon />} text={'Library'} />
      <ModalNavBtn svgIcon={<HistoryIcon />} text={'History'} />
    </Modal>
  );
};

export default SideModal;

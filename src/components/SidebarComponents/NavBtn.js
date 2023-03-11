import styled from 'styled-components';
import './Sidebar.css';

const NavBtn = ({ svgIcon, text, showSidebar }) => {
  const Title = styled.h3`
    ${!showSidebar ? 'font-size: smaller' : 'margin-left: 20px'}
  `;

  if (!showSidebar)
    return (
      <button className='nav-btn-2'>
        <div>{svgIcon}</div>
        <Title>{text}</Title>
      </button>
    );

  return (
    <button className='nav-btn'>
      {svgIcon}
      <Title>{text}</Title>
    </button>
  );
};

export default NavBtn;

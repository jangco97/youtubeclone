import './Sidebar.css';

const NavBtn = ({ svgIcon, text }) => {
  return (
    <button className='nav-btn'>
      {svgIcon}
      <h3>{text}</h3>
    </button>
  );
};

export default NavBtn;

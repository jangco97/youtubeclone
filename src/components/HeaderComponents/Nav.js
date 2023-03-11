import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import './Nav.css';
import { useNavigate } from 'react-router-dom';

const Nav = ({ setShowSidebar }) => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };

  return (
    <div className='nav'>
      <div className='svg-img'>
        <button
          className='hamburger-btn'
          onClick={() => setShowSidebar((prev) => !prev)}
        >
          <svg
            className='hamburger'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
          >
            <path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
          </svg>
        </button>

        <img
          src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'
          alt='Youtube Logo'
          onClick={goHome}
          className='logo'
        />
      </div>
      <div>
        <input />
        <button>
          <FontAwesomeIcon icon={solid('magnifying-glass')} />
        </button>
      </div>
      <div>
        <FontAwesomeIcon icon={solid('square-plus')} />
        <FontAwesomeIcon icon={solid('table-cells')} />
        <FontAwesomeIcon icon={regular('bell')} />
      </div>
    </div>
  );
};

export default Nav;

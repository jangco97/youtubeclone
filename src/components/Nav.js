import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon, solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

import './Nav.css';
import { useNavigate } from 'react-router-dom';
const Nav = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };
  return (
    <div className='nav'>
      <div>
        CoffeeTube
        <FontAwesomeIcon icon={icon({ name: 'coffee', style: 'solid' })} onClick={goHome} />
      </div>
      <div>
        <input></input>
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

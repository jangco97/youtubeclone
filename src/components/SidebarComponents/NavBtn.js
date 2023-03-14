import styled, { css } from 'styled-components';
import './Sidebar.css';

const Btn = styled.button`
  text-align: center;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: white;
  :hover {
    background-color: #f0f0f0;
  }

  @media (min-width: 768px) {
    ${({ showSidebar }) =>
      showSidebar
        ? css`
            div {
              margin-right: 20px;
            }
            padding: 0 10px;
            width: 50%;
            height: 40px;
            margin-left: 20px;
          `
        : css`
            flex-direction: column;
            justify-content: center;
            width: 80px;
            height: 60px;
            padding-top: 10px;
            margin-left: 3px;
            h3 {
              font-size: smaller;
            }
          `}
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    flex-direction: column;
    justify-content: center;
    div {
      margin-right: 0;
    }
    width: 80px;
    height: 60px;
    padding-top: 10px;
    margin-left: 3px;
    h3 {
      font-size: smaller;
    }
  }

  @media screen and (max-width: 768px) {
    div {
      margin-right: 20px;
    }
    padding: 0 10px;
    height: 40px;
    width: 168.3px;
    margin-left: 20px;
  }
`;

const NavBtn = ({ svgIcon, text, showSidebar }) => {
  return (
    <Btn showSidebar={showSidebar}>
      <div>{svgIcon}</div>
      <h3>{text}</h3>
    </Btn>
  );
};

export default NavBtn;

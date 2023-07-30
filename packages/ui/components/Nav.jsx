import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const NavBox = styled.button`
  position: absolute;
  font-family: Georgia, "Times New Roman", Times, serif;
  display: flex;
  font-size: 1em;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  left: 25px;
  top: 25px;
  z-index: 999;
  max-width: 350px;
  height: 35px;
  background-color: lightgrey;
  color: black;
  border: 1px solid white;
  border-radius: 3pt;
  padding: 0 25px 0 10px;
  cursor: pointer;
`;

const NavBoxOpen = styled(NavBox)`
  border-bottom: 1px solid white !important;
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
`;

const NavCarot = styled.span`
  &::after {
    content: "▼";
    font-size: 0.8em;
    margin-left: 5px;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: start;
  left: 25px;
  top: 60px;
  z-index: 999;
  background-color: lightgrey;
  border-right: 1px solid white;
  border-left: 1px solid white;
  border-bottom: 1px solid white;
  border-bottom-left-radius: 3pt;
  border-bottom-right-radius: 3pt;
  padding: 10px 25px 10px 10px;
  white-space: nowrap;
  overflow-x: hidden;
`;

export function Nav({ pages }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [location, setLocation] = React.useState([""]);
  const [divWidth, setDivWidth] = React.useState("250px");
  const navRef = React.useRef();

  React.useEffect(() => {
    setDivWidth(navRef.current.offsetWidth);
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (e) => {
    setLocation(e.target.innerText);
    setIsOpen(false);
  };

  const currentRoute = useLocation();
  const pagePath = pages.find((d) => d.path === currentRoute.pathname);

  return (
    <>
      <NavBox
        ref={navRef}
        as={isOpen ? NavBoxOpen : NavBox}
        onClick={handleOpen}
      >
        <span>Lecture:&nbsp;</span>
        <NavCarot>{pagePath.title} </NavCarot>
      </NavBox>
      {isOpen ? (
        <Dropdown style={{ width: divWidth - 37 }}>
          {pages
            ? pages.map((d, i) => {
                return (
                  <Link to={d.path} key={`lecture${i * 141}`}>
                    <span onClick={handleClick}>{d.title}</span>{" "}
                  </Link>
                );
              })
            : null}
        </Dropdown>
      ) : null}
    </>
  );
}

Nav.propTypes = {
  pages: PropTypes.array.isRequired,
};

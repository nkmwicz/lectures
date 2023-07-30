import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

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
      <button
        ref={navRef}
        className={isOpen ? "nav-box nav-box-open" : "nav-box"}
        onClick={handleOpen}
      >
        <span>Lecture:&nbsp;</span>
        <span className="nav-carot">{pagePath.title} </span>
      </button>
      {isOpen ? (
        <div className="dropdown" style={{ width: divWidth - 37 }}>
          {pages
            ? pages.map((d, i) => {
                return (
                  <Link to={d.path} key={`lecture${i * 141}`}>
                    <span onClick={handleClick}>{d.title}</span>{" "}
                  </Link>
                );
              })
            : null}
        </div>
      ) : null}
    </>
  );
}

Nav.propTypes = {
  pages: PropTypes.array.isRequired,
};

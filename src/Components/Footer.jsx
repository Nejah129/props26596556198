import React from "react";
import PropTypes from 'prop-types';


const Footer = ({ children, normal }) => {
  console.log(children);
  return (
    <div>
      <h1>{children[0]}</h1>
      <h1>{children[1]}</h1>

      <h3>{normal}</h3>
    </div>
  );
};

Footer.defaultProps = {
   normal:"this is a default props"
  }
  Footer.propTypes = {
    normal: PropTypes.string
  };

export default Footer;

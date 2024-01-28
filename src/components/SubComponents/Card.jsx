import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function Card({ children }) {

  const {theme} = useContext(ThemeContext);

  return (
    <div
      className={"bg-white shadow-md shadow-gray-300 rounded-md p-4 mb-5 color-bg " + theme}
      style={{ boxShadow: "1px 0 15px -3px rgba(0, 0, 0, 0.3)" }}
    >
      {children}
    </div>
  );
}

export default Card;

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

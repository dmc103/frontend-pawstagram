import PropTypes from "prop-types";

function Card({ children }) {
  return (
    <div
      className="bg-white shadow-md shadow-gray-300 rounded-md p-4 mb-5"
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

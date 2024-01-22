import PropTypes from 'prop-types'




function Card( {children} ) {
  return (
    <div className="bg-white shadow-md shadow-gray-300 rounded-md p-4 mb-5">
    {children}
    </div>
  )
}




export default Card


Card.propTypes = {
    children: PropTypes.node.isRequired,
}
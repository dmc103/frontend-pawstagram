import PropTypes from 'prop-types'


function NavCard( {children} ) {
  return (
    <div className="bg-teal-200 shadow-md shadow-gray-300 rounded-md p-4 mb-5">
    {children}
    </div>
  )
}




export default NavCard


NavCard.propTypes = {
    children: PropTypes.node.isRequired,
}
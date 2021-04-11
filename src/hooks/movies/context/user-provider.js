import MoviesContext from './index';
import PropTypes from 'prop-types';

const UserProfileProvider = (props) => {
  const infoUser = {
    id: 1,
    user: "admin",
    email: "admin@gmail.com",
    full_name: "Thanh Trieu"
  }

  return (
    <MoviesContext.Provider value={infoUser}>
      {props.children}
    </MoviesContext.Provider>
  )
}
UserProfileProvider.propTypes = {
  children: PropTypes.node.isRequired
}
export default UserProfileProvider;
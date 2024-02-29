import PropTypes from 'prop-types';

function UserGreeting(props) {
  // if(props.isLoggedIn){
  //     return <h2>Welcome {props.username}</h2>
  // }
  //     return <h2>please log in</h2>

  //or use ternary operator

  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.username}</h2>
  );

  const logInPrompt = <h2 className="login-prop"> Please log in</h2>;
  return props.isLoggedIn ? welcomeMessage : logInPrompt;
}
UserGreeting.prototype ={
  isLoggedIn: PropTypes.bool,
  username:PropTypes.string,

}
UserGreeting.defaultProps ={
  isLoggedIn: false,
  username: "Guest",
}
export default UserGreeting;

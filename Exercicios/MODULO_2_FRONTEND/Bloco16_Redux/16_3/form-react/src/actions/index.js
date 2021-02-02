const saveUser = ({ name, email, tel }) => ({
  type: 'ADD_USER',
  payload: {
    name,
    email,
    tel,
  }
});

export default saveUser;

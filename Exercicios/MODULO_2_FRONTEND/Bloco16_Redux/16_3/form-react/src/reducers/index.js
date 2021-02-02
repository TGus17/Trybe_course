const INITIAL_STATE = {
  user: []
};

const cadastroReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch(action.type) {
    case 'ADD_USER':
      return {
        user: [...state.user, {
          name: payload.name,
          email: payload.email,
          tel: payload.tel
        }]        
      };
    default:
      return state;
  }
}

export default cadastroReducer;
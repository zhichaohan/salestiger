const initialState = {
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case 'TEMPLATE':
      return {
        ...state,
        test: true,
      }
    default:
      return state
  }
}

export default home

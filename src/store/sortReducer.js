const defaultState = {
   sorted: false,
};

const sortReducer = (state = defaultState, action = {}) => {
   switch (action.type) {
      case 'TOGGLE_SORT':
         return { ...state, sorted: !state.sorted };

      default:
         return state;
   }
};
export default sortReducer.reducer;

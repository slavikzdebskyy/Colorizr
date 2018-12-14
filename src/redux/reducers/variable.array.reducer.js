const variableArrayReducer = (state = [], action) => {
  switch (action.type) {

    case 'INIT_VARIABLES_ARRAY':
      return [...action.payload];
      
    case 'CHANGE_VARIABLE':      
      state[action.payload.index].variableName = action.payload.variable;      
      return [...state];
   
    default:
     return [...state];
  }
}

export default variableArrayReducer;


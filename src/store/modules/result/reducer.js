const resultReducer =(state = 0, action)=>{
  console.log(action)
  switch (action.type) {
    case 'ADD_NUMBER':
      return state + action.payload;
    case "SUB_NUMBER":
      return  state - action.payload;
    default:
      return state;
  }
}
export default resultReducer;

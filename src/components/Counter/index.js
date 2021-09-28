import { useDispatch } from 'react-redux'

const Counter =()=>{
  const dispatch = useDispatch();
  return(
    <>
      <button onClick={()=>dispatch({type: "ADD_NUMBER", payload: 1})}>add</button>
      <button onClick={()=>dispatch({type: "SUB_NUMBER", payload: 1})}>less</button>
    </>
  );
};
 export default Counter;

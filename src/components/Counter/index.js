import {useDispatch} from 'react-redux'
import {addNumber, subNumber} from '../../store/modules/result/actions';

const Counter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(addNumber(1))}>add</button>
      <button onClick={() => dispatch(subNumber(1))}>less</button>
    </>
  );
};
export default Counter;

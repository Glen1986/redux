import {useSelector} from 'react-redux';
const Display =()=>{
  const result = useSelector(store=>store.result)
  return(
  <>
    <div>{result}</div>
   </>
  )
}
export default Display;

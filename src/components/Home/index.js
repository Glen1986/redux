import { useHistory } from 'react-router-dom';


const Home =({isAllowed})=>{

  const history = useHistory();

if(!isAllowed){
  history.push("/");
}
const handleLogout =()=>{
  history.push("/");
}

  return(
    <>
      <div> Home </div>
      <button onClick={handleLogout}>LogOut</button>
    </>
  );
};
export default Home;

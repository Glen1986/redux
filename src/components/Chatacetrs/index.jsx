
import CharCard from '../CharCard'
import './style.css'
const Characters =({characterList})=>{
  return(
  <div className="container">
    {
      characterList.map(char => <CharCard key={char.id} char={char}/>)
    }
  </div>
  )
}
export default Characters;

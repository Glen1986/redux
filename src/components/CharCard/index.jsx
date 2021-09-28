
import './style.css'
const CharCard = ({ char: {id, name, image, status}}) =>{

  return(
    <div className ="card">
      <label>{id}{name}</label>
      <img className ="picture" src={image} alt={name} />
    </div>
  )

}
export default CharCard;

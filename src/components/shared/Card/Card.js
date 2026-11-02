const Card = ({title}) =>{
    
  return(
  
  <>
    <h3>{title()}</h3>
    <button style={ {cursor: "pointer"} }>click</button>

  </>
  )
}

export default Card;

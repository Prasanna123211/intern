const Cards = ({images,description,purpose}) => {
    return (
  <>
      <div className="cards">
         
        <div className="image">{images}</div>
        <div className="stylei">      
        <h1 className="desc">{description}</h1>
        <p className="purp">{purpose}</p></div>
      </div>
      </>
    )
  }
  
  export default Cards
  
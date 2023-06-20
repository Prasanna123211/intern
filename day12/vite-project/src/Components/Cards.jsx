
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Cards = ({asicon, title, content, children ,status}) => {
  return (
    
    <div className="cards">
      {children}
      <FontAwesomeIcon icon={asicon} />
        <hr />
        <h3>{title}</h3>
        <p>{content}</p>

    </div>
  )
}

export default Cards
import Cards from "./Components/Cards"
import { faCalendar } from "@fortawesome/free-regular-svg-icons" 
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons" 
import { faSmile } from "@fortawesome/free-regular-svg-icons"
import "./cards.css"

function App() {
  
  return (
    <>
      <div className="main">

      
      
        <Cards
          asicon ={faCalendar}
          title="Sales Planning"
          content="This is sales planning"
        />
        
        <Cards 
          asicon={faCalendarCheck}
          title="Sales Planning"
          content="This is sales planning"
        />
        

        
        <Cards 
          asicon={faSmile}
          title="Sales Planning"
          content="This is sales planning"
        />

      </div>
    
      </>

  )
}

export default App
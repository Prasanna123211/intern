
import './App.css'
import Cards from './components/Cards'
import './cards.css'

function App() {

  return (
    <>

     <div className='main'>
      <div className='top'>
      <h1 className='headd'>Popular Products</h1>
      <h1 className='dott'>..</h1>
      </div>
      <Cards 
      images={<img src='https://i5.walmartimages.com/asr/3c1b6022-d49d-46ed-ba51-d4e2cc416221.57942615ec15f3fae02c35e43e080b5d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
      className='img'></img>}
      description={"Home office true comfort Chair with wood legs"}
      purpose={"Home interior"}/>
      <hr />
      <Cards 
      images={<img src='https://m.media-amazon.com/images/I/51+OW8m9A8S._AC_UL600_FMwebp_QL65_.jpg'
      className='imgmid'></img>}
      description={"Fancy PVC plastics orange medium size chair"}
      purpose={"Home interior"}/>
      <hr />
      <Cards 
      images={<img src='https://www.home-designing.com/wp-content/uploads/2020/10/modern-cheap-white-office-chair-work-from-home-furniture-inspiration-small-workspace-design-ideas-600x600.jpg'
      className='img'></img>}
      description={"White office true comfort Chair with good legs"}
      purpose={"Home interior"}/>
     </div>
    
    </>
  )
}

export default App

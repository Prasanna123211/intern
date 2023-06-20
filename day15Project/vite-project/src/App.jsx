import React, { useState } from 'react';
import Cards from './Cards';
import './App.css';
import './cards.css';

function App() {
  const pizzas = [
    {
      imageSrc: 'https://www.learnitalianpod.com/wp-content/uploads/2022/12/original_italian_pizza.jpg',
      className: 'imgfir',
      description: 'Italian pizza with tomato toppings and leaves',
      purpose: 'Best For All'
    },
    {
      imageSrc: 'https://buy.am/media/image/3e/18/8e/Neapolitan-pizza-Spicy-chicken-12-Ktor-PizzavIrRNrX7OWK3A_600x600.jpg',
      className: 'imgmid',
      description: 'Nepiletana Spicy Pizza with mushroom and leaves',
      purpose: 'Top Choice'
    },
    {
      imageSrc: 'https://slicelife.imgix.net/26776/photos/original/product-hawaiian-pizza-2920126.jpeg?auto=compress&auto=format',
      className: 'img',
      description: 'Calofonia pizza with leaves and olives',
      purpose: 'For kids'
    },
    {
      imageSrc: 'https://images.ctfassets.net/nw5k25xfqsik/1easDqrrZX6AFZ9i0SCIAz/effffb5e9a87d23f29dc127ce19a71b0/bacon_spinah.jpg',
      className: 'imglst',
      description: 'Italian pizza with tomato toppings and leaves',
      purpose: 'Best in vegan'
    }
  ];

  const [counts, setCounts] = useState(Array(pizzas.length).fill(0));

  const handleIncrease = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      switch (index) {
        case 0:
          newCounts[index] += 25;
          break;
        case 1:
          newCounts[index] += 30;
          break;
        case 2:
          newCounts[index] += 35;
          break;
        case 3:
          newCounts[index] += 29;
          break;
      }
      return newCounts;
    });
  };

  return (
    <>
      <div className='main'>
        <h1 className='mainS'><u>List Of Pizza</u></h1>
        {pizzas.map((pizza, index) => (
          <React.Fragment key={index}>
            <Cards
              images={<img src={pizza.imageSrc} className={pizza.className} />}
              description={pizza.description}
              purpose={pizza.purpose}
            />
            <div className='bttn-container'>
              <button className='bttn' onClick={() => handleIncrease(index)}>
                <span>$</span> {counts[index]}
              </button>
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default App;

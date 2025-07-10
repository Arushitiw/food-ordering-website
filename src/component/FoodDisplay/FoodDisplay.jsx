import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/storeContext';
import Fooditem from '../Fooditem/Fooditem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Fallback in case context is null (prevents app from crashing)
  if (!food_list) return <div className="food-display">Loading food items...</div>;

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>

      <div className="food-display-list">
        {food_list
          .filter(item => category === 'All' || item.category === category)
          .map((item) => (
            <Fooditem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;

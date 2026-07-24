import React from 'react';
import './Categoey.css';
import { categories } from '../Data/productsData';

function Category({ categorys, setCategorys }) {
  const handleCategoryClick = (id) => {
    setCategorys(categorys === id ? 0 : id);
  };

  return (
    <div className='container-category' id='category'>
      {categories.map((item, index) => {
        const isSelected = categorys === item.id;
        return (
          <div
            className={`item ${isSelected ? 'active' : ''}`} 
            key={item.id || index}
            onClick={() => handleCategoryClick(item.id)} 
          >
            <img src={item.image || item.img} alt={item.name} />
            <span>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Category;
import React from 'react';
function Categories({ value, onClickCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => (
          <li key={i} onClick={() => onClickCategory(i)} className={value === i ? 'active' : null}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

import React, { useContext } from 'react';
import { FilterContext } from '../../context/FilterContext';

export default function Tab() {
  const { setFilter, filters, filter } = useContext(FilterContext);
  const handleClick = (filter) => {
    setFilter(filter);
  };
  return (
    <div>
      {filters.map((item, index) => (
        <button
          className={`text-white mr-3 capitalize ${
            item === filter && 'border-t-2 border-white'
          }`}
          key={index}
          onClick={() => {
            handleClick(item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

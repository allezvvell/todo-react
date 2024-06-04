import React, { useContext, useRef, useState, useEffect } from 'react';
import { FilterContext } from '../../context/FilterContext';

export default function Tab() {
  const { setFilter, filters } = useContext(FilterContext);
  const [coord, setCoord] = useState(0);
  const [width, setWidth] = useState(0);
  const divRef = useRef(null);

  const handleClick = (filter) => {
    setFilter(filter);
  };
  const addAnimation = (e) => {
    const target = e.target;
    if (target.tagName !== 'BUTTON') return;
    setCoord(target.offsetLeft);
    setWidth(target.offsetWidth);
  };
  useEffect(() => {
    const { width } = divRef.current.children[0].getBoundingClientRect();
    setWidth(width);
  }, []);
  return (
    <div onClick={addAnimation} className="relative" ref={divRef}>
      {filters.map((item, index) => (
        <button
          className={`text-white mr-3 py-1 capitalize`}
          key={index}
          onClick={() => {
            handleClick(item);
          }}
        >
          {item}
        </button>
      ))}
      <span
        style={{
          width: `${width}px`,
          height: '2px',
          transform: `translateX(${coord}px)`,
        }}
        className="absolute left-0 top-0 transition-all bg-white"
      ></span>
    </div>
  );
}

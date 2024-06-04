import { createContext, useState } from 'react';

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const filters = ['all', 'completed', 'active'];
  const [filter, setFilter] = useState(filters[0]);
  return (
    <FilterContext.Provider value={{ filter, setFilter, filters }}>
      {children}
    </FilterContext.Provider>
  );
}

import { createContext, useEffect, useState, useContext } from "react";

const Category = createContext(null);

export const CategoryProvider = ({ children }) => {
  const [hasCategory, setHasCategory] = useState(null);
  const setCategory = (category) => setHasCategory(category);
  return (
    <Category.Provider value={{ hasCategory, setCategory }}>
      {children}
    </Category.Provider>
  );
};

const useCategory = () => useContext(Category);

export default useCategory;

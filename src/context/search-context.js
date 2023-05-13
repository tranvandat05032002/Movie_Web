import React from "react";
export const SearchContext = React.createContext();
export default function SearchProvider({ children }) {
  const [toggleSearch, setToggleSearch] = React.useState(false);
  const [querySearch, setQuerySearch] = React.useState("");
  const [pathNameLocal, setPathNameLocal] = React.useState("");
  const [dataLoadMore, setDataLoadMore] = React.useState([]);
  return (
    <SearchContext.Provider
      value={{
        toggleSearch,
        setToggleSearch,
        querySearch,
        setQuerySearch,
        pathNameLocal,
        setPathNameLocal,
        dataLoadMore, setDataLoadMore
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

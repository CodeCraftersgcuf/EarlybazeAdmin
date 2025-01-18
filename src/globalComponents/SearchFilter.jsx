import React from "react";

const SearchFilter = ({
  Icon,
  Placeholder = "Search User",
  handleFunction = () => console.log("search button"),
}) => {
  return (
    <div className="bg-theme-dark relative py-2 px-2 rounded-lg">
      <i className="bi bi-search text-2xl absolute top-1/2 left-3 transform -translate-y-1/2 block"></i>
      <input
        type="text"
        onChange={(e) => handleFunction(e.target.value)}
        className="ml-9 bg-transparent pl-2 text-xl outline-none py-1 placeholder:text-white placeholder:text-base"
        placeholder={Placeholder}
      />
    </div>
  );
};

export default SearchFilter;

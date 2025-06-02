import React from "react";

const SearchFilter = (props) => {
  const handleInputChange = (event) => {
    event.preventDefault()
    props.setSearch(event.target.value);
  };

  const handleSelectChange  =(event)=>{
    props.setFilter(event.target.value)
  }
  return (
    <section className="section-searchFilter container">
      <input
        type="text"
        placeholder="Search"
        value={props.search}
        onChange={handleInputChange}
      />
      
      <div>
        <select className="select-section" value={props.filter} onChange={handleSelectChange}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default SearchFilter;

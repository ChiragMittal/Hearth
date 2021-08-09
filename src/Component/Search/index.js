import React from "react";

const SearchInput = ({
  query,
  field,
  onFieldChange,
  onQueryChange,
  submitForm
}) => (
  <form className="search__form" onSubmit={submitForm}>
    <input
      className="search__input"
      type="text"
      placeholder="search books"
      onChange={onQueryChange}
      value={query}
      autoFocus
    />
    <select className="search_select" value={field} onChange={onFieldChange}>
      <option value="ZIP OR POSTAL CODE">ZIP CODE</option>
      <option value="ADDRESS">ADDRESS</option>
      <option value="CITY">CITY</option>
    </select>
  </form>

);

export default SearchInput;
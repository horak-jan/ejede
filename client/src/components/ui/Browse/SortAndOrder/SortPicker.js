const SortPicker = (props) => {
  return (
    <div className="sort">
      <select onChange={(e) => props.setSortType(e.target.value)}>
        <option value="rating">Hodnocení</option>
        <option value="range">Dojezd</option>
        <option value="price">Cena</option>
      </select>
      <p>Řadit dle:</p>
    </div>
  );
};

export default SortPicker;

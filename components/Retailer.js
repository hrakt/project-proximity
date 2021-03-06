const Retailer = ({ retailerCount, zipCode, setRadius }) => {
  const handleChange = (e) => {
    setRadius(e.target.value);
  };
  return (
    <div>
      <span>{retailerCount} retailers</span>
      <select onChange={handleChange} class="select">
        <option>10</option>
        <option>25</option>
        <option>50</option>
      </select>
      <span>miles nears {zipCode}</span>
    </div>
  );
};

export default Retailer;

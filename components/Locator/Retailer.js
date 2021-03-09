const Retailer = ({ retailerCount, zipCode, setRadius }) => {
  const handleChange = (e) => {
    setRadius(e.target.value);
  };

  const handleInitialMessage = () => {
    return (
      <div class="message">
        Please enter your zip code to find Lotus near you
      </div>
    );
  };

  return (
    <div>
      {zipCode !== "" ? (
        <>
          <span>{retailerCount} retailers</span>
          <select onChange={handleChange} class="select">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <span>miles near {zipCode}</span>
        </>
      ) : (
        handleInitialMessage()
      )}
    </div>
  );
};

export default Retailer;

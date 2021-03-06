const Retailer = ({ retailerCount, zipCode }) => {
  return (
    <div>
      {retailerCount} retailers near {zipCode}
    </div>
  );
};

export default Retailer;

import { useState } from "react";

const ZipField = ({ setZipCode }) => {
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    value.toString().length == 5
      ? setZipCode(value)
      : alert("Invalid zip code");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Zip Code" onChange={handleChange} />
    </form>
  );
};

export default ZipField;

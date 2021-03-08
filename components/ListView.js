import list from "./ReailerList";
import zipcodes from "zipcodes";

const ListView = ({ zipCode, radius, setRetailerCount }) => {
  const returnLink = (item) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${item.address}%20${item.street}%20${item.city}%2C%20${item.state}%20US%20${item.zip}`;
  };

  const filterList = (zip) => {
    let filteredList = [];
    zipcodes.lookup(zip) != undefined
      ? list.map((item, key) => {
          if (zipcodes.distance(zip, item.zip) <= radius) {
            filteredList.push(
              <div key={key} className="list-item">
                <a href={returnLink(item)}>
                  <p>{item.name}</p>
                  <p>
                    {item.address} {item.street}, {item.city}, {item.state},{" "}
                    {item.zip}
                  </p>
                </a>
              </div>
            );
          }
        })
      : null;

    filteredList.length > 0 ? setRetailerCount(filteredList.length) : null;

    return filteredList;
  };

  const renderAll = () => {
    let renderList = [];
    list.map((item, key) => {
      renderList.push(
        <div key={key} className="list-item">
          <a href={returnLink(item)}>
            <p>{item.name}</p>
            <p>
              {item.address} {item.street}, {item.city}, {item.state},{" "}
              {item.zip}
            </p>
          </a>
        </div>
      );
    });
    return renderList;
  };

  const renderList = (zip) => {
    let filteredList = [];

    zip != "" ? (filteredList = filterList(zip)) : (filteredList = renderAll());

    return filteredList;
  };

  return <div className="list">{renderList(zipCode)}</div>;
};

export default ListView;

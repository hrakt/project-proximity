import list from "./ReailerList";
import zipcodes from "zipcodes";
import { useEffect } from "react";

const ListView = ({ zipCode, radius, setRetailerCount }) => {
  const returnLink = (item) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${item.address}%20${item.street}%20${item.city}%2C%20${item.state}%20US%20${item.zip}`;
  };

  const renderList = (zip) => {
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
    filteredList.length > 0
      ? setRetailerCount(filteredList.length)
      : filteredList.push(<div>No retailers found nearby</div>);
    return filteredList;
  };

  return <div className="list">{renderList(zipCode)}</div>;
};

export default ListView;

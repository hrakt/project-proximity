import list from "./ReailerList";

const ListView = () => {
  return (
    <div className="list">
      {list.map((item, key) => {
        const href = `https://www.google.com/maps/dir/?api=1&destination=${item.address}%20${item.street}%20${item.city}%2C%20${item.state}%20US%20${item.zip}`;
        return (
          <div key={key} className="list-item">
            <a href={href}>
              <p>{item.name}</p>
              <p>
                {item.address} {item.street}, {item.city}, {item.state},{" "}
                {item.zip}
              </p>
            </a>
          </div>
        );
      })}{" "}
    </div>
  );
};

export default ListView;

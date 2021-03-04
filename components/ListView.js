import list from "./ReailerList";

const ListView = () => {
  return (
    <div className="list">
      {list.map((item, key) => {
        return (
          <div key={key} className="list-item">
            <p>{item.name}</p>
            <p>
              {item.address}, {item.city}, {item.state}, {item.zip}
            </p>
          </div>
        );
      })}{" "}
    </div>
  );
};

export default ListView;

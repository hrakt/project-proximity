import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
import list from "./ReailerList";

// const LocationPin = ({ text }) => (
//   <div
//     style={{
//       color: "white",
//       background: "grey",
//       padding: "15px 10px",
//       display: "inline-flex",
//       textAlign: "center",
//       alignItems: "center",
//       justifyContent: "center",
//       borderRadius: "100%",

//     }}
//   >
//     {text}
//   </div>
// );

const Map = () => {
  const center = { lat: 34.052616, lng: -118.232114 };
  const zoom = 10;
  return (
    <div style={{ height: "600px", width: "800px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {list.map((retailer, key) => {
          return (
            <LocationPin
              key={key}
              lat={retailer.lat}
              lng={retailer.lng}
              text="center"
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;

import { useState } from "react";

import DefaultLayout from "../layouts/DefaultLayout";
import RetailerCount from "../components/Locator/RetailerCount";
import ZipField from "../components/Locator/ZipField";
import ViewSelector from "../components/Locator/ViewSelector";
import Map from "../components/Locator/Map";
import ListView from "../components/Locator/ListView";

import styles from "../components/Locator/Locator.module.scss";

export default function Locator() {
  const [zipCode, setZipCode] = useState("");
  const [radius, setRadius] = useState(10);
  const [viewSelector, setViewSelector] = useState("list");
  const [retailerCount, setRetailerCount] = useState(0);

  return (
    <DefaultLayout>
      <div className={styles.locator}>
        <ViewSelector setViewSelector={setViewSelector} />
        <RetailerCount
          retailerCount={retailerCount}
          zipCode={zipCode}
          setRadius={setRadius}
        />
        <ZipField setZipCode={setZipCode} />
        {viewSelector === "list" ? (
          <ListView
            zipCode={zipCode}
            radius={radius}
            setRetailerCount={setRetailerCount}
          />
        ) : null}
        {viewSelector === "map" ? <Map /> : null}
      </div>
    </DefaultLayout>
  );
}

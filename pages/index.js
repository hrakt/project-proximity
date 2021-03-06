import Head from "next/head";
import { useState } from "react";
import Retailer from "../components/Retailer";
import ZipField from "../components/ZipField";
import ViewSelector from "../components/ViewSelector";
import Map from "../components/Map";
import styles from "../styles/Home.module.css";
import ListView from "../components/ListView";

export default function Home() {
  const [zipCode, setZipCode] = useState("90006");
  const [viewSelector, setViewSelector] = useState("list");

  return (
    <div className={styles.container}>
      <Head>
        <title>Project Proximity</title>
      </Head>

      <main className={styles.main}>
        <ViewSelector setViewSelector={setViewSelector} />
        <ZipField setZipCode={setZipCode} />
        <Retailer zipCode={zipCode} />
        {viewSelector === "list" ? (
          <ListView zipCode={zipCode} radius={50} />
        ) : null}
        {viewSelector === "map" ? <Map /> : null}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

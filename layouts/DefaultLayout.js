import Head from "next/head";

import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import React from "react";
import Modal from "../components/Modal";
import Contact from "../components/Contact/Contact";

const DefaultLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Modal></Modal>
      <Nav />
      <Contact />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default DefaultLayout;
